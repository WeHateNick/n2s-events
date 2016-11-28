'use strict';

var app = require('../..');
import request from 'supertest';

describe('Find API:', function() {
  describe('GET /api/find', function() {
    var finds;

    beforeEach(function(done) {
      request(app)
        .get('/api/find')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          finds = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      finds.should.be.instanceOf(Array);
    });
  });
});
