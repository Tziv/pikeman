let config = {
    env: 'dev',
    host: 'localhost',
    port: process.env.PORT || 3060,
    authorization: {
        activeDirectorySettings: {
            connectionDetails: {
                url: 'ldap://dc.domain.com',
                baseDN: 'dc=domain,dc=com',
                username: 'username@domain.com',
                password: 'password'
            }
        },
        privilegeGroupToAuthorizationMethod: {
            User: 'windows_authentication',
            Staff: 'active_directory',
            Admin: 'active_directory'
        }
    }
};

module.exports = config;