var movieApp = angular.module('movieApp', ['ngRoute']);

 /* movieApp.config(function($routeProvider) {
        $routeProvider
        //route for the home page
        .when('/', {
            templateUrl : 'movieView.html',
            controller : 'mainController'
        })
    });*/



movieApp.controller('mainController', function($scope , $location, $http ,$routeParams) {	
	$scope.message = 'Welcomeee';
	this.movieName = {};
	this.url = $location.absUrl();
	$scope.formData = {};
	//$scope.search = "Sherlock Holmes";
 	$scope.getMovie = function () {
 		$http.get("http://www.omdbapi.com/?t=" + $scope.formData.text + "&tomatoes=true&plot=full").then(
 		function(response){
 		 $scope.details = response.data;
 		 }); 
 		 $http.get("http://www.omdbapi.com/?s=" + $scope.formData.text).then(
 		 	function(response){ 
 		 		$scope.related = response.data; 
 		 	});
 	};
 	$scope.saveHistory = function() {
        $http.post('/api/hists', $scope.formData)
            .success(function(data) {
                $scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.history = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

});