(function() {
  angular
    .module('fasteats.main', MainController)
    .controller('MainController', MainController);
  console.log('yo');
  MainController.$inject = ['$scope'];

  function MainController($scope) {
    console.log('man');
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
})
