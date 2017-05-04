/*@ngInject*/

class RegistroController {

  constructor(Api, $state) {
    this.Api    = Api;
    this.$state = $state;
  }

  submitForm(isValid) {
    let formData = this.form;

    if (isValid) {
      this.Api.signup(formData).then(
        (response) => {
          this._successCallback(response);
        }
      );
    }
  }

  _successCallback(response) {
    this.$state.go('mecanica');
  }

}

export default RegistroController;
