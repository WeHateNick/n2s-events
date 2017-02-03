'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './reset-password.routes';

export class ResetPasswordComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('n2sEventsApp.reset-password', [uiRouter])
  .config(routes)
  .component('resetPassword', {
    template: require('./reset-password.html'),
    controller: ResetPasswordComponent,
    controllerAs: 'resetPasswordCtrl'
  })
  .name;
