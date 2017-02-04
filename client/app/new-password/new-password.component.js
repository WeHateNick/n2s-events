'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './new-password.routes';

export class NewPasswordComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('n2sEventsApp.newPassword', [uiRouter])
  .config(routes)
  .component('newPassword', {
    template: require('./new-password.html'),
    controller: NewPasswordComponent,
    controllerAs: 'newPasswordCtrl'
  })
  .name;
