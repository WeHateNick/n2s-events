/**
 * Main application routes
 */

'use strict';

import errors from './components/errors';
import path from 'path';

export default function(app) {
  // Insert routes below
  app.use('/api/facebook-login/', require('./api/facebook-login'));
  app.use('/api/reset-password', require('./api/reset-password'));
  app.use('/api/signup', require('./api/signup'));
  app.use('/api/register', require('./api/register'));
  app.use('/api/event', require('./api/event'));
  app.use('/api/login', require('./api/login'));
  app.use('/api/things', require('./api/thing'));
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get((req, res) => {
      res.sendFile(path.resolve(`${app.get('appPath')}/index.html`));
    });
}
