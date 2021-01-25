const listSettings = async () => {
    return await fetchGet('/settings')
}

const getSettings = async (serverName) => {
    return await fetchGet(`/settings/${serverName}`)
}
