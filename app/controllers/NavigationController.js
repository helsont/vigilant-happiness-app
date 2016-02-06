(function() {
  angular
    .module('fast_eats.navigation', [])
    .controller('NavigationController', NavigationController);

  NavigationController.$inject = ['$scope'];

  function NavigationController($scope) {

    $scope.mapOptions = {
      center: { latitude: 30.614919, longitude: -96.342316},
      zoom: 6,
      mapType: 'a',
      options: {
      	disablePanning: true,
      	disableZooming:true
      }
    };
  }
})();
