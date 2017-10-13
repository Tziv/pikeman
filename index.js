const express = require('express');
const bodyParser = require('body-parser');
const config = require('./server/config');
const controller = require('./server/authorization.controller');
const configValidator = require('./server/configuration_validator');

const app = express();
app.set('port', config.port);
if (config.env === 'prod') {
    app.use(express.static('webapp/build'));
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/authorize', controller.authorize);

app.listen(config.port, () => {
    console.log('server running at: http://localhost:', config.port)
});