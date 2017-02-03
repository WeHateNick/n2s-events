'use strict';

var app = require('../..');
import request from 'supertest';

describe('ResetPassword API:', function() {
  describe('GET /api/reset-password', function() {
    var resetPasswords;

    beforeEach(function(done) {
      request(app)
        .get('/api/reset-password')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          resetPasswords = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      resetPasswords.should.be.instanceOf(Array);
    });
  });
});
