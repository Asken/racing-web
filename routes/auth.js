var express = require('express')
var router = express.Router()
const Identity = require('../models/identity')

// Auth
router.get('/login', async (req, res) => {
    const username = req.query.username
    const password = req.query.password

    // TODO: Test user and password
    const ok = await Identity.checkLogin(username, password)

    res.send({
        success: ok
    })
})

module.exports = router
