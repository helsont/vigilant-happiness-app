(function() {
  angular
    .module('fast_eats.main', [])
    .controller('MainController', MainController);

  console.log('yo');
  MainController.$inject = ['$scope'];

function MainController($scope, $http) {
                /*<venue-map> directive options*/
                $scope.mapOptions = {};
                $scope.mapOptions.center = {latitude: 30.614919,longitude: -96.342316};
                $scope.mapOptions.zoom = 6;
                $scope.mapOptions.mapType = 'a';
                $scope.mapOptions.venue = 'bingmapsteam-mccormickplace';
                $scope.mapOptions.credentials = 'AkaxzD5YOJCbIvziHVOLfm6AkeM5Z5UQ3dHS53mQzwK-6LGWnxYjAwNqfe3D4UBT';
                // Typically you should inject $routeParams into the controller and read the room name from a route parameter;
                // Just leave unset if you don't want a room selected
                $scope.mapOptions.room = 'Exhibition Hall A1' 
            }
})();


  // function MainController($scope) {
  //   console.log('man');
  //   $scope.mapOptions = {
  //     center: { latitude: 30.614919, longitude: -96.342316},
  //     zoom: 6,
  //     mapType: 'a',
  //     options: {
  //      disablePanning: true,
  //      disableZooming:true
  //     }
  //   };
  // }