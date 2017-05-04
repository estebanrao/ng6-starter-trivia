import angular from 'angular';

import Home from './home/home';
import Registro from './registro/registro';
import Reingreso from './reingreso/reingreso';
import Mecanica from './mecanica/mecanica';
import Trivia from './trivia/trivia';
import Resultado from './resultado/resultado';
import FinEtapa from './fin-etapa/fin-etapa';

let componentModule = angular.module('app.components', [
  Home.name,
  Registro.name,
  Reingreso.name,
  Mecanica.name,
  Trivia.name,
  Resultado.name,
  FinEtapa.name
]);

export default componentModule;
