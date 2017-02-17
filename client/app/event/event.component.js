'use strict';
const angular = require('angular');
const uiRouter = require('angular-ui-router');
import routes from './event.routes';

export class EventComponent {
  /*@ngInject*/
  constructor($http, $stateParams, $state, Util, $timeout) {
    this.$http = $http;
    this.$stateParams = $stateParams;
    this.$state = $state;
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
    this.genders = [{label: 'Male', code: 1}, {label: 'Female', code: 2}, {label: 'Other', code: 0}];
    this.referalSources = [{label: 'Online', code: 18}, {label: 'Television', code: 43}, {label: 'Radio', code: 45}, {label: 'Billboard', code: 34}, {label: 'Coupon', code: 47}, {label: 'Other', code: 15}];
    // Find the event
    this.$http.get('api/event/' + this.$stateParams.eventId)
      .then( (response) => {
        this._event.loading = false;
        if (response.data.length === 1) {
          this._event.data = response.data[0];          
        } else {
          this.$state.go('main');
        }
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
    this.facebookLogin = () => {
      FB.login( response => {
        // handle the response
        if (response.authResponse) {
          let authResponse = response.authResponse;
          FB.api('/me', { locale: 'en_US', fields: 'first_name, last_name, email' },
            response => {
              console.log('Good to see you', response);
              let requestData = {
                email: response.email,
                firstname: response.first_name,
                lastname: response.last_name,
                facebookId: authResponse.userID,
                facebookToken:authResponse.accessToken,
                facebookExpiresIn: authResponse.expiresIn,
                facebookAllowEmail: true,
                facebookAllowPost: false,
                facebookEnabled: true
              };
              this.$http.post('/api/facebook-login', requestData)
                .then((response) => {
                  console.log('Facebook login response:', response);
                  this._event.loading = false;
                  this.register(response.data.customerId);
                }, (error) => {
                  console.log('Facebook login error', error);
                  this._event.loading = false;
                  this.loginForm.data = {};
                  this.util.showErrorDialog('We were unable to log you in via Facebook.');
                });
            }
          );
        } else {
          console.log('User cancelled login or did not fully authorize.');
          this.resetState();
        }
        console.log('Facebook initial response', response);
      }, {scope: 'email', return_scopes: true});
    };
    this.openSignup = () => {
      this.signupForm.active = true;
    };
    this.signup = () => {
      this.signupForm.data.donotemail = !this.signupForm.data.emailOptIn;
      this.signupForm.data.membershipStatus = 1;
      this.signupForm.data.status1 = 0;
      this._event.loading = true;
      this.$http.post('/api/signup', this.signupForm.data)
      .then(response => {
        console.log('Signup response:', response);
        this.register(response.data);
      }, error => {
        console.log('Signup error', error);
        this._event.loading = false;
        this.loginForm.data = {};
        this.util.showErrorDialog('An error occurred while trying to create an account. ');
      });
    };
    this.register = (customerId) => {
      let requestData = {
        eventId: this._event.data.eventId,
        customerId: customerId,
        added: new Date().toISOString()
      };
      this.$http.post('/api/register', requestData )
      .then((response) => {
        console.log('Registration response:', response);
        this._event.loading = false;
        this._event.success = true;
      }, (error) => {
        console.log('Registration error', error);
        this._event.loading = false;
        if ( error.data.search('Cannot insert duplicate key in object') ) {
          this.util.showErrorDialog('This username is already registered to this event.', false);
          this._event.success = true;
        } else {
          this.util.showErrorDialog('An error occured while trying to register your account to the event.');          
          this.resetState();
        }
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
