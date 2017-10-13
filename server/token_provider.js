const config = require('./config');
const jwt = require('jsonwebtoken');

class TokenProvider {
    constructor(secret) {
        this.secret = secret;
    }
    createToken(data) {
        return jwt.sign(data, this.secret, {
            expiresInMinutes: config.tokenProducing.tokenTTL // expires in 24 hours
        });
    }
}

module.exports = TokenProvider;