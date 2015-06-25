uplearnApp.controller('mainCtrl',['$scope', 'links',function($scope, links){	
	$scope.links = links.links;

	$scope.addLink = function() {
		if ($scope.title==="" || !$scope.title || $scope.url==="" || !$scope.url) { return; }
		$scope.links.push({
			title: $scope.title,
			url: $scope.url,
			upvotes: 0 
		});
		$scope.title = "Title";
		$scope.url = "Url";
	};

	$scope.upvoteLink = function(link) {
		link.upvotes += 1;
	};
}]);

uplearnApp.controller('pagesCtrl',['$scope',function($scope){

}]);

uplearnApp.controller('jobsCtrl',['$scope','$http',function($scope,$http){
	// $scope.jobs = ["Job 1", "Job 2", "Job 3"];
	window.MY_SCOPE = $scope;


	$scope.getJobs = function(){
		if($scope.username === "" || !$scope.username) { $scope.username = "GitHub"; };
		$http.get("https://api.github.com/users/" + $scope.username)
			.success(function(data){ 
				$scope.user = data;
				$scope.loaded = true; 
			});
		// debugger
	}


	// var invocation = new XMLHttpRequest();
	// var url = 'http://jobs.github.com/positions?description=python';

	// function callOtherDomain(){
	// 	if (invocation) {
	// 		invocation.open('GET',url,true);
	// 		invocation.onreadystatechange = handler;
	// 		invocation.send();
	// 	}
	// }

}]);