'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var loginCtrlStub = {
  index: 'loginCtrl.index'
};

var routerStub = {
  get: sinon.spy()
};

// require the index with our stubbed out modules
var loginIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './login.controller': loginCtrlStub
});

describe('Login API Router:', function() {
  it('should return an express router instance', function() {
    loginIndex.should.equal(routerStub);
  });

  describe('GET /api/login', function() {
    it('should route to login.controller.index', function() {
      routerStub.get
        .withArgs('/', 'loginCtrl.index')
        .should.have.been.calledOnce;
    });
  });
});
