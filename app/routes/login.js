
var express = require('express');
var router = express.Router();
const LoginService = require('../services/user/login_service') ;

router.post('/', function(req, res, next) {
    console.log('コンソールログイン',req.body);
    // const result = LoginService.login(req.body.username,req.body.password)
    res.sendStatus(200);
  });


module.exports = router;