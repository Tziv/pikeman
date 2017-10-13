let config = {
    env: 'dev',
    host: 'localhost',
    port: process.env.PORT || 3060,
    activeDirectorySettings: {
        url: 'ldap://dc.domain.com',
        baseDN: 'dc=domain,dc=com',
        username: 'username@domain.com',
        password: 'password'
    },
    privilegeGroups: [
        {
            groupName: 'super user',
            authorizationStrategies: [
                {
                    type: 'is_in_department',
                    parameters: {
                        department: 'it'
                    }
                },
                {
                    type: 'is_in_email_group',
                    parameters: {
                        emailGroupName: 'Super Users'
                    }
                }
            ]
        },
        {
            groupName: 'admin',
            authorizationStrategies: [
                {
                    type: 'is_in_email_group',
                    parameters: {
                        emailGroupName: 'Admins'
                    },
                    strict: true
                }
            ]
        }
    ],
    tokenProducing: {
        tokenTTL: 1440
    }
};
module.exports = config;