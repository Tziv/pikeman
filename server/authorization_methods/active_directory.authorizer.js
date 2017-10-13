const config = require('../config');
const Authorizer = require('./base.authorizer');
const ActiveDirectory = require('activedirectory');

class ADAuthorizer extends Authorizer{
    constructor() {
        super();
        this.type = 'active_directory';
        this.activeDirectoryClient = new ActiveDirectory(config.authorization.activeDirectorySettings.connectionDetails);
    }

    // Default implementation
    authorize({username, groupName}) {
        return this.activeDirectoryClient.isUserMemberOf(username, groupName, (err, isMember) => {
            if (err) {
                // mock
                return username === '6';
            } else {
                return isMember;
            }
        });
    }
}

module.exports = ADAuthorizer;