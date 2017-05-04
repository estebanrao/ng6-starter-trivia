/*@ngInject*/

class TriviaController {

  constructor($scope, Api, $state) {
    this.$scope = $scope;
    this.Api    = Api;
    this.$state = $state;

    this.preguntas = [];
    this.cantidadDePreguntas = 0;
    this.preguntaNumero = 0;

    this.respuestasCorrectas = 0;
    this.respuestasIncorrectas = 0;
    this.respuestasBonus = 0;
    this.puntos = 10;

    this.timerSeconds = '00';
    this.timerMinutes = '00';

    this.loggedIn();
    this.inicioTimer();
  }

  loggedIn() {
    this.Api.loggedIn().then(
      (response) => {
        this.inicioTrivia();
      }
    );
  }

  inicioTrivia() {
    this.Api.inicioTrivia().then(
      (response) => {
        this.preguntas = response;
        this.cantidadDePreguntas = response.length;
      },
      (error) => {
        if (error.status === 401) {
          this.$state.go('home');
        } else if (error.status === 400) {
          this.$state.go('resultado');
        }
      }
    );
  }

  inicioTimer() {
    let sec = 0;

    function pad(val) {
      return val > 9 ? val : '0' + val;
    }

    setInterval(() => {
      this.timerSeconds = pad(++sec%60);
      this.timerMinutes = pad(parseInt(sec/60,10));
      this.$scope.$apply();
    }, 1000);
  }

  sendRespuesta(index) {
    let position = index + 1;
    let data = {
      pos: position
    }

    this.Api.respuesta(data).then(
      (response) => {
        this._updatePuntos(response);
        this._checkPreguntas(response);
      }
    );
  }

  _checkPreguntas() {
    this.preguntaNumero++;

    if (this.cantidadDePreguntas === this.preguntaNumero) {
      this.$state.go('resultado');
    }
  }

  _updatePuntos(response) {
    let respuesta = response.respuesta;

    if (respuesta.correcta === true) {
      notie.alert(1, 'Respuesta Correcta', 1);
      this.respuestasCorrectas++;
    } else {
      notie.alert(3, 'Respuesta Incorrecta', 1);
      this.respuestasIncorrectas++;
    }

    this.respuestasBonus = response.bonus;
  }

}

export default TriviaController;
