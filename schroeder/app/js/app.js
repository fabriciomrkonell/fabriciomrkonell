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
		return data.gsx$indicaçãodedataehora.$t.split(" ")[1] + " - " + data.gsx$indicaçãodedataehora.$t.split(" ")[0];
	};
	
	$scope.getDataMaxima = function(data){
		if(angular.isObject(data) == true){
			return data.gsx$indicaçãodedataehora.$t.split(" ")[0];
		}
		return 0;
	};
		
	$http({
		method: 'GET', 
		url: "https://spreadsheets.google.com/feeds/list/1BH0BEaVd7WMWNXDTCoiFmDu_ABmrh_5cdPE5wqT7qvI/1/public/values?alt=json"
	}).success(function(data, status, headers, config) {
			$scope.model.temperaturas = data.feed.entry;
			$scope.model.sensor.temperatura = data.feed.entry[data.feed.entry.length - 1].gsx$temperatura.$t;			
			$scope.model.sensor.humidade = data.feed.entry[data.feed.entry.length - 1].gsx$humidade.$t;
			$scope.model.minima.temperatura = data.feed.entry[0];
			$scope.model.maxima.temperatura = data.feed.entry[0];
			$scope.model.minima.humidade = data.feed.entry[0];
			$scope.model.maxima.humidade = data.feed.entry[0];
			$scope.model.medidas = data.feed.entry.length;
      for(var i = 0; i < data.feed.entry.length; i++){
      				$scope.model.media.temperatura = $scope.model.media.temperatura + parseInt(data.feed.entry[i].gsx$temperatura.$t);
      				$scope.model.media.humidade = $scope.model.media.humidade + parseInt(data.feed.entry[i].gsx$humidade.$t);
				if(parseInt(data.feed.entry[i].gsx$temperatura.$t) > parseInt($scope.model.maxima.temperatura.gsx$temperatura.$t)){
					$scope.model.maxima.temperatura = data.feed.entry[i];
				};	
				if(parseInt(data.feed.entry[i].gsx$humidade.$t) > parseInt($scope.model.maxima.humidade.gsx$humidade.$t)){
					$scope.model.maxima.humidade = data.feed.entry[i];
				};
				if(parseInt(data.feed.entry[i].gsx$temperatura.$t) < parseInt($scope.model.minima.temperatura.gsx$temperatura.$t)){
					$scope.model.minima.temperatura = data.feed.entry[i];
				};
				if(parseInt(data.feed.entry[i].gsx$humidade.$t) < parseInt($scope.model.minima.humidade.gsx$humidade.$t)){
					$scope.model.minima.humidade = data.feed.entry[i];
				};
			};

			
	}).error(function(data, status, headers, config) {
		alert("Erro!");
  });
	
}]);
