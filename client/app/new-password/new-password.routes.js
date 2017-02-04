'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('new-password', {
      url: '/new-password',
      template: '<new-password></new-password>'
    });
}
