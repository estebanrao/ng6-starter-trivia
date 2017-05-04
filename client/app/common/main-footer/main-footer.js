import angular from 'angular';
import mainFooterComponent from './main-footer.component';

let mainFooterModule = angular.module('mainFooter', [])

.component('mainFooter', mainFooterComponent);

export default mainFooterModule;
