'use strict';

describe('Component: ResetPasswordComponent', function() {
  // load the controller's module
  beforeEach(module('n2sEventsApp.reset-password'));

  var ResetPasswordComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    ResetPasswordComponent = $componentController('reset-password', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
