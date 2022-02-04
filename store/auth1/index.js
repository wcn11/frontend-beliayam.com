export const state = () => ({
    isAuthenticated: false,
})


export const getters = {
    // getCookie: (state) => {
    //     const cookie = {
    //         "token": this.$cookies.get("bacClientToken"),
    //         "refreshToken": this.$cookies.get("bacClientRefreshToken")
    //     }

    //     return cookie
    // }
}

export const mutations = {
    setCookie(state, data) {

        this.$cookies.set(
            "bacClientToken",
            data.token.accessToken,
            {
                path: "/",
                maxAge: 3600,
            }
        );
        this.$cookies.set(
            "bacClientRefreshToken",
            data.token.refreshToken,
            {
                path: "/",
                maxAge: 365 * 24 * 60 * 60,
            }
        );
        state.loggedIn = true
    },
}