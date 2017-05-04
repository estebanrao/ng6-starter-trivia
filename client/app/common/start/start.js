import angular from 'angular';
import StartRun from './start.run';

let startRunModule = angular.module('start', [])

.run(StartRun);

export default startRunModule;
