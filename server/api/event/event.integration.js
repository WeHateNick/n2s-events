'use strict';

var app = require('../..');
import request from 'supertest';

describe('Event API:', function() {
  describe('GET /api/event', function() {
    var events;

    beforeEach(function(done) {
      request(app)
        .get('/api/event')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          events = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      events.should.be.instanceOf(Array);
    });
  });
});
