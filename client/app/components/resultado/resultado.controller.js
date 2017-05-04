/*@ngInject*/

class ResultadoController {

  constructor(Api, $state) {
    this.Api = Api;
    this.$state = $state;

    this.getResultados();
  }

  getResultados() {
    this.Api.posicion().then(
      (response) => {
        this.puntaje = response.puntos;
        this.ranking = response.posicion;
        this._logout();
      },
      (error) => {
        this.$state.go('home');
      }
    );
  }

  _logout() {
    this.Api.logout();
  }

}

export default ResultadoController;
