const config = require('./config');
const jwt = require('jsonwebtoken');

class TokenProvider {
    authorizeByAD(username, password, ADAuthorizer, options) {
        let allowedProviders =  ADAuthorizer.getAllowedProviders(username, password, options);

    }
}

module.exports = TokenProvider;