'use strict';

var express = require('express');
var controller = require('./event.controller');

var router = express.Router();

router.get('/:eventId', controller.index);

module.exports = router;
