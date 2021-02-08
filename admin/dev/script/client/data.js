const fetchGet = async (url, config) => {
    let q = ''
    if (config.query) {
        q = Object.keys(config.query)
            .map(k => `${k}=${config.query[k]}`)
            .join('&')
        url += `?${q}`
    }
    const response = await fetch(url, { cache: 'no-cache' })
    const data = await response.json()
    return data
}
