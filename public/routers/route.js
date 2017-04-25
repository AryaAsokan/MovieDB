movieApp.config(function($routeProvider) {
        $routeProvider
        //route for the home page
        .when('/', {
            templateUrl : 'movieView.html',
            controller : 'mainController'
        })
    });