/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/things              ->  index
 */

'use strict';

// Gets a list of Things
export function index(req, res) {
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
