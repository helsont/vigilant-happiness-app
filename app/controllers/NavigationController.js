(function() {
  angular
    .module('fast_eats')
    .controller('NavigationController', NavigationController);

  NavigationController.$inject = ['$scope', 'ApiService', '$rootScope'];

  function NavigationController($scope, ApiService, $rootScope) {

    var directionsManager, end, venues, startWaypoint, endWaypoint, venueWaypoint, pinInfobox;
    $scope.form = {
      startLocation: 'Columbia University',
      endLocation: 'Coney Island'
    };
    var needsUpdate = false;

    function emitChange(venues) {
      $rootScope.$broadcast('event', {
        venues: venues
      });
    }

    setTimeout(function() {
      // Must load after angular loads.
      map = new Microsoft.Maps.Map(document.getElementById('bing_map'), {
        credentials: 'AkaxzD5YOJCbIvziHVOLfm6AkeM5Z5UQ3dHS53mQzwK-6LGWnxYjAwNqfe3D4UBT',
        enableHighDpi: true,
        center: new Microsoft.Maps.Location(40.7127, -74.0059),
        zoom: 8,
        showScalebar: true
      });

      Microsoft.Maps.loadModule('Microsoft.Maps.Directions', { callback: function() {
          directionsManager = new Microsoft.Maps.Directions.DirectionsManager(map);
        }
      });
    });

    function hideInfobox() {
      if (pinInfobox) {
        pinInfobox.setOptions({ visible: false });
      }
    }

    function displayInfoBox(pin, idx) {
      pinInfobox.setLocation(pin.getLocation());
      pinInfobox.setOptions({
        title: venues[idx].name,
        description: 'yo',
        visible: true
      });
    }

    function addVenues() {
      var pins = [];
      // Add the waypoints for the forsquare locations
      for(var idx = 0, len = venues.length; idx < len; idx++) {
        var point = new Microsoft.Maps.Location(venues[idx].location.lat,
          venues[idx].location.lng);

        // Add a pin to the center of the map
        var pin = new Microsoft.Maps.Pushpin(point, {draggable: false});
        pin.idx = idx;

        map.entities.push(pin);

        // Add a handler to the pushpin drag
        Microsoft.Maps.Events.addHandler(pin, 'mouseup', onPinSelect);

        directionsManager.addWaypoint(point);
        pins.push(pin);
      }

      pinInfobox = new Microsoft.Maps.Infobox(pins[0].getLocation(),
          { title: 'My Pushpin',
           description: 'This pushpin is located at (0,0).',
           visible: false,
           offset: new Microsoft.Maps.Point(0,15)});
      map.entities.push(pinInfobox);
    }

    function directionsModuleLoaded() {
      if (!directionsManager) {
        // Initialize the DirectionsManager
        directionsManager = new Microsoft.Maps.Directions.DirectionsManager(map);
      }

      // Create start and end waypoints
      startWaypoint = new Microsoft.Maps.Directions.Waypoint({address:$scope.form.startLocation});
      endWaypoint = new Microsoft.Maps.Directions.Waypoint({address:$scope.form.endLocation});

      directionsManager.addWaypoint(startWaypoint);

      // Hide the infobox when the map is moved.
      // Microsoft.Maps.Events.addHandler(map, 'viewchange', hideInfobox);

      directionsManager.addWaypoint(endWaypoint);

      // Set the id of the div to use to display the directions
      directionsManager.setRenderOptions({ itineraryContainer: document.getElementById('itineraryDiv') });

      // Specify a handler for when an error occurs
      Microsoft.Maps.Events.addHandler(directionsManager, 'directionsError', displayError);

      // Calculate directions, which displays a route on the map
      directionsManager.calculateDirections();

      // Specify a handler for when the directions are calculated
      Microsoft.Maps.Events.addHandler(directionsManager, 'directionsUpdated', onDirectionsUpdate);
    }

    function onDirectionsUpdate() {
      if (!needsUpdate) {
        return;
      }
      needsUpdate = false;
      var start = startWaypoint.getLocation();
      var end = endWaypoint.getLocation();

      ApiService.get(start.latitude+','+start.longitude, end.latitude+','+end.longitude).then(function(values) {
        venues = values.data;
        emitChange(venues);
        addVenues();
      });
    }

    function onPinSelect(e) {
      if (e.targetType != 'pushpin') {
        return;
      }

      var idx = e.target.idx
        , pin = e.target
        , venue = venues[e.target.idx];
      // if we're deselecting the current one
      if (venueWaypoint && idx == venueWaypoint.idx) {
        directionsManager.removeWaypoint(venueWaypoint);
        directionsManager.calculateDirections();
        hideInfobox();
        return;
      }

      if (venueWaypoint && idx != venueWaypoint.idx) {
        directionsManager.removeWaypoint(venueWaypoint);
      }

      displayInfoBox(pin, idx);
      var venue = venues[idx];
      var location = new Microsoft.Maps.Location(venue.location.lat,
        venue.location.lng);
      var newWayPoint = new Microsoft.Maps.Directions.Waypoint({location: location});
      venueWaypoint = newWayPoint;

      directionsManager.removeWaypoint(endWaypoint);
      directionsManager.addWaypoint(newWayPoint);
      directionsManager.addWaypoint(endWaypoint);
      directionsManager.calculateDirections();
      return false;
    }

    function displayError(e) {
      alert(e.message);
    }

    $scope.submitForm = function() {
      if (directionsManager) {
        // find way to clear entities
        // map.entities.
        directionsManager.resetDirections();
        // debugger;
        map.entities.clear();
        // for (var idx = map.entities.getLength(); idx >= 0; idx--) {
        //   var curr = map.entities.get(idx);
        //   map.entities.removeAt(idx);
        // }

      }
      needsUpdate = true;
      directionsModuleLoaded();
    }
  }
})();
