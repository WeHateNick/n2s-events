'use strict';

var app = require('../..');
import request from 'supertest';

describe('Register API:', function() {
  describe('GET /api/register', function() {
    var registers;

    beforeEach(function(done) {
      request(app)
        .get('/api/register')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          registers = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      registers.should.be.instanceOf(Array);
    });
  });
});
