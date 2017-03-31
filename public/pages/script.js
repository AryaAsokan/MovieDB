var myApp = angular.module('myApp', ['ngRoute']);

myApp.controller('mainController', function ($scope) {
	$scope.message = 'Haiiiiii, Helloo'	;
});
myApp.config(function ($routeProvider) {
	$routeProvider
	.when('/' , {
		templateUrl : 'home.html',
		controller : 'mainController'
	})
	.when ('/about', {
		templateUrl : 'about.html',
		controller : 'aboutController'
	})
	.when ('/contacts', {
		templateUrl : 'contacts.html',
		controller : 'contactsController'
	});
});

myApp.controller('aboutController', function ($scope) {
	$scope.message = 'In the about page' ;
});
myApp.controller('contactsController', function ($scope) {
	$scope.message = 'In the contacts page' ;
});