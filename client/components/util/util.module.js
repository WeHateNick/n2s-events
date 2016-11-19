'use strict';

import angular from 'angular';
import {
  UtilService
} from './util.service';

export default angular.module('n2sEventsApp.util', [])
  .factory('Util', UtilService)
  .name;
