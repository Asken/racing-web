const fetchGet = async (url, config) => {
    let q = ''
    let headers = {}
    if (config) {
        if (config.query) {
            q = Object.keys(config.query)
                .map(k => `${k}=${config.query[k]}`)
                .join('&')
            url += `?${q}`
        }
        if (config.headers) {
            headers = Object.assign({
                'Content-Type': 'application/json'
            }, config.headers)
        }
    }
    const response = await fetch(url,
    {
        cache: 'no-cache',
        headers
    })
    const data = await response.json()
    return data
}

const fetchAutGet = async (url, config) => {
    return await fetchGet(url, {
        headers: {
            ...{},
            ...getAuthHeaders()
        }
    }, config)
}

const getAuthHeaders = async () => {
    return new Promise(async (res, rej) => {
        const hasHandler = await pubsub.publish('needAuthHeaders', (headers) => {
            res(headers)
        })
        if (!hasHandler) {
            console.error('getAuthHeaders require a pubsub.subscribe(\'needAuthHeaders\'')
            rej(null)
        }
    })
}
