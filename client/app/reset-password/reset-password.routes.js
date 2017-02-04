'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('resetPassword', {
      url: '/reset-password',
      template: '<reset-password></reset-password>'
    });
}
