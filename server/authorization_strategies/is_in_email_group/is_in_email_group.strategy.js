const strategyConfig = require('./is_in_email_group.config');
const AuthorizationStrategy = require('../base.strategy');

class IsInEmailGroup extends AuthorizationStrategy {
    constructor(activeDirectoryClient) {
        super();
        this.type = strategyConfig.strategyName;
        this.activeDirectoryClient = activeDirectoryClient;
    }

    authorizeByStrategy(username, userDepartment, {groupName}) {
        return new Promise((resolve, reject) => {
            this.activeDirectoryClient.isUserMemberOf(username, groupName, (err, isMember) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(isMember);
                }
            });
        });
    }
}

module.exports = IsInEmailGroup;