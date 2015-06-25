var uplearnApp = angular.module('uplearn',['ui.router']);

uplearnApp.config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider,$urlRouterProvider){
		$stateProvider
			.state('home', {
				url: '/home',
				templateUrl: 'home/_home.html',
				controller: 'mainCtrl'
			})
			.state('about',{
				url: '/about',
				templateUrl: 'pages/_about.html',
				controller: 'pagesCtrl'
			})
			.state('contact',{
				url: '/contact',
				templateUrl: 'pages/_contact.html',
				controller: 'pagesCtrl'
			})
			.state('jobs',{
				url: '/jobs',
				templateUrl: 'jobs/_jobs.html',
				controller: 'jobsCtrl'
			});

		$urlRouterProvider.otherwise('home');
}]);








