let config;
if (process.env.NODE_ENV === 'production || prod') {
    config = require('./configurations/config.prod');
} else if (process.env.NODE_ENV === 'development || dev') {
    config = require('./configurations/config.dev');
} else {
    // Default
    config = require('./configurations/config.dev');
}

module.exports = config;