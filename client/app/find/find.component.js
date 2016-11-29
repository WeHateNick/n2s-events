'use strict';
const angular = require('angular');
const uiRouter = require('angular-ui-router');
import routes from './find.routes';

export class FindComponent {
  /*@ngInject*/
  constructor($http, $stateParams) {
    this.$http = $http;
    this.$stateParams = $stateParams;
    this.loading = false;
    this.error = false;
    this.data = {};
  }
  $onInit() {
    this.loading = true;
    this.$http.get('api/find/' + this.$stateParams.eventId)
      .then( (response) => {
        console.log('Find response', response);
        this.loading = false;
        this.data = response.data;
      }, (error) => {
        console.log('Find event error', error);
        this.loading = false;
        this.error = true;
      });
  };
}

export default angular.module('n2sEventsApp.find', [uiRouter])
  .config(routes)
  .component('find', {
    template: require('./find.html'),
    controller: FindComponent,
    controllerAs: '$ctrl'
  })
  .name;
