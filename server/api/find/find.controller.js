/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/find              ->  index
 */

'use strict';

// Get info for an event by id
export function index(req, res) {
  // res.send('Event is set to ' + req.params.eventId);
  console.log('Event is set to ' + req.params.eventId);
}
