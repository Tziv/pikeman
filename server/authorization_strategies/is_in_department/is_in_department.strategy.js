const strategyConfig = require('./is_in_department.config');

class IsInDepartment extends AuthorizationStrategy {
    constructor() {
        super();
        this.type = strategyConfig.strategyName;
    }

    authorizeByStrategy(username, userDepartment, {departmentName}) {
        return new Promise((resolve, reject) => {
            resolve(department === departmentName);
        });
    }
}

module.exports = IsInDepartment;