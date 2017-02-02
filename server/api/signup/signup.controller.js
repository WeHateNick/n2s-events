/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/signup              ->  index
 */

'use strict';

import request from 'request';
import base from '../../config/base.js';

var endpoint = 'customers/';

export function post (req, res) {
	var reqData = req.body;
	console.log('== Request data:');
	console.log(reqData);
	request.post(
    base.url + endpoint + '?key=' + base.authKey,
    { json: reqData },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log('== Signup response:');
        console.log(body);
				res.json(body);
      }
      else {
        console.log('== Signup POST Error');
        console.log(error);
				res.status('500').send('Invalid signup data. Error: ' + error);
      }
    }
	);
}

