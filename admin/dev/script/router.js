const server = function (server_name) {
    console.log(`server: server_name is populated: ${server_name}`)
}

const books = function () { console.log('books') }

const routes = {
    '/login': showLogin,
    '/books': [books, function() {
        console.log('An inline route handler.')
    }],
    '/server': function() { pubsub.publish('settings') },
    '/server/view/:server_name': function(server_name) { pubsub.publish('settings', server_name) },
}

const router = Router(routes)

router.init()
