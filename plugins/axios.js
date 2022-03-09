// export default function ({ $axios, redirect }) {
export default function ({
    store,
    $axios,
    redirect
}) {
    $axios.onRequest((config) => {
        // check if the user is authenticated
        if (store.state.auth.accessToken) {
            // set the Authorization header using the access token
            config.headers.Authorization = 'Bearer ' + store.state.auth.accessToken;
        }

        return config;
    });

    $axios.onError(async (error) => {
        const statusCode = error.response ? error.response.status : -1;

        if (statusCode === 401) {
            const refreshToken = store.state.auth.refreshToken;
            if (error.response.data.code === 401 && refreshToken) {
                if (Object.prototype.hasOwnProperty.call(error.config, 'retryAttempts')) {
                    store.commit('auth/logout');
                    return redirect('/');
                }
                const config = { retryAttempts: 1, ...error.config };
                try {
                    await store.dispatch('auth/refresh');
                    return Promise.resolve($axios(config));
                } catch (e) {
                    store.commit('auth/logout');
                    return redirect('/');
                }
            }

            store.commit('auth/logout');
            return redirect('/');
        }

        return Promise.reject(error);
    });
}