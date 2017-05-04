/*@ngInject*/

class HomeController {

  constructor($rootScope, $state) {
    this.$rootScope = $rootScope;
    this.$state     = $state;
  }

  getEtapa() {
    let etapa = this.$rootScope.etapa;

    if (etapa) {
      if (etapa === 1) {
        this.$state.go('registro');
      } else {
        this.$state.go('reingreso');
      }
    }
  }

}

export default HomeController;
