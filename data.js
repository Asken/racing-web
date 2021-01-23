const config = require('./config')
const { Pool, Client } = require('pg')

// pools will use environment variables
// for connection information
const pool = new Pool(config.postgres)

const servers = async () => {
    const result = await pool.query('SELECT * FROM server')
}

module.exports = {
    servers
}
