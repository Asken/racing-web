const { pool } = require('../data')
const crypto = require("crypto")

class Identity {
    constructor({
        id = -1,
        name = '',
        email = '',
        password_key = '',
        steam_id = '',
        discord_id = '',
        created = new Date(),
        update = new Date(),
    } = {
    }) {
        this.id = id
        this.name = name
        this.email = email
        this.password_key = password_key
        this.steam_id = steam_id
        this.discord_id = discord_id
        this.created = created
        this.update = update
    }

    static async load(username) {
        const result = await pool.query('SELECT * FROM identity WHERE email = $1::text', [username])
        if (result.rows.length) {
            return result.rows[0]
        }
        return null
    }

    static async checkLogin(username, password) {
        const id = await Identity.load(username)
        if (!id) {
            return false
        }
        const hash = crypto
            .createHash("sha256")
            .update(password)
            .digest("hex");
        
        return id.password_key === hash
    }
}

module.exports = Identity
