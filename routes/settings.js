var express = require('express')
const { listSettings } = require('../data')
var router = express.Router()
const Setting = require('../models/settings')

// Settings
router.get('/:server_name', async (req, res) => {
    const data = await listSettings()
    res.send({
        success:true,
        settings: data.rows
    })
})

router.get('/values', async (req, res) => {
    res.send({
        options: Setting.options(),
        success: true,
    })
})

module.exports = router
