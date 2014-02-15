var app = angular.module("myapp", []).config([
  '$interpolateProvider', function($interpolateProvider) {
      return $interpolateProvider.startSymbol('{(').endSymbol(')}');
    }
]);

function MyController($scope, $log) {	
	
	$scope.mensagem = "Acesse: fabricioronchi.com";

	$scope.log = function(id){
		if (id == 1){
			$log.log($scope.mensagem)
		}else if (id == 2){
			$log.warn($scope.mensagem)
		}else if (id == 3){
			$log.info($scope.mensagem)
		}else if (id ==4){
			$log.error($scope.mensagem)
		}
	}		
}