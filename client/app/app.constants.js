'use strict';

import angular from 'angular';

export default angular.module('n2sEventsApp.constants', [])
  .constant('appConfig', require('../../server/config/environment/shared'))
  .name;
