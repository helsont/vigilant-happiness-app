(function() {
  angular
    .module('fast_eats')
    .service('ApiService', ApiService);

  function ApiService($http) {

    var service = {
      get: get
    };

    function get(start, end) {
      return new Promise(function(resolve, reject) {
        $http({
          url:'https://vigilant-happiness.herokuapp.com/',
          method: 'GET',
          params: {
            start: start,
            end: end
          }
        })
        .then(function(data) {
          resolve(data);
        }, function(err, status) {
          reject(err, status);
        });
      });
    };

    return service;
  }
})();
