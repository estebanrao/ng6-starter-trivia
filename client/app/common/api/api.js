import angular from 'angular';
import ApiFactory from './api.factory';

let apiModule = angular.module('api', [])

.factory('Api', ApiFactory);

export default apiModule;
