pubsub.subscribe('login', async () => {
    let username = $('#username').val()
    let password = $('#password').val()

    const res = await login(username, password)
    console.log(res)

    $('#login').modal('hide')
    $('#login').remove()
    pubsub.publish('route', '/server/view/default')
})
