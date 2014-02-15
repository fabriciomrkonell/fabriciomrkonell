var app = angular.module("myapp", []).config([
  '$interpolateProvider', function($interpolateProvider) {
      return $interpolateProvider.startSymbol('{(').endSymbol(')}');
    }
]);

function MyController($scope, $log) {	
	
	$scope.teste = function(){
		alert("");
	}	

	$scope.mensagem = "Acesse: fabricioronchi.com";
}