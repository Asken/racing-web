var express = require('express')
var router = express.Router()
const Auth = require('../models/auth')

// Auth
router.get('/login', async (req, res) => {
    const username = req.query.username
    const password = req.query.password

    // TODO: Test user and password
    // ...

    res.send({
        success:true
    })
})

module.exports = router
