var jwt = require('jsonwebtoken')

function verifyToken(req, res, next) {

    // check header or url parameters or post parameters for token
    var token = req.headers['authorization']
    if (!token && !token.startsWith('Bearer ')) {
        return res.status(403).send({ auth: false, message: 'No token provided.' });
    }
    token = token.split(' ')[1]

    // verifies secret and checks exp
    jwt.verify(token, process.env.site_secret, function(err, decoded) {      
        if (err) {
            return res.status(500).send({
                auth: false,
                message: 'Failed to authenticate token.'
            })
        }

        // if everything is good, save to request for use in other routes
        req.userId = decoded.id
        req.tokenData = decoded
        next();
    });
}

module.exports = verifyToken
