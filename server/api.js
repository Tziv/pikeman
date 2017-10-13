const express = require('express');
const TokenProvider = require('./token_provider');
const ADAuthorizer = require('./authorization_methods/active_directory.authorizer');

const router = express.Router();


const tokenProvider = new TokenProvider();
const activeDirectoryAuthorizer = new ADAuthorizer();
const privilegeGroupToAuthorization = {

};



const authorizers = [activeDirectoryAuthorizer];

router.post('/authorize?method=ad', authorizeByAD);

function authorize(req, res) {
    const authorizationType = req.

    res.json(tokenProvider.authorizeByAD(username, password, activeDirectoryAuthorizer, options));
}

module.exports = router;