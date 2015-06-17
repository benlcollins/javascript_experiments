// setup the comments controller
myApp.controller('CommentsCtrl',[
	'$scope',
	'$stateParams',
	'things',
	function($scope,$stateParams,things){

		// get the current link from the params
		$scope.link = things.links[$stateParams.id];

		// function to allow user to add comment
		$scope.addComment = function(){
			if (!$scope.commentbody || $scope.commentbody === '' || !$scope.commentauthor || $scope.commentauthor === '') {return;};
			$scope.link.comments.push({
				author: $scope.commentauthor,
				body: $scope.commentbody,
				timestamp: Date.now()
			});
			$scope.commentbody = '';
			$scope.commentauthor = '';
		};
	}
]);