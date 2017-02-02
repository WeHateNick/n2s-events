'use strict';

var app = require('../..');
import request from 'supertest';

describe('Signup API:', function() {
  describe('GET /api/signup', function() {
    var signups;

    beforeEach(function(done) {
      request(app)
        .get('/api/signup')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          signups = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      signups.should.be.instanceOf(Array);
    });
  });
});
