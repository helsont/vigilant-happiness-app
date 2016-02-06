(function() {
  angular
    .module('fast_eats')
    .controller('MainController', MainController);

  MainController.$inject = ['$scope', 'ApiService', '$rootScope'];

  function MainController($scope, ApiService, $rootScope) {

    $scope.images = []; //[{"name":"Absolute Bagels","imageUrl":"https://irs2.4sqi.net/img/general/300x300/48476_GedQ77ReJSEYApqy9-KjDYsdW7aV1n3KG4ns_6m3WiE.jpg","$$hashKey":"object:9"},{"name":"sweetgreen","imageUrl":"https://irs0.4sqi.net/img/general/300x300/62992682_nbZv3EHaSY1KvUWEXQuoRXVWgeCo56p0YLl-mSt7LqA.jpg","$$hashKey":"object:10"},{"name":"Gran Eléctrica","imageUrl":"https://irs2.4sqi.net/img/general/300x300/48331_J8ygsgV7imomR0DYpa46D-ExZGtTmntX2gQXGi0i0pk.jpg","$$hashKey":"object:11"}];
    $rootScope.$on('event', function(event, data) {
      var venues = data.venues;
      debugger;
      var promises = [];
      for(var idx = 0, len = venues.length; idx < len; idx++) {
        promises.push(ApiService.getFirstImage(venues[idx]));
      }

      Promise.all(promises).then(function(vals) {
        for(var idx = 0, len = vals.length; idx < len; idx++) {
          $scope.images.push({
            name: vals[idx].venue.name,
            imageUrl: vals[idx].imageUrl
          });
        }
        console.log($scope.images);
        $scope.$apply();
      });

    });
  }
})();
