/*@ngInject*/

let ApiFactory = function ($http, $rootScope, $state, $q) {

  const API_URL           = process.env.API_URL;
  const ANTI_CACHE        = '?' + Date.now();
  const URL_GET_ETAPA     = API_URL + 'api/v1/trivia/getEtapa';
  const URL_SIGNUP        = API_URL + 'api/v1/participante/signup';
  const URL_LOGIN         = API_URL + 'api/v1/participante/login';
  const URL_LOGGED_IN     = API_URL + 'api/v1/participante/loggedIn';
  const URL_INICIO_TRIVIA = API_URL + 'api/v1/trivia/inicio/';
  const URL_RESPUESTA     = API_URL + 'api/v1/trivia/respuesta';
  const URL_POSICION      = API_URL + 'api/v1/participante/posicion';
  const URL_LOGOUT        = API_URL + 'api/v1/participante/logout';

  let getEtapa = () => {
    return $http.get(URL_GET_ETAPA + ANTI_CACHE).then(_transformResponse, _transformErrorResponse);
  };

  let signup = (data) => {
    return $http.post(URL_SIGNUP, data).then(_transformResponse, _transformSignupErrorResponse);
  };

  let login = (data) => {
    return $http.post(URL_LOGIN, data).then(_transformLoginResponse, _transformLoginErrorResponse);
  };

  let loggedIn = (data) => {
    return $http.get(URL_LOGGED_IN + ANTI_CACHE).then(null, _transformLoggedInErrorResponse);
  };

  let inicioTrivia = (data) => {
    return $http.get(URL_INICIO_TRIVIA + $rootScope.etapa + ANTI_CACHE).then(_transformResponse, _transformErrorResponse);
  };

  let respuesta = (data) => {
    return $http.post(URL_RESPUESTA, data).then(_transformResponse, _transformErrorResponse);
  };

  let posicion = (data) => {
    return $http.get(URL_POSICION + ANTI_CACHE).then(_transformResponse, _transformErrorResponse);
  };

  let logout = (data) => {
    return $http.post(URL_LOGOUT);
  };

  let _transformResponse = (response) => {
    return response.data;
  }

  let _transformLoginResponse = (response) => {
    notie.alert(1, 'Bienvenido, ' + response.data.nombre, 3);
    return $state.go('mecanica');
  }

  let _transformErrorResponse = (error) => {
    if (error.status === 503) {
      return $state.go('fin-etapa');
    } else if (error.status === 400) {
      notie.alert(3, 'Usted ya participó de la etapa', 3);
    } else if (error.status === 401) {
      notie.alert(3, 'No autorizado, por favor Regístrese', 3);
    } else {
      notie.alert(3, 'Se produjo un error en la trivia<br><a href="mailto:carolina.noya@ketchum.com.ar">Contactese con nosotros</a>');
    }
    return $q.reject(error);
  }

  let _transformSignupErrorResponse = (error) => {
    if (error.status === 503) {
      return $state.go('fin-etapa');
    } else if (error.status === 401) {
      let dni = {
        dni: error.config.data.dni
      };
      login(dni);
    }
    return $q.reject(error);
  }

  let _transformLoginErrorResponse = (error) => {
    if (error.status === 401) {
      notie.alert(3, 'No autorizado, por favor Regístrese', 3);
      return $state.go('registro');
    } else {
      notie.alert(3, 'Se produjo un error en la trivia<br><a href="mailto:carolina.noya@ketchum.com.ar">Contactese con nosotros</a>');
    }
  }

  let _transformLoggedInErrorResponse = (error) => {
    return $state.go('home');
  }

  return {
    getEtapa,
    signup,
    login,
    loggedIn,
    inicioTrivia,
    respuesta,
    posicion,
    logout
  };

};

export default ApiFactory;
