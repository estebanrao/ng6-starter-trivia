import template from './reingreso.html';
import controller from './reingreso.controller';
import './reingreso.scss';

let reingresoComponent = {
  bindings: {
    form: '<'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default reingresoComponent;
