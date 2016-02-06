(function() {
  angular
    .module('fast_eats')
    .controller('NavigationController', NavigationController);

  NavigationController.$inject = ['$scope'];

  function NavigationController($scope) {
    $scope.form = {
      startLocation: '',
      endLocation: ''
    };
    var directionsManager, end;

    setTimeout(function() {
      // Must load after angular loads.
      map = new Microsoft.Maps.Map(document.getElementById("bing_map"),{
        credentials:"AkaxzD5YOJCbIvziHVOLfm6AkeM5Z5UQ3dHS53mQzwK-6LGWnxYjAwNqfe3D4UBT"
      });

      Microsoft.Maps.loadModule('Microsoft.Maps.Directions', { callback: function() {
          directionsManager = new Microsoft.Maps.Directions.DirectionsManager(map);
        }
      });
    });

    function directionsModuleLoaded() {
      if (!directionsManager) {
        // Initialize the DirectionsManager
        directionsManager = new Microsoft.Maps.Directions.DirectionsManager(map);
      }

      // Create start and end waypoints
      var startWaypoint = new Microsoft.Maps.Directions.Waypoint({address:$scope.form.startLocation});
      var endWaypoint = new Microsoft.Maps.Directions.Waypoint({address:$scope.form.endLocation});

      directionsManager.addWaypoint(startWaypoint);
      var tacomaWaypoint = new Microsoft.Maps.Directions.Waypoint({
          address: 'Tacoma, WA',
          location: new Microsoft.Maps.Location(47.255134, -122.441650)
      });
      directionsManager.addWaypoint(tacomaWaypoint);
      directionsManager.addWaypoint(endWaypoint);

      // Set the id of the div to use to display the directions
      directionsManager.setRenderOptions({ itineraryContainer: document.getElementById('itineraryDiv') });

      // Specify a handler for when an error occurs
      Microsoft.Maps.Events.addHandler(directionsManager, 'directionsError', displayError);

      // Calculate directions, which displays a route on the map
      directionsManager.calculateDirections();
    }

    function displayError(e) {
      alert(e.message);
    }

    $scope.submitForm = function() {
      console.log('Submitted form');
      alert('Start: ' + $scope.form.startLocation + ' End:' + $scope.form.endLocation);
      directionsModuleLoaded();
    }
  }
})();
