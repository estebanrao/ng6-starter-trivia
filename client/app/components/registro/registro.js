import angular from 'angular';
import uiRouter from 'angular-ui-router';
import registroComponent from './registro.component';

let registroModule = angular.module('registro', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
    .state('registro', {
      url: '/registro',
      template: '<registro class="main-content-registro"></registro>'
    });
})

.component('registro', registroComponent);

export default registroModule;
