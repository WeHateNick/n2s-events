'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var registerCtrlStub = {
  index: 'registerCtrl.index'
};

var routerStub = {
  get: sinon.spy()
};

// require the index with our stubbed out modules
var registerIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './register.controller': registerCtrlStub
});

describe('Register API Router:', function() {
  it('should return an express router instance', function() {
    registerIndex.should.equal(routerStub);
  });

  describe('GET /api/register', function() {
    it('should route to register.controller.index', function() {
      routerStub.get
        .withArgs('/', 'registerCtrl.index')
        .should.have.been.calledOnce;
    });
  });
});
