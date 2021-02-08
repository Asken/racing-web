const listSettings = async () => {
    return await fetchGet('/settings')
}

const getSettings = async (server_name) => {
    return await fetchGet(`/settings/${server_name}`)
}
