import angular from 'angular';
import uiRouter from 'angular-ui-router';
import resultadoComponent from './resultado.component';

let resultadoModule = angular.module('resultado', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
    .state('resultado', {
      url: '/resultado',
      template: '<resultado class="main-content-resultado"></resultado>'
    });
})

.component('resultado', resultadoComponent);

export default resultadoModule;
