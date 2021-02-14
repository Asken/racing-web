/**
 * Fetch server data using GET request
 * @param {string} url Path to server resource
 * @param {object} config Configuration for the call
 */
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

/**
 * Fetch server data using GET request with authorization header. The
 * function requires a Pub/Sub subscription to `needAuthHeaders` where
 * the headers for the authorization is returned. Example:
 * ```
pubsub.subscribe('needAuthHeaders', async (callback) => {
    const access_token = document.cookie['access_token']
    callback(access_token ? {
        'authorization': `Bearer ${access_token}`
    } : {})
})```
 * @param {string} url Path to server resource
 * @param {object} config Configuration for the call
 */
const fetchAuthGet = async (url, config) => {
    debugger
    return await fetchGet(url, {
        ...config,
        ...{
            headers: {
                ...{},
                ...getAuthHeaders()
            }
        }
    }, config)
}

/**
 * Get the autorization headers through Pub/Sub
 * @private
 */
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
