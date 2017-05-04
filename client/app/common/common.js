import angular from 'angular';
import Api from './api/api';
import MainHeader from './main-header/main-header';
import MainFooter from './main-footer/main-footer';
import Start from './start/start';

let commonModule = angular.module('app.common', [
  Api.name,
  MainHeader.name,
  MainFooter.name,
  Start.name
]);

export default commonModule;
