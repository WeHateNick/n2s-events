'use strict';

var app = require('../..');
import request from 'supertest';

describe('Login API:', function() {
  describe('GET /api/login', function() {
    var logins;

    beforeEach(function(done) {
      request(app)
        .get('/api/login')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          logins = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      logins.should.be.instanceOf(Array);
    });
  });
});
