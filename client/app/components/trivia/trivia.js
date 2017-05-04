import angular from 'angular';
import uiRouter from 'angular-ui-router';
import triviaComponent from './trivia.component';

let triviaModule = angular.module('trivia', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
    .state('trivia', {
      url: '/trivia',
      template: '<trivia class="main-content-trivia"></trivia>'
    });
})

.component('trivia', triviaComponent);

export default triviaModule;
