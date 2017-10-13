const Authorizer = require('./base.authorizer');

class WindowsAuthorizer extends Authorizer {
    constructor() {
        super();
        this.type = 'windows_authentication';
    }

    authorize({username, password}) {
        return password === '7';
    }
}

module.exports = WindowsAuthorizer;