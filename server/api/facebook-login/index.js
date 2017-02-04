'use strict';

var express = require('express');
var controller = require('./facebook-login.controller');

var router = express.Router();

router.post('/', controller.post);

module.exports = router;
