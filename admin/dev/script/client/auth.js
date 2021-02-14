const login = async (username, password) => {
    const data1 = await fetchAutGet('/auth/me')
    const data = await fetchGet('/auth/login', {
        query: {
            username,
            password,
        }
    })

    return data
}