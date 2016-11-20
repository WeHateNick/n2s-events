/**
 * Main application routes
 */

'use strict';

import errors from './components/errors';
import path from 'path';

export default function(app) {
  // Insert routes below
  app.use('/api/things', require('./api/thing'));
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get((req, res) => {
      res.sendFile(path.resolve(`${app.get('appPath')}/index.html`));
    });

  var reqObj = {
    'username": "nicolasocampo89@hotmail.com',
    'password": "Simple123'
  };
  app.post('https://n2sreno.clubspeedtiming.com/api/index.php/customers/login?key=7VlopsPCbJeotMiXdCH4', function (req, res) {
    req.send(reqObj);
  });
}
