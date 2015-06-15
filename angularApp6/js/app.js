var myApp = angular.module('linkApp', ['ui.router']);

myApp.config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider,$urlRouterProvider){
		$urlRouterProvider.otherwise('home');

		$stateProvider
			.state('home',{
				url: '/home',
				templateUrl: 'templates/home.html',
				controller: 'MainCtrl'
			})
			.state('about',{
				url: '/about',
				templateUrl: 'templates/about.html',
				controller: 'MainCtrl'
			})
			.state('comments',{
				url: '/comments/{id}',
				templateUrl: 'templates/comments.html',
				controller: 'CommentsCtrl'
			});
	}
]);

myApp.controller('MainCtrl', [
	'$scope',
	'things',
	function($scope,things){
		// $scope.testVal = "Angular App Example";

		$scope.links = things.links;

		$scope.addLink = function(){
			if (!$scope.linktitle || $scope.linktitle === '') { return; }
			$scope.links.push({
				link: $scope.linktitle, 
				upvotes: 0,
				comments: []
			});
			$scope.linktitle = '';
		};

		$scope.upvoteLink = function(link) {
			link.upvotes += 1;
		};
	}
]);

myApp.controller('CommentsCtrl',[
	'$scope',
	'$stateParams',
	'things',
	function($scope,$stateParams,things){
		// $scope.linkid = $stateParams.id;
		$scope.link = things.links[$stateParams.id];

		$scope.addComment = function(){
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

myApp.factory('things', [function(){
	var service = {
 		links: [
 			// some seed data to see what's going on
			{ link: "https://www.codeschool.com/courses/shaping-up-with-angular-js/",
				upvotes: 3,
				comments: [
					{author: 'Joe Bloggs', body: 'Great link!', timestamp: 1288323623006},
					{author: 'Jenny Smith', body: 'Thanks for sharing!', timestamp: 1288323623006}
				] 
			}
		]
 	};
 	return service;
}]);






