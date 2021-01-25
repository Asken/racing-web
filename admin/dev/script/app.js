const startApp = () => {
    if (!isLoggedIn()) {
        // showLogin()
        location.href = '#/login'
    }
}