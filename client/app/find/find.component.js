'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './find.routes';

export class FindComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('n2sEventsApp.find', [uiRouter])
  .config(routes)
  .component('find', {
    template: require('./find.html'),
    controller: FindComponent,
    controllerAs: 'findCtrl'
  })
  .name;
