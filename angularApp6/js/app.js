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










