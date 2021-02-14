/**
 * Login to server. Returns token information to store in a cookie
 * @param {string} username Username
 * @param {string} password Password
 */
const login = async (username, password) => {
    // const data1 = await fetchAuthGet('/auth/me')
    const data = await fetchAuthGet('/auth/login', {
        query: {
            username,
            password,
        }
    })

    return data
}
