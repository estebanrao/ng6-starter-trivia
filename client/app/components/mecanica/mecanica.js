import angular from 'angular';
import uiRouter from 'angular-ui-router';
import mecanicaComponent from './mecanica.component';

let mecanicaModule = angular.module('mecanica', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
    .state('mecanica', {
      url: '/mecanica',
      template: '<mecanica class="main-content-mecanica"></mecanica>'
    });
})

.component('mecanica', mecanicaComponent);

export default mecanicaModule;
