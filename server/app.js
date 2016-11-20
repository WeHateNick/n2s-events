/**
 * Main application file
 */

'use strict';

import express from 'express';
import config from './config/environment';
import http from 'http';

// Setup server
var app = express();
var server = http.createServer(app);
require('./config/express').default(app);
require('./routes').default(app);

// Start server
function startServer() {
  app.angularFullstack = server.listen(config.port, config.ip, function() {
    console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
  });
}

// var reqObj = {
//   'username": "nicolasocampo89@hotmail.com',
//   'password": "Simple123'
// };
// app.post('https://n2sreno.clubspeedtiming.com/api/index.php/customers/login?key=7VlopsPCbJeotMiXdCH4', function (req, res) {
// 	req.send(reqObj)
// });

setImmediate(startServer);

// Expose app
exports = module.exports = app;
