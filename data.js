const config = require('./config')
const { Pool } = require('pg')

// pools will use environment variables
// for connection information
const pool = new Pool(config.postgres)

const listSettings = async () => {
    const result = await pool.query('SELECT * FROM settings')
    return result
}

module.exports = {
    listSettings
}
