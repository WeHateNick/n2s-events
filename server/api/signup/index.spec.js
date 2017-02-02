'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var signupCtrlStub = {
  index: 'signupCtrl.index'
};

var routerStub = {
  get: sinon.spy()
};

// require the index with our stubbed out modules
var signupIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './signup.controller': signupCtrlStub
});

describe('Signup API Router:', function() {
  it('should return an express router instance', function() {
    signupIndex.should.equal(routerStub);
  });

  describe('GET /api/signup', function() {
    it('should route to signup.controller.index', function() {
      routerStub.get
        .withArgs('/', 'signupCtrl.index')
        .should.have.been.calledOnce;
    });
  });
});
