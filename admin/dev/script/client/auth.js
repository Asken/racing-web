const login = async (username, password) => {
    const data = await fetchGet('/auth/login', {
        query: {
            username,
            password,
        }
    })

    return data
}