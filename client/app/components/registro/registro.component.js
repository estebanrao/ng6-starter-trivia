import template from './registro.html';
import controller from './registro.controller';
import './registro.scss';

let registroComponent = {
  bindings: {
    form: '<'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default registroComponent;
