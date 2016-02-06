(function() {
  angular
    .module('fast_eats.main', [])
    .controller('MainController', MainController);

  console.log('yo');
  MainController.$inject = ['$scope'];

function MainController($scope, $http) {
                /*<bing-map> directive options*/
                $scope.mapOptions = {};
                $scope.mapOptions.center = {latitude: 30.614919,longitude: -96.342316};
                $scope.mapOptions.zoom = 6;
                $scope.mapOptions.mapType = 'a';
                /*<pushpin> directive options*/
                $scope.pushpin = {};
                $scope.pushpin.location = {latitude: 30.614919,longitude: -96.342316};
                $scope.pushpin.options = {
                    draggable: true
                }
                $scope.pushpin.data= {
                    text: 'Hello World!'
                };
                $scope.pushpin.events = {
                    click: function(eventData) {
                        var data = eventData.target.pushpinData;
                        alert('The click event is working fine! Here is the data: ' + data.text)
                    }
                };
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