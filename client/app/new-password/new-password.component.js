'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './new-password.routes';

export class NewPasswordComponent {
  /*@ngInject*/
  constructor($http, Util, $stateParams) {
    this.$http = $http;
    this.util = Util;
    this.$stateParams = $stateParams;
  }
  $onInit() {
    this.submit = (password) => {
      this.loading = true;
      this.$http.put('api/reset-password/', {password: password, token: this.$stateParams.token})
        .then( (response) => {
          this.loading = false;
          this.success = true;
        }, (error) => {
          this.loading = false;
          console.log('New password error', error);
          this.util.showErrorDialog('We were unable to set a new password to your account. Please make sure you have the full link included in the reset email.');
        });
    }    
  }
}

export default angular.module('n2sEventsApp.newPassword', [uiRouter])
  .config(routes)
  .component('newPassword', {
    template: require('./new-password.html'),
    controller: NewPasswordComponent,
    controllerAs: '$ctrl'
  })
  .name;
