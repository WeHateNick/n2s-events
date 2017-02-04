'use strict';

var express = require('express');
var controller = require('./reset-password.controller');

var router = express.Router();

router.post('/', controller.post);
router.put('/', controller.put);

module.exports = router;
