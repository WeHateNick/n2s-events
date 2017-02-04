'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('new-password', {
      url: '/new-password?token',
      template: '<new-password></new-password>'
    });
}
