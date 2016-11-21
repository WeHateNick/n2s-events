/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/login              ->  index
 */

'use strict';

import request from 'request';

var mockReqObj = {
  'username': 'nicolasocampo89@hotmail.com',
  'password': 'Simple123'
};
var baseUrl = 'https://n2sreno.clubspeedtiming.com/api/index.php/';
var endpoint = 'customers/login/';
const N2S_AUTH_KEY = '7VlopsPCbJeotMiXdCH4';
// Gets a list of Logins
export function index(req, res) {
	if (true) {
		// var reqData = req.body.data;
		// console.log('== Request data:');
		// console.log(reqData);
		// request.post(
	 //    baseUrl + endpoint + '?key=' + N2S_AUTH_KEY,
	 //    { json: reqData },
	 //    function (error, response, body) {
	 //      if (!error && response.statusCode == 200) {
	 //        console.log('NEED 2 SPEED:');
	 //        console.log(body);
		// 			res.json(body);
	 //      }
	 //      else {
	 //        console.log('== Login POST Error');
	 //        console.log(error);
		// 			res.json(error).status('500');
	 //      }
	 //    }
		// );
	}
}
export function post(req, res) {
	var reqData = req.body;
	console.log('== Request data:');
	console.log(reqData);
	request.post(
    baseUrl + endpoint + '?key=' + N2S_AUTH_KEY,
    { json: reqData },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log('NEED 2 SPEED:');
        console.log(body);
				res.json(body);
      }
      else {
        console.log('== Login POST Error');
        console.log(error);
				res.json(error).status('500');
      }
    }
	);
}
