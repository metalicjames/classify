angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider',
function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })
                
        .when('/datapoint/:datapoint_id', {
            templateUrl: 'views/datapoint.html',
            controller: 'DatapointController'
        });

    $locationProvider.html5Mode(true);

}]);
