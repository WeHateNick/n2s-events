'use strict';

describe('Component: FindComponent', function() {
  // load the controller's module
  beforeEach(module('n2sEventsApp.find'));

  var FindComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    FindComponent = $componentController('find', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
