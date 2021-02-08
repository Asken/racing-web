pubsub.subscribe('route', async (path) => {
    location.href = `#${path}`
})
