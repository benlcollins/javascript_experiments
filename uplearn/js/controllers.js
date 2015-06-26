uplearnApp.controller('mainCtrl',['$scope', 'links', '$location',function($scope, links, $location){	

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
		link.upvotes += 1;
	};

	$scope.showDetails = function(link,index){
		// if($scope.current != index){ return $scope.displaylink = link };
		if ($scope.current == index) {
			$scope.displaylink = '';
		}
		else {
			$scope.displaylink = link;	
		};
		if(typeof $scope.current === 'undefined'){ 
			$scope.current = index;
		}
		if($scope.current === index || $scope.displayState === false){
			$scope.detailedlink = link;
			// $scope.displayState = !$scope.displayState;
			// $scope.displaylink = '';

		}
		else {
			$scope.detailedlink = link;
			// $scope.displaylink = link;
		}
		$scope.current = index;
		// $scope.displaylink = '';
	};

	$scope.showDetails2 = function(link,index){
		$scope.displaylink2 = link;
	}

}]);

uplearnApp.controller('pagesCtrl',['$scope',function($scope){

}]);

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