/*@ngInject*/

class ReingresoController {

  constructor(Api, $state) {
    this.Api    = Api;
    this.$state = $state;
  }

  submitReingresoForm(isValid) {
    let formData = this.form;

    if (isValid) {
      this.Api.login(formData);
    }
  }
}

export default ReingresoController;
