// initialize angular app called 'linkApp' and attach to variable called 'myApp'
var myApp = angular.module('linkApp', ['ui.router','ngAnimate']);

// setup configuration routes for ui.router
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

// setup main controller
myApp.controller('MainCtrl', [
	'$scope',
	'things',
	function($scope,things){

		// bind the $scope.links to the data array in the service
		$scope.links = things.links;

		// function for user to add new link
		$scope.addLink = function(){
			if (!$scope.linktitle || $scope.linktitle === '') { return; }
			$scope.links.push({
				link: $scope.linktitle, 
				upvotes: 0,
				comments: []
			});
			$scope.linktitle = '';
		};

		// function to handle upvoting of a link
		$scope.upvoteLink = function(link) {
			link.upvotes += 1;
		};

		// function to handle sorting links by upvotes
		var counter = 0;
		$scope.sortLinks = function(){
			if (counter % 2 == 0) {
				$scope.links.sort(compare);
			}
			else {
				$scope.links.sort(compare).reverse();
			}
			counter++;
		};

		// compare function used inside of sorting function
		var compare = function(a,b){
			if (a.upvotes < b.upvotes) {
					return 1;
				}
			if (a.upvotes > b.upvotes) {
					return -1;
				}
					return 0;
		};

		$scope.deleteLink = function(link) {
			var index = $scope.links.indexOf(link);
			var a = window.confirm("Are you sure you want to delete that link?");
			if (a == true){
				$scope.links.splice(index,1);	
			}
			else {
				return;
			}
		}

	}
]);

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

// setup factory for data
myApp.factory('things', [function(){
	var service = {
 		links: [
 			// some seed data to see what's going on
			{ link: "https://www.codeschool.com/courses/shaping-up-with-angular-js/",
				upvotes: 5,
				comments: [
					{author: 'Joe Bloggs', body: 'Great link!', timestamp: 1288323623006},
					{author: 'Jenny Smith', body: 'Thanks for sharing!', timestamp: 1288323623006}
				] 
			},
			{ link: "https://www.railstutorial.org/book",
				upvotes: 3,
				comments: [
					{author: 'Joe Bloggs', body: 'Magnificent!', timestamp: 1288323623006},
					{author: 'Jenny Smith', body: 'Thanks for sharing!', timestamp: 1288323623006},
					{author: 'Anna Smith', body: 'Official docs are best', timestamp: 1288323623006}
				] 
			}
		]
 	};
 	return service;
}]);






