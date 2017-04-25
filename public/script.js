var myApp = angular.module('myApp' , ['ngRoute']);

/*myApp.controller('mainController', function ($scope, $http) {
	$scope.message = 'Haiiiiii, Helloo'	;
	$scope.formData = {};

	//When landing on the page , get all todos and show them.
	$http.get('/api/todos/').success(function(data){
		$scope.todos = data;
		console.log(data);
	})
	.error(function(data) {
		consol.log("Error " +data);
	});

	//Whwn submitting the add form, send the text to the node API

	$scope.saveHistory = function() {
		$http.post('/api/todos/', $scope.formdat)
			.success(function (data) {
				$scope.formData = {};
				$scope.todos = data;
				console.log(data);
			})
			.error(function (data) {
				console.log("Error "+data);
			});
	};

	//Delete todos after checking it.
	$scope.deleteTodo = function(id) {
		$http.delete('/api/todos/' +id)
		.success(function(data) {
			$scope.todos = data;
			console.log(data);
		})
		.error(function(data) {
			console.log("Error "+data);
		});
	};
});*/
function mainController($scope, $http) {
    $scope.formData = {};

    // when landing on the page, get all todos and show them
    $http.get('/api/hists')
        .success(function(data) {
            $scope.history = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    // when submitting the add form, send the text to the node API
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

    // delete a todo after checking it

}
