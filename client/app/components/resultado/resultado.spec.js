import ResultadoModule from './resultado'
import ResultadoController from './resultado.controller';
import ResultadoComponent from './resultado.component';
import ResultadoTemplate from './resultado.html';

describe('Resultado', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ResultadoModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ResultadoController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(ResultadoTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ResultadoComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ResultadoTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ResultadoController);
      });
  });
});
