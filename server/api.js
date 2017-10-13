const express = require('express');
const TokenProvider = require('./token_provider');
const ADAuthorizer = require('./authorization_methods/active_directory.authorizer');

const router = express.Router();

const activeDirectoryAuthorizer = new ADAuthorizer();
const tokenProvider = new TokenProvider();

router.post('/authorize?method=ad', authorizeByAD);

function authorizeByAD(req, res) {
    const {username, password}  = req.body;

    res.json(tokenProvider.authorizeByAD(username, password, activeDirectoryAuthorizer, options));
}

module.exports = router;