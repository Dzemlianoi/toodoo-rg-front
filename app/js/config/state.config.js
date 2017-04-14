app = angular.module('todo');

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state('signin', {
            url: "/signin",
            controller: 'signinCtrl',
            templateUrl: "/js/views/signin.html"
        })
        .state('signup', {
            url: "/signup",
            controller: 'signupCtrl',
            templateUrl: "/js/views/signup.html"
        })
        .state('home', {
            url: "/",
            controller: 'projectsCtrl',
            templateUrl: "/js/views/projects.html"
        })
});