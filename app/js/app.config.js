var app = angular.module('todo');

app.config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.
        when('/', {
            controller: 'ProjectsController',
            template: './views/projects.html'
        }).
        when('/signin', {
            controller: 'signinCtrl',
            template: './views/signin.html'
        }).
        when('/register', {
            controller: 'registerCtrl',
            template: './views/register.html'

        }).
        otherwise('/');
    }
]);