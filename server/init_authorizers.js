const _ = require('lodash');
const config = require('./config');
const ADAuthorizer = require('./authorization_methods/active_directory.authorizer');
const WindowsAuthorizer = require('./authorization_methods/windows_authentication.authorizer');

const authorizers = [];

let initializer = {
    getAuthorizers: getAuthorizers
};

function getAuthorizers() {
    for (let authorizer of config.authorization.privilegeGroupToAuthorizationMethod) {
        switch (authorizer) {
            case 'active_directory': {
                if (!_.find(authorizers, authorization => authorization.type === 'active_directory')) {
                    authorizers.push(new ADAuthorizer(config.authorization.activeDirectorySettings));
                }
                break;
            }
            case 'windows_authentication': {
                if (!_.find(authorizers, authorization => authorization.type === 'windows_authentication')) {
                    authorizers.push(new WindowsAuthorizer());
                }
                break;
            }
        }
    }
    return authorizers;
}

module.exports = initializer;