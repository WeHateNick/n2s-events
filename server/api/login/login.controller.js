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

// Gets a list of Logins
export function index(req, res) {
	request.post(
    'https://n2sreno.clubspeedtiming.com/api/index.php/customers/login?key=7VlopsPCbJeotMiXdCH4',
    { json: reqObj },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log('NEED 2 SPEED:');
        console.log(body);
				res.json(body);
      }
    }
	);
}
