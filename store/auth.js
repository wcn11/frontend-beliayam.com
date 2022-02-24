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
        state.user = user;
    },
    logout(state) {
        state.accessToken = null;
        state.refreshToken = null;
        state.user = null;
    }
};

export const actions = {
    async nuxtServerInit({ state, commit, dispatch, getters }) {

        const cookie = this.$cookies.get('auth');
        if (cookie) {
            commit('auth/setTokens', cookie.auth);
        }

        const { accessToken, refreshToken } = state.auth;
        if (accessToken && refreshToken) {
            try {
                await dispatch('auth/refresh');
                await dispatch('auth/getUser');
            } catch (e) {
                commit('auth/logout');
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

        commit('auth/setTokens', res.data.token);
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
    async register({ commit, dispatch }, { name, email, password, registerBy, registerAt }) {
        const res = await this.$axios.$post(`${process.env.NUXT_ENV_BASE_URL_API_VERSION}/auth/register`, {
            name,
            email,
            password,
            registerBy,
            registerAt
        });

        if (res.error) {
            return res
        }

        commit('setTokens', res.data.token);
        await dispatch('getUser');

        return res
    },
    async getUser({ commit, getters }) {
        if (getters.isAuthenticated) {

            const res = await this.$axios.$get(`${process.env.NUXT_ENV_BASE_URL_API_VERSION}/users/me`);

            commit('setUser', res.data);

            return res.data
        }
    },
    async refresh({ state, commit }) {
        const res = await this.$axios.$post(`${process.env.NUXT_ENV_BASE_URL_API_VERSION}/auth/refresh-token`, {
            refreshToken: state.refreshToken
        }, {
            "Authorization": `Bearer ${state.accessToken}`
        });

        commit('setTokens', res.data.token);
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