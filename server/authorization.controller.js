const config = require('./config');
const secretKeyProvider = require('./secret_key');
const TokenProvider = require('./token_provider');
const ActiveDirectory = require('activedirectory');
const IsInDepartmentStrategy = require('./authorization_strategies/is_in_department/is_in_department.strategy');
const IsInEmailGroupStrategy = require('./authorization_strategies/is_in_email_group/is_in_email_group.strategy');

const activeDirectoryClient = new ActiveDirectory(config.activeDirectorySettings);
const isInDepartmentStrategy = new IsInDepartmentStrategy();
const isInEmailGroupStrategy = new IsInEmailGroupStrategy(activeDirectoryClient);
const secretKey = secretKeyProvider.getSecretKey();
const tokenProvider = new TokenProvider(secretKey);

const strategiesByType = {};
strategiesByType[isInEmailGroupStrategy.type] = isInEmailGroupStrategy;
strategiesByType[isInDepartmentStrategy.type] = isInDepartmentStrategy;

const authorizationController = {
    authorize: authorize
};

function authorize(req, res) {
    const {username, department} = req.body;
    const privilegeGroups = config.privilegeGroups;
    const privileges = privilegeGroups.filter(group => {
        const authorizationPromises = group.authorizationStrategies.map(strategy => {
            const strategyInstance = strategiesByType[strategy.type];
            return strategyInstance.authorizeByStrategy(username, department, strategy.parameters);
        });
        return Promise.all(authorizationPromises)
            .then(values => {
            let isPartOfGroup = false;
            if (group.strict) {
                if (values.every(result => result)) {
                    isPartOfGroup = true;
                }
            } else {
                if (values.some(result => result)) {
                    isPartOfGroup = true;
                }
            }
            return isPartOfGroup;
            })
            .catch(err => {
                res.status(500).json(err);
            });
    }).map(group => group.groupName);
    const token = tokenProvider.createToken(privileges);
    res.json(token);
}

module.exports = authorizationController;