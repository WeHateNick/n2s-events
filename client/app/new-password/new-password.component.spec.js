'use strict';

describe('Component: NewPasswordComponent', function() {
  // load the controller's module
  beforeEach(module('n2sEventsApp.newPassword'));

  var NewPasswordComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    NewPasswordComponent = $componentController('new-password', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
