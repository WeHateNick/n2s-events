import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {

  awesomeThings = [];

  /*@ngInject*/
  constructor($http, $timeout, Util) {
    this.$http = $http;
    this.$timeout = $timeout;
    this.util = Util;
  }

  $onInit() {
    this.$http.get('/api/things')
      .then(response => {
        this.awesomeThings = response.data;
      });
    this.loginForm = Object.create(this.util.newState);
    this.signupForm = Object.create(this.util.newState);
    this.signupForm.active = false;
    this.signupForm.data.emailOptIn = true;
    this.genders = ['Male', 'Female', 'Other'];
    this.referalSources = ['Online', 'Television', 'Radio', 'Billboard', 'Coupon', 'Other'];

    this.login = () => {
      this.loginForm.loading = true;
      this.$timeout( () => {
        this.loginForm.loading = false;
        this.loginForm.success = true;
      }, 2000);
      // this.$http.post('/api/login', this.loginForm.data )
      // .then(response => {
      //   console.log('Login response:', response.data);
      //   this.loginForm.loading = false;
      //   this.loginForm.success = true;
      // }, error => {
      //   console.log('Login error', error);
      //   this.loginForm.loading = false;
      //   this.loginForm.data = {};
      //   this.util.showErrorDialog('The username and password combination did not match an existing account. ');
      // });
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
  }
}

export default angular.module('n2sEventsApp.main', [uiRouter])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController,
    controllerAs: '$ctrl'
  })
  .name;
