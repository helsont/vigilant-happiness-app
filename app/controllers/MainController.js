(function() {
  angular
    .module('fast_eats')
    .controller('MainController', MainController);

  MainController.$inject = ['$scope', 'ApiService', '$rootScope'];

  function MainController($scope, ApiService, $rootScope) {

    $scope.images = [];
    $rootScope.$on('event', function(event, data) {
      var venues = data.venues;
      debugger;
      var promises = [];
      for(var idx = 0, len = venues.length; idx < len; idx++) {
        promises.push(ApiService.getFirstImage(venues[idx]));
      }

      Promise.all(promises).then(function(vals) {
        debugger;
        $scope.images = vals;
      });

    });
  }
})();
