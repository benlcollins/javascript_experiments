angular.module('apiApp',['ui.router'])
	.config([
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
		}
	])

