'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './reset-password.routes';

export class ResetPasswordComponent {
  /*@ngInject*/
  constructor($http, Util) {
    this.$http = $http;
    this.util = Util;
  }
  $onInit() {
    this.submit = (email) => {
      this.loading = true;
      this.$http.post('api/reset-password/', {email: email})
        .then( (response) => {
          console.log('Event response', response);
          this.loading = false;
          this.success = true;
        }, (error) => {
          console.log('event event error', error);
          this.util.showErrorDialog('We did not find that email address in our system. ');
        });
    }    
  }
}

export default angular.module('n2sEventsApp.reset-password', [uiRouter])
  .config(routes)
  .component('resetPassword', {
    template: require('./reset-password.html'),
    controller: ResetPasswordComponent,
    controllerAs: '$ctrl'
  })
  .name;
