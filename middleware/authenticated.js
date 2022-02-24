
export default function (context) {
    // If the user is not authenticated
    if (!context.store.getters['auth/isAuthenticated']) {
        return context.redirect('/login')
    }
}