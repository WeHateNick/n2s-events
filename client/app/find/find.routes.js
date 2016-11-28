'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('find', {
      url: '/find',
      template: '<find></find>'
    });
}
