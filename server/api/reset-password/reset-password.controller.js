/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/reset-password              ->  index
 */

'use strict';

// Gets a list of ResetPasswords
import request from 'request';
import base from '../../config/base.js';

var endpoint = 'passwords/';

export function post (req, res) {
	var reqData = req.body;
	console.log('== Request data:');
	console.log(reqData);
	request.post(
    base.url + endpoint + '?key=' + base.authKey,
    { json: {email: reqData.email, url: 'http://localhost:3000/new-password'} },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log('== Reset password response:');
        console.log(body);
				res.json(body);
      }
      else {
        console.log('== Reset password POST Error');
        console.log(body);
				res.status('500').send('Invalid login. Error: ' + body);
      }
    }
	);
}
export function put (req, res) {
  var reqData = req.body;
  console.log('== Request data:');
  console.log(reqData);
  request.put(
    base.url + endpoint + '?key=' + base.authKey,
    { json: reqData },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log('== New password response:');
        console.log(body);
        res.json(body);
      }
      else {
        console.log('== New password PUT Error');
        console.log(body);
        res.status('500').send('Invalid login. Error: ' + body);
      }
    }
  );
}
