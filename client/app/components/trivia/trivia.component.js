import template from './trivia.html';
import controller from './trivia.controller';
import './trivia.scss';

let triviaComponent = {
  bindings: {
    posicion: '<'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default triviaComponent;
