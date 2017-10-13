const config = require('../config');
const ActiveDirectory = require('activedirectory');

class ADAuthorizer {
    constructor() {
        this.activeDirectoryClient = new ActiveDirectory(config.authorization.activeDirectorySettings.connectionDetails);
    }

    getAllowedProviders(username, password, options) {
        return this.activeDirectoryClient.authenticate(username, password, (result, err) => {
            if (err) {
                throw err;
            } else {
                return result;
            }
        });
    }
}

module.exports = ADAuthorizer;