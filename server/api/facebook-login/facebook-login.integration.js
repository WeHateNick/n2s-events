'use strict';

var app = require('../..');
import request from 'supertest';

describe('FacebookLogin API:', function() {
  describe('GET /api/facebook-login/', function() {
    var facebookLogins;

    beforeEach(function(done) {
      request(app)
        .get('/api/facebook-login/')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          facebookLogins = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      facebookLogins.should.be.instanceOf(Array);
    });
  });
});
