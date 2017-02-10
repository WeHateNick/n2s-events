/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/facebook-login/              ->  index
 */

'use strict';

import request from 'request';
import base from '../../config/base.js';

var endpoint = 'racers/fb_login/';

export function post (req, res) {
	var reqData = req.body;
	console.log('== Request data:');
	console.log(reqData);
	request.post(
    base.url + endpoint + '?key=' + base.authKey,
    { json: reqData },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log('== Facebook login response:');
        console.log(body);
				res.json(body);
      }
      else {
        console.log('== Facebook login POST Error');
        console.log(error);
				res.status('500').json(body.error);
      }
    }
	);
}

