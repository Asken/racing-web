const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()
const Identity = require('../models/identity')
const { verifyToken, verifyTokenRedirect } = require('./verifytoken')

// Auth
router.get('/login', verifyToken, async (req, res) => {
    const username = req.query.username
    const password = req.query.password

    const ok = await Identity.checkLogin(username, password)
    if (ok) {
        const token = jwt.sign({ id: username }, process.env.site_secret, {
            expiresIn: 86400
        })
        res.send({
            success: ok,
            token
        })
    }
    else {
        res
            .status(403)
            .send({
                success: false
            })
    }
})

router.get('/me', verifyTokenRedirect, async (req, res) => {
    const user = await Identity.load(req.userId)
    res.send({
        success: true,
        user
    })
})

module.exports = router
