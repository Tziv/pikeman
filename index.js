const express = require('express');
const api = require('./server/api');
const bodyParser = require('body-parser');
const config = require('./server/config');

const app = express();
app.set('port', config.port);
if (config.env === 'prod') {
    app.use(express.static('webapp/build'));
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(api, '/api');

app.listen(config.port, () => {
    console.log('server running at: http://localhost:', config.port)
});