(function() {
  angular
    .module('fast_eats')
    .service('ApiService', ApiService);

  function ApiService($http) {

    var service = {
      get: get
    };

    function get() {
      return new Promise((resolve, reject) => {
        $http.get('apiPath').success((data) => {
          resolve(data);
        }).error((err, status) => {
          reject(err, status);
        });
      });
    };

    return service;
  }
});
