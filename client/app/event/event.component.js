'use strict';
const angular = require('angular');
const uiRouter = require('angular-ui-router');
import routes from './event.routes';

export class EventComponent {
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
    this.$http.get('api/event/' + this.$stateParams.eventId)
      .then( (response) => {
        console.log('Event response', response);
        this.loading = false;
        this.data = response.data;
      }, (error) => {
        console.log('event event error', error);
        this.loading = false;
        this.error = true;
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
