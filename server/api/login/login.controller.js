/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/login              ->  index
 */

'use strict';

import request from 'request';

var reqObj = {
  'username': 'nicolasocampo89@hotmail.com',
  'password': 'Simple123'
};
var baseUrl = 'https://n2sreno.clubspeedtiming.com/api/index.php/';
var endpoint = 'customers/login/';
const N2S_AUTH_KEY = '7VlopsPCbJeotMiXdCH4';
// Gets a list of Logins
export function index(req, res) {
	request.post(
    baseUrl + endpoint + '?key=' + N2S_AUTH_KEY,
    { json: reqObj },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log('NEED 2 SPEED:');
        console.log(body);
				res.json(body);
      }
      else {
        console.log('== Login POST Error');
        console.log(error);
      }
    }
	);
}
