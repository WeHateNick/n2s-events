'use strict';
const angular = require('angular');
const uiRouter = require('angular-ui-router');
import routes from './event.routes';

export class EventComponent {
  /*@ngInject*/
  constructor($http, $stateParams, Util, $timeout) {
    this.$http = $http;
    this.$stateParams = $stateParams;
    this.util = Util;
    this.$timeout = $timeout;
  }
  $onInit() {
    this._event = Object.create(this.util.newState);
    this.loginForm = Object.create(this.util.newState);
    this.loginForm.loading = true;
    this.signupForm = Object.create(this.util.newState);
    this.signupForm.active = false;
    this.signupForm.data.emailOptIn = true;
    this.genders = ['Male', 'Female', 'Other'];
    this.referalSources = ['Online', 'Television', 'Radio', 'Billboard', 'Coupon', 'Other'];

    this.login = () => {
      this.loginForm.loading = true;
      this.$http.post('/api/login', this.loginForm.data )
      .then(response => {
        console.log('Login response:', response.data);
        this.loginForm.loading = false;
        this.loginForm.success = true;
      }, error => {
        console.log('Login error', error);
        this.loginForm.loading = false;
        this.loginForm.data = {};
        this.util.showErrorDialog('The username and password combination did not match an existing account. ');
      });
    };
    this.openSignup = () => {
      this.signupForm.active = true;
    };
    this.signup = () => {
      this.signupForm.loading = true;
      this.$timeout( () => {
        this.signupForm.loading = false;
        this.signupForm.success = true;
      }, 2000);
    }
    this.resetState = () => {
      this.loginForm.loading = false;
      this.loginForm.error = false;
      this.loginForm.success = false;
      this.loginForm.data = {};

      this.signupForm.loading = false;
      this.signupForm.error = false;
      this.signupForm.success = false;
      this.signupForm.active = false;
      this.signupForm.data = {emailOptIn: true};
    };
    this.$http.get('api/event/' + this.$stateParams.eventId)
      .then( (response) => {
        console.log('Event response', response);
        this.loginForm.loading = false;
        this._event.data = response.data;
      }, (error) => {
        console.log('event event error', error);
        this.loginForm.loading = false;
        this._event.error = true;
      });
  };
}

export default angular.module('n2sEventsApp.event', [uiRouter])
  .config(routes)
  .component('event', {
    template: require('./event.html'),
    controller: EventComponent,
    controllerAs: '$ctrl'
  })
  .name;
