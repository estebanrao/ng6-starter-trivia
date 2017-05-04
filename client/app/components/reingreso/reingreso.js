import angular from 'angular';
import uiRouter from 'angular-ui-router';
import reingresoComponent from './reingreso.component';

let reingresoModule = angular.module('reingreso', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
    .state('reingreso', {
      url: '/reingreso',
      template: '<reingreso class="main-content-home main-content-reingreso"></reingreso>'
    });
})

.component('reingreso', reingresoComponent);

export default reingresoModule;
