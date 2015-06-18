angular.module('apiApp').controller('MainCtrl',['$scope','$http',function($scope,$http){	

	$scope.fetch = function(){
		if ($scope.search === undefined || $scope.search === '') {
			$scope.search = "Jurassic Park";
		}
		$http.get("http://www.omdbapi.com/?t=" + $scope.search + "&tomatoes=true&plot=full")
			.success(function(response){ $scope.details = response; })
			// .error(function(response){ $scope.details = "Error"; })
	}





}]);

