var app = angular.module('schroederApp', []);

app.controller("schroederCtrl", ["$scope", "$http", function($scope, $http){

	$scope.page = 1;
	$scope.model = {
		temperaturas: [],
		medidas: 0,
		media:  {
			temperatura: 0,
			humidade: 0
		},
		sensor: {
			temperatura: "0",
			humidade: "0"
		},
		maxima: {
			temperatura: "0",
			humidade: "0"
		},
		minima: {
			temperatura: "0",
			humidade: "0"
		}
	};

	$scope.goPage = function(page){
		$scope.page = page;
	};

	$scope.getData = function(data){
		return "0";
		//return data.gsx$indicaçãodedataehora.$t.split(" ")[1] + " - " + data.gsx$indicaçãodedataehora.$t.split(" ")[0];
	};

	$scope.getDataMaxima = function(data){
		/*if(angular.isObject(data) == true){
			return data.gsx$indicaçãodedataehora.$t.split(" ")[0];
		}*/
		return 0;
	};

	$http({
		method: 'GET',
		url: "http://pesagem.ranchobom.com/Danger/schroeder"
	}).success(function(data, status, headers, config) {
			$scope.model.temperaturas = data;
			$scope.model.sensor.temperatura = data[data.length - 1].temperatura;
			$scope.model.sensor.humidade = data.[data.length - 1].humidade;
			$scope.model.minima.temperatura = data[0];
			$scope.model.maxima.temperatura = data[0];
			$scope.model.minima.humidade = data[0];
			$scope.model.maxima.humidade = data[0];
			$scope.model.medidas = data.length;
      for(var i = 0; i < data.length; i++){
      				$scope.model.media.temperatura = $scope.model.media.temperatura + parseInt(data[i].temperatura);
      				$scope.model.media.humidade = $scope.model.media.humidade + parseInt(data[i].humidade);
				if(parseInt(data[i].temperatura) > parseInt($scope.model.maxima.temperatura.temperatura)){
					$scope.model.maxima.temperatura = data[i];
				};
				if(parseInt(data[i].humidade) > parseInt($scope.model.maxima.humidade.humidade)){
					$scope.model.maxima.humidade = data[i];
				};
				if(parseInt(data[i].temperatura) < parseInt($scope.model.minima.temperatura.temperatura)){
					$scope.model.minima.temperatura = data[i];
				};
				if(parseInt(data.[i].humidade) < parseInt($scope.model.minima.humidade.humidade)){
					$scope.model.minima.humidade = data[i];
				};
			};


	}).error(function(data, status, headers, config) {
		window.location.reload();
  });

}]);
