import { result } from "lodash";

// export default function ({ $axios, redirect }) {
export default async function ({
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

        if (error.response.data.code == 401) {

            const refreshToken = store.state.auth.refreshToken;

            if (refreshToken) {

                return await $axios.$post(`${process.env.NUXT_ENV_BASE_URL_API_VERSION}/auth/refresh-token`, {
                    refreshToken: store.state.auth.refreshToken
                }, {
                    "Authorization": `Bearer ${store.state.auth.accessToken}`
                }).then(async result => {

                    if (result.error) {
                        store.commit('auth/logout');
                        return redirect('/');
                    }

                    await store.dispatch("auth/setCookieLogin", result.data.token)

                    // store.commit('auth/setTokens', result.data.token);
                })
                    .catch(err => {

                        if (err) {
                        store.commit('auth/logout');
                        return redirect('/');
                    }
                })
            }

            store.commit('auth/logout');
            return redirect('/');
        }

        return Promise.reject(error);
    });
}