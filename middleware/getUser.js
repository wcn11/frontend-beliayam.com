export default async function (context) {
    if (context.store.getters['auth/isAuthenticated']) {
        context.store.dispatch("auth/getUser")
    }
};