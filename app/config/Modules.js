
angular.module('fast_eats', [
	'angularBingMaps']
     .controller('MainController', ['$scope', function($scope) {
       $scope.loc = {start: '', finish: ''};
     }]);