'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var findCtrlStub = {
  index: 'findCtrl.index'
};

var routerStub = {
  get: sinon.spy()
};

// require the index with our stubbed out modules
var findIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './find.controller': findCtrlStub
});

describe('Find API Router:', function() {
  it('should return an express router instance', function() {
    findIndex.should.equal(routerStub);
  });

  describe('GET /api/find', function() {
    it('should route to find.controller.index', function() {
      routerStub.get
        .withArgs('/', 'findCtrl.index')
        .should.have.been.calledOnce;
    });
  });
});
