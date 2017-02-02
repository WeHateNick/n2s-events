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
    this._event.loading = true;
    this.loginForm = Object.create(this.util.newState);
    this.signupForm = Object.create(this.util.newState);
    this.signupForm.active = false;
    this.signupForm.data.emailOptIn = true;
    this.genders = ['Male', 'Female', 'Other'];
    this.referalSources = ['Online', 'Television', 'Radio', 'Billboard', 'Coupon', 'Other'];

    // Find the event
    this.$http.get('api/event/' + this.$stateParams.eventId)
      .then( (response) => {
        console.log('Event response', response);
        this._event.loading = false;
        this._event.data = response.data;
      }, (error) => {
        console.log('event event error', error);
        this._event.loading = false;
        this._event.error = true;
      });
    this.login = () => {
      this._event.loading = true;
      this.$http.post('/api/login', this.loginForm.data )
      .then((response) => {
        console.log('Login response:', response);
        this.register(response.data.customerId);
      }, (error) => {
        console.log('Login error', error);
        this._event.loading = false;
        this.loginForm.data = {};
        this.util.showErrorDialog('The username and password combination did not match an existing account. ');
      });
    };
    this.openSignup = () => {
      this.signupForm.active = true;
    };
    this.signup = () => {
      this._event.loading = true;
      this.$timeout( () => {
        this._event.loading = false;
        this._event.success = true;
      }, 2000);
    }
    this.register = (customerId) => {
      let requestData = {
        heatId: this.$stateParams.eventId,
        customerId: customerId,
        timeAdded: '2017-02-01T00:18:42.43', // Update with moment!!
      };
      this.$http.post('/api/register', requestData )
      .then((response) => {
        console.log('Registration response:', response);
        this._event.loading = false;
        this._event.success = true;
      }, (error) => {
        console.log('Login error', error);
        this.util.showErrorDialog('An error occured while trying to register your account to the event.');
      });
    };
    this.resetState = () => {
      this._event.loading = false;
      this._event.success = false;
      this.loginForm.error = false;
      this.loginForm.data = {};
      this.signupForm.active = false;
      this.signupForm.data = {emailOptIn: true};
    };
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
