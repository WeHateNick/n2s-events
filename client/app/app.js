'use strict';

// Polyfills
if (!String.prototype.includes) {
  String.prototype.includes = function(search, start) {
    if (typeof start !== 'number') {
      start = 0;
    }
    if (start + search.length > this.length) {
      return false;
    } else {
      return this.indexOf(search, start) !== -1;
    }
  };
}
if (typeof Object.create !== 'function') {
  Object.create = obj => {
    var Constructor = () => {};
    Constructor.prototype = obj;
    return new Constructor();
  };
}

import angular from 'angular';
import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';
import uiRouter from 'angular-ui-router';
import ngMessages from 'angular-messages';
import ngMaterial from 'angular-material';


import {
  routeConfig
} from './app.config';

import navbar from '../components/navbar/navbar.component';
import footer from '../components/footer/footer.component';
import main from './main/main.component';
import _event from './event/event.component';
import resetPassword from './reset-password/reset-password.component';
import constants from './app.constants';
import util from '../components/util/util.module';

import './app.scss';

angular.module('n2sEventsApp', [
	ngCookies, ngResource, ngSanitize, uiRouter, ngMessages, ngMaterial, 
	navbar, footer, main, _event, constants, util, resetPassword
])
  .config(routeConfig);

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['n2sEventsApp'], {
      strictDi: true
    });
  });
