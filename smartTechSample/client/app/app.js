(function () {

	"use strict"
	
	angular.module('smartTechSampleApp', ['ngRoute', 'ngResource']).config(['$routeProvider', config]);

	function config($routeProvider) {

		$routeProvider.when('/', {
			templateUrl: '/features/todo/todo.html',
			controller: 'TodoController',
			controllerAs: 'todo'
		}).otherwise({
			redirectTo: '/'
		});
	}

})();