var app = angular.module("myapp", ["firebase"]).config([
	'$interpolateProvider', function($interpolateProvider) {
    	return $interpolateProvider.startSymbol('{(').endSymbol(')}');
  	}
]);
    
function MyController($scope, $firebase) {
    var ref = new Firebase("https://blistering-fire-9737.firebaseio.com/");
    $scope.messages = $firebase(ref);
    $scope.addMessage = function(e) {
	if (e.keyCode != 13) return;
       	$scope.messages.$add({from: $scope.name, body: $scope.msg});
        $scope.msg = "";
    }
}