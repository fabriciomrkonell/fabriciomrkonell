var app = angular.module('schroederApp', []);

app.controller("schroederCtrl", ["$scope", "$http", function($scope, $http){

	//var socket = io.connect("http://schroeder-arduino.herokuapp.com:80");

	/*socket.on('new-medicao', function(obj){
    console.log(obj);
    //$scope.$apply();
  });*/

	$scope.page = 1;
	$scope.model = {
		temperaturas: [],
		medidas: 0,
		media:  {
			temperature: 0,
			humidity: 0
		},
		sensor: {
			temperature: "0",
			humidity: "0"
		},
		maxima: {
			temperature: "0",
			humidity: "0"
		},
		minima: {
			temperature: "0",
			humidity: "0"
		}
	};

	$scope.goPage = function(page){
		$scope.page = page;
	};

	$scope.getData = function(data){
		if(!!data){
			var data = data.split("T");
    	return (data[1]).split(":")[0] + ":" + (data[1]).split(":")[1] + " - " + (data[0]).split("-")[2] + "/" + (data[0]).split("-")[1] + "/" + (data[0]).split("-")[0];
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

	$http.get("http://schroeder-arduino.herokuapp.com/schroeder/medicoes").success(function(data, status, headers, config) {
			$scope.model.temperaturas = data;
			$scope.model.sensor.temperature = data[data.length - 1].temperature;
			$scope.model.sensor.humidity = data[data.length - 1].humidity;
			$scope.model.minima.temperature = data[0];
			$scope.model.maxima.temperature = data[0];
			$scope.model.minima.humidity = data[0];
			$scope.model.maxima.humidity = data[0];
			$scope.model.medidas = data.length;
      for(var i = 0; i < data.length; i++){
      				$scope.model.media.temperature = $scope.model.media.temperature + parseInt(data[i].temperature);
      				$scope.model.media.humidity = $scope.model.media.humidity + parseInt(data[i].humidity);
				if(parseInt(data[i].temperature) > parseInt($scope.model.maxima.temperature.temperature)){
					$scope.model.maxima.temperature = data[i];
				};
				if(parseInt(data[i].humidity) > parseInt($scope.model.maxima.humidity.humidity)){
					$scope.model.maxima.humidity = data[i];
				};
				if(parseInt(data[i].temperature) < parseInt($scope.model.minima.temperature.temperature)){
					$scope.model.minima.temperature = data[i];
				};
				if(parseInt(data[i].humidity) < parseInt($scope.model.minima.humidity.humidity)){
					$scope.model.minima.humidity = data[i];
				};
			};
	});
}]);
