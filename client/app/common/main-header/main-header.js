import angular from 'angular';
import mainHeaderComponent from './main-header.component';

let mainHeaderModule = angular.module('mainHeader', [])

.component('mainHeader', mainHeaderComponent);

export default mainHeaderModule;
