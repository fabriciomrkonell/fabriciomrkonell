var app = angular.module("myapp", []).config([
  '$interpolateProvider', function($interpolateProvider) {
      return $interpolateProvider.startSymbol('{(').endSymbol(')}');
    }
]);

function MyController($scope, $log) {	
	$scope.cont = 0;
}