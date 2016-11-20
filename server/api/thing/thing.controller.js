/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/things              ->  index
 */

'use strict';

// Gets a list of Things
var request = require('request');

export function index(req, res) {
	request('http://www.google.com', function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	    console.log('It works!!') // Show the HTML for the Google homepage.
	  }
	})
  res.json([
  	{
  		name: 'Pepperoni',
  		info: 'Greasy meat for you'
  	},
  	{
  		name: 'Pancheta',
  		info: 'Hot bun'
  	},
  	{
  		name: 'Rigattoni',
  		info: 'Meat Toni'
  	}
  ]);
}
