let config = {
    env: 'dev',
    host: 'localhost',
    port: process.env.PORT || 80,
    authorization: {
        activeDirectorySettings: {
            connectionDetails: {
                url: 'ldap://dc.domain.com',
                baseDN: 'dc=domain,dc=com',
                username: 'username@domain.com',
                password: 'password'
            },
            emailGroupMapping: {
                elastic: 'Elastic Users',
                hadoop: 'Hadoop Users'
            }
        },
        providerMapping: {
            elastic: 'elastic',
            hadoop: 'hadoop'
        }
    }
};

module.exports = config;