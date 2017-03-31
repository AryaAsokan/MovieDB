movieApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'index.html',
            controller: 'mainController'
        })
        .when('/Search', {
            templateUrl: 'movieView.html',
             controller: 'mainController'              
        });    
});