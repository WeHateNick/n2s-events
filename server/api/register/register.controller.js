/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/register              ->  index
 */

'use strict';

import request from 'request';
import base from '../../config/base.js';

var endpoint = 'eventHeatDetails/';

export function post (req, res) {
	var reqData = req.body;
	console.log('== Request data:');
	console.log(reqData);
	request.post(
    base.url + endpoint + '?key=' + base.authKey,
    { json: reqData },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log('== Register response:');
        console.log(body);
				res.json(body);
      }
      else {
        console.log('== Register POST Error');
        console.log(body.error);
				res.status('500').send('Registration failed. Error: ' + body.error.message);
      }
    }
	);
}
