export const state = () => ({
    accessToken: null,
    refreshToken: null,
    user: null,
});

export const getters = {
    isAuthenticated(state) {
        return !!state.accessToken;
    },
    user(state) {
        return state.user;
    },
};

export const mutations = {
    setTokens(state, { accessToken, refreshToken = null }) {

        state.accessToken = accessToken;

        if (refreshToken) {
            state.refreshToken = refreshToken;
        }
    },
    setUser(state, user) {
        this.$cookies.set('client_id', user._id)
        state.user = user;
    },
    logout(state) {
        state.accessToken = null;
        state.refreshToken = null;
        state.user = null;
        this.$cookies.remove('client_id')
    }
};

export const actions = {
    async nuxtServerInit({ state, commit, dispatch, getters }) {

        const cookie = this.$cookies.get('auth');
        if (cookie) {
            commit('setTokens', cookie.auth);
        }

        const { accessToken, refreshToken } = state.auth;
        if (accessToken && refreshToken) {
            try {
                await dispatch('refresh');
                await dispatch('getUser');
            } catch (e) {
                commit('logout');
            }
        }
    },
    async login({ commit, dispatch }, { email, password }) {
        const res = await this.$axios.$post(`${process.env.NUXT_ENV_BASE_URL_API_VERSION}/auth/login`, {
            email,
            password
        });

        if (res.error) {
            return res
        }

        commit('setTokens', res.data.token);

        return res
    },
    async loginByPhone({ commit, dispatch }, { phone, password }) {
        const res = await this.$axios.$post(`${process.env.NUXT_ENV_BASE_URL_API_VERSION}/auth/phone`, {
            phone,
            password
        });

        if (res.error) {
            return res
        }

        commit('setTokens', res.data.token);

        await dispatch('getUser');

        return res
    },
    async registerByPhone({ commit, dispatch }, { phone, password, registerBy, registerAt }) {
        const res = await this.$axios.$post(`${process.env.NUXT_ENV_BASE_URL_API_VERSION}/auth/register/phone`, {
            phone,
            password,
            registerBy,
            registerAt
        });

        if (res.error) {
            return res
        }

        return res
    },
    async loginBySocial({ commit, dispatch }, token) {

        commit('setTokens', token);

        await dispatch('getUser');
    },
    async setCookieLogin({ commit, dispatch }, token) {

        await this.$cookies.set("auth", token.token, {
            path: "/",
            maxAge: 60 * 60 * 24 * 7,
        });

        commit('auth/setTokens', token.token);

        await dispatch('getUser');
    },
    async register({ commit, dispatch }, token) {

        commit('setTokens', token);
        await dispatch('getUser');

    },
    async setCookieLogin({ commit, dispatch }, token) {

        commit('setTokens', token);
        await dispatch('getUser');
    },
    async getUser({ commit, getters }) {
        if (getters.isAuthenticated) {

            const res = await this.$axios.$get(`${process.env.NUXT_ENV_BASE_URL_API_VERSION}/users/me`)
                .then(result => {

                    if (result.error) {
                        return 
                    }

                    commit('setUser', result.data);

                }).catch(err => {
                    if (err && err.response && err.response.error) {
                        return {};
                    }
                })

            return res
        }
    },
    async refresh({ state, commit, dispatch }) {
        const res = await this.$axios.$post(`${process.env.NUXT_ENV_BASE_URL_API_VERSION}/auth/refresh-token`, {
            refreshToken: state.refreshToken
        }, {
            "Authorization": `Bearer ${state.accessToken}`
        });

        dispatch('setCookieLogin', res.data.token);
    },
    async logout({ commit }) {
        // const res = await this.$axios.$post(`${process.env.NUXT_ENV_BASE_URL_API_VERSION}/auth/refresh-token`, {
        //     refreshToken: state.refreshToken
        // }, {
        //     "Authorization": `Bearer ${state.accessToken}`
        // });

        commit('logout');
    }
};