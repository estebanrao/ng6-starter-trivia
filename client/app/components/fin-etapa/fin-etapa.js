import angular from 'angular';
import uiRouter from 'angular-ui-router';
import finEtapaComponent from './fin-etapa.component';

let finEtapaModule = angular.module('finEtapa', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
    .state('fin-etapa', {
      url: '/fin-etapa',
      template: '<fin-etapa class="main-content-home main-content-fin-etapa"></fin-etapa>'
    });
})

.component('finEtapa', finEtapaComponent);

export default finEtapaModule;
