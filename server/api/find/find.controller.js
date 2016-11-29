/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/find              ->  index
 */

'use strict';

import request from 'request';
import base from '../../config/base.js';
var endpoint = 'eventReservations/';

// Get info for an event by id
export function index(req, res) {
  var eventId = req.params.eventId;
  console.log('Event is set to ' + eventId);
	request.get(
    base.url + endpoint + eventId + '/?key=' + base.authKey,
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log('Event:');
        console.log(body);
				res.send(body);
      }
      else {
        console.log('== Get event error');
        console.log(error);
				res.json(error).status('500');
      }
    }
	);
}
