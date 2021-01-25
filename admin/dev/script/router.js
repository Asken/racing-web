const server = function (serverName) {
    console.log(`server: serverName is populated: ${serverName}`)
}

const books = function () { console.log('books') }

const routes = {
    '/login': showLogin,
    '/books': [books, function() {
        console.log('An inline route handler.')
    }],
    '/server': function() { pubsub.publish('settings') },
    '/server/view/:serverName': function(serverName) { pubsub.publish('settings', serverName) },
}

const router = Router(routes)

router.init()
