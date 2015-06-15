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
			// .state('comments',{
			// 	url: '/comments/{id}'
			// });
	}
]);

myApp.controller('MainCtrl', [
	'$scope',
	'things',
	function($scope,things){
		// $scope.testVal = "Angular App Example";
		
		// $scope.links = [
		// 	{ link: "https://angularjs.org/", upvotes: 5 },
		// 	{ link: "https://thinkster.io/angular-rails/", upvotes: 14 },
		// 	{ link: "https://www.codeschool.com/courses/shaping-up-with-angular-js/", upvotes: 3 }
		// ];

		$scope.links = things.links

		$scope.addLink = function(){
			if (!$scope.linktitle || $scope.linktitle === '') { return; }
			$scope.links.push({link: $scope.linktitle, upvotes: 0});
			$scope.linktitle = '';
		};

		$scope.upvoteLink = function(link) {
			link.upvotes += 1;
		};
	}
]);

myApp.factory('things', [function(){
	var service = {
 		links: [
 		// 	{ link: "https://angularjs.org/", upvotes: 5 },
			// { link: "https://thinkster.io/angular-rails/", upvotes: 14 },
			// { link: "https://www.codeschool.com/courses/shaping-up-with-angular-js/", upvotes: 3 }
		]
 	};
 	return service;
}]);






