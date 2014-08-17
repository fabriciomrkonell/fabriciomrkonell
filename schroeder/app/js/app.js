var app = angular.module('schroederApp', []);

app.controller("schroederCtrl", ["$scope", "$http", function($scope, $http){

	$scope.page = 1;
	$scope.model = {
		temperaturas: [],
		medidas: 0,
		media:  {
			temperatura: 0,
			humidity: 0
		},
		sensor: {
			temperatura: "0",
			humidity: "0"
		},
		maxima: {
			temperatura: "0",
			humidity: "0"
		},
		minima: {
			temperatura: "0",
			humidity: "0"
		}
	};

	$scope.goPage = function(page){
		$scope.page = page;
	};

	$scope.getData = function(data){
		if(!!data){
			var data = data.split("T");
    	return (data[0]).split("-")[2] + "/" + (data[0]).split("-")[1] + "/" + (data[0]).split("-")[0] + " - " + (data[1]).split(":")[0] + ":" + (data[1]).split(":")[1];
   	}else{
    	return "0";
   	}
	};

	$scope.getDataMaxima = function(data){
		if(!!data){
			var data = data.split("T");
    	return (data[0]).split("-")[2] + "/" + (data[0]).split("-")[1] + "/" + (data[0]).split("-")[0];
   	}else{
    	return "0";
   	}
	};

	$http.get("http://schroeder-arduino.herokuapp.com/schroeder/balduinos").success(function(data, status, headers, config) {
			$scope.model.temperaturas = data;
			$scope.model.sensor.temperatura = data[data.length - 1].temperatura;
			$scope.model.sensor.humidity = data[data.length - 1].humidity;
			$scope.model.minima.temperatura = data[0];
			$scope.model.maxima.temperatura = data[0];
			$scope.model.minima.humidity = data[0];
			$scope.model.maxima.humidity = data[0];
			$scope.model.medidas = data.length;
      for(var i = 0; i < data.length; i++){
      				$scope.model.media.temperatura = $scope.model.media.temperatura + parseInt(data[i].temperatura);
      				$scope.model.media.humidity = $scope.model.media.humidity + parseInt(data[i].humidity);
				if(parseInt(data[i].temperatura) > parseInt($scope.model.maxima.temperatura.temperatura)){
					$scope.model.maxima.temperatura = data[i];
				};
				if(parseInt(data[i].humidity) > parseInt($scope.model.maxima.humidity.humidity)){
					$scope.model.maxima.humidity = data[i];
				};
				if(parseInt(data[i].temperatura) < parseInt($scope.model.minima.temperatura.temperatura)){
					$scope.model.minima.temperatura = data[i];
				};
				if(parseInt(data[i].humidity) < parseInt($scope.model.minima.humidity.humidity)){
					$scope.model.minima.humidity = data[i];
				};
			};
	});
}]);