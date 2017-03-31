var movieApp = angular.module('movieApp', ['ngRoute']);
movieApp.controller('mainController', function($scope , $location, $http) {	
	$scope.message = 'Welcomeee';
	this.movieName = {};
	this.url = $location.absUrl();
	//$scope.search = "Sherlock Holmes";
 	this.getMovie = function () {
 		$http.get("http://www.omdbapi.com/?t=" + $scope.search + "&tomatoes=true&plot=full").then(
 		function(response){
 		 $scope.details = response.data;
 		 }); 
 		 $http.get("http://www.omdbapi.com/?s=" + $scope.search).then(
 		 	function(response){ 
 		 		$scope.related = response.data; 
 		 	});
 	};
});