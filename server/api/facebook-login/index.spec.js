'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var facebookLoginCtrlStub = {
  index: 'facebookLoginCtrl.index'
};

var routerStub = {
  get: sinon.spy()
};

// require the index with our stubbed out modules
var facebookLoginIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './facebook-login.controller': facebookLoginCtrlStub
});

describe('FacebookLogin API Router:', function() {
  it('should return an express router instance', function() {
    facebookLoginIndex.should.equal(routerStub);
  });

  describe('GET /api/facebook-login/', function() {
    it('should route to facebookLogin.controller.index', function() {
      routerStub.get
        .withArgs('/', 'facebookLoginCtrl.index')
        .should.have.been.calledOnce;
    });
  });
});
