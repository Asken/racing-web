const config = require('./config')
const { Pool } = require('pg')

// pools will use environment variables for connection information
const pool = new Pool(config.postgres)

const listSettings = async () => {
    const result = await pool.query('SELECT * FROM setting')
    return result
}

const getIdentity = async (username) => {
    const result = await pool.query('SELECT * FROM identity WHERE username = $1::text', [username])
    return result
}

module.exports = {
    listSettings
}
