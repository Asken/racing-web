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
            'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImtyaXN0aWFuLmFza0BnbWFpbC5jb20iLCJpYXQiOjE2MTI3OTcxMzQsImV4cCI6MTYxMjg4MzUzNH0.iiNVGiBaUEUpu6hqdwdhIbc3P0nurnbLRJr5miRPb-E'
        }
    })
}