/*@ngInject*/

let StartRun = function (Api, $rootScope) {

  Api.getEtapa().then(
    data => {
      _setEtapa(data);
    }
  );

  let _setEtapa = (data) => {
    let getEtapa = data.etapa;

    $rootScope.etapa = getEtapa;

    if (getEtapa === 1) {
      $rootScope.nombreEtapa = 'primera';
    } else if (getEtapa === 2) {
      $rootScope.nombreEtapa = 'segunda';
    } else if (getEtapa === 3) {
      $rootScope.nombreEtapa = 'tercera';
    }
  };

};

export default StartRun;
