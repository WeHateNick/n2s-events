import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {

  awesomeThings = [];

  /*@ngInject*/
  constructor($http) {
    this.$http = $http;
  }

  $onInit() {
    this.$http.get('/api/things')
      .then(response => {
        this.awesomeThings = response.data;
      });
    this.loginForm = {
      data: {},
      loading: false,
      error: false
    };
    var mockData = {content: 'Hello there'};
    this.login = () => {
      this.loginForm.loading = true;
      this.$http.post('/api/login', mockData )
      .then(response => {
        this.loginForm.loading = false;
        console.log('Login response:', response.data);
      }, error => {
        console.log('Login error', error);
      });
    };
  }
}

export default angular.module('n2sEventsApp.main', [uiRouter])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController
  })
  .name;
