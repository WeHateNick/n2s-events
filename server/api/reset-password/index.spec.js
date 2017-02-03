'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var resetPasswordCtrlStub = {
  index: 'resetPasswordCtrl.index'
};

var routerStub = {
  get: sinon.spy()
};

// require the index with our stubbed out modules
var resetPasswordIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './reset-password.controller': resetPasswordCtrlStub
});

describe('ResetPassword API Router:', function() {
  it('should return an express router instance', function() {
    resetPasswordIndex.should.equal(routerStub);
  });

  describe('GET /api/reset-password', function() {
    it('should route to resetPassword.controller.index', function() {
      routerStub.get
        .withArgs('/', 'resetPasswordCtrl.index')
        .should.have.been.calledOnce;
    });
  });
});
