var myApp = angular.module('postApp', []);

myApp.factory('posts',[function(){
	var obj = {
		posts: []
	};
	return obj;
}]);

myApp.controller('MainCtrl', ['$scope','posts', function($scope,posts){
	$scope.test = "Hello World!";
	posts.posts = [
		{ title: "Jurassic Park", upvote: 11 },
		{ title: "Star Wars", upvote: 8 },
		{ title: "James Bond", upvote: 15 },
		{ title: "Birdman", upvote: 12 },
		{ title: "Unbroken", upvote: 4 },
		{ title: "Lord of the Rings", upvote: 9 },
		{ title: "The Hobbit", upvote: 1 },
		{ title: "Labyrinth", upvote: 7 }
	];
	$scope.posts = posts.posts;

	$scope.addPost = function() {
		if (!$scope.title || $scope.title === '') { return; };
		$scope.posts.push({
			title: $scope.title,
			link: $scope.link,
			upvote: 0
		});
		$scope.title = '';
		$scope.link = '';
	};

	$scope.plusUpvote = function(post) {
		post.upvote += 1;
	};
}]);