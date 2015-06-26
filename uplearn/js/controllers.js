uplearnApp.controller('mainCtrl',['$scope', 'links', '$location','$state',function($scope, links, $location,$state){	
	// window.MY_SCOPE = $scope;
	$scope.links = links.links;

	$scope.addLink = function() {
		if ($scope.title==="" || !$scope.title || $scope.url==="" || !$scope.url) { return; }
		$scope.links.push({
			title: $scope.title,
			body: $scope.body,
			url: $scope.url,
			upvotes: 0 
		});
		$scope.title = "Title";
		$scope.body = "Body";
		$scope.url = "Url";
		$location.url("/home");
	};

	$scope.upvoteLink = function(link) {
		event.stopPropagation();
		link.upvotes += 1;
	};

	$scope.hiddenDiv = false;

	$scope.showLink = function(index){
		event.stopPropagation();
		$location.url("/links/"+index);

		// var index = link.$$hashKey.slice(7);
		// $location.url("/links/"+index);
	}

}]);

uplearnApp.controller('pagesCtrl',['$scope','links','$stateParams',function($scope,links,$stateParams){
	// at the moment this just grabs from the array in my service, corresponding to the index parameter
	// if links on home page get out of order then this does not return the correct link details
	$scope.link = links.links[$stateParams.id];

	$scope.addComment = function(){
		if ($scope.body === "" || !$scope.body) { return; }
		$scope.link.comments.push({
			author: "Ben Collins",
			body: $scope.body
		});
		$scope.body = "Comment";
	};

}]);

// uplearnApp.controller('pagesCtrl',['$scope','links','$http','$stateParams',function($scope,links,$http,$stateParams){
// 	window.MY_SCOPE = $scope;
// 	$scope.links = links.links;
// 	$scope.linkid = $http.get("/#/links/" + $stateParams.id).then(function(){ return $stateParams.id; });
// 	$scope.links[Number($scope.linkid.$$state.value)];
// }]);


uplearnApp.controller('jobsCtrl',['$scope','$http',function($scope,$http){
	// $scope.jobs = ["Job 1", "Job 2", "Job 3"];
	// window.MY_SCOPE = $scope;

	$scope.getJobs = function(){
		if($scope.username === "" || !$scope.username) { $scope.username = "GitHub"; };
		$http.get("https://api.github.com/users/" + $scope.username)
			.success(function(data){ 
				$scope.user = data;
				$scope.loaded = true; 
			});
		// debugger
	}


}]);