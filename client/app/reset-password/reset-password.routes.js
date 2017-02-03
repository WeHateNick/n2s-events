'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('reset-password', {
      url: '/reset-password',
      template: '<reset-password></reset-password>'
    });
}
