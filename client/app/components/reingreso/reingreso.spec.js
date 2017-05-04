import ReingresoModule from './reingreso'
import ReingresoController from './reingreso.controller';
import ReingresoComponent from './reingreso.component';
import ReingresoTemplate from './reingreso.html';

describe('Reingreso', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ReingresoModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ReingresoController();
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
      expect(ReingresoTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ReingresoComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ReingresoTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ReingresoController);
      });
  });
});
