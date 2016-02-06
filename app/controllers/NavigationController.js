(function() {
  angular
    .module('fast_eats')
    .controller('NavigationController', NavigationController);

  NavigationController.$inject = ['$scope'];

  function NavigationController($scope) {
    $scope.form = {
      startLocation: 'Yo boy',
      endLocation: ''
    };

    $scope.submitForm = function() {
      console.log('Submitted form');
      alert('Start: '+ $scope.form.startLocation+ ' End:' + $scope.form.endLocation);
    }
  }
})();
