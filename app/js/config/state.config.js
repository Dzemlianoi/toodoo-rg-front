app = angular.module('todo');

app.config(function($stateProvider, $urlRouterProvider) {

    var unpermited = {
        access: ['$auth', '$state', function($auth, $state){
            $auth.validateUser().then(function() {
                $state.go('home')
            }, function(){
                return true;
            })
        }]
    };

    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('signin', {
            url: "/",
            controller: 'signinCtrl',
            templateUrl: "/js/views/signin.html",
            resolve: unpermited
        })
        .state('signup', {
            url: "/signup",
            controller: 'signupCtrl',
            templateUrl: "/js/views/signup.html",
            resolve: unpermited
        })
        .state('home', {
            url: "/todo",
            controller: 'projectsCtrl',
            templateUrl: "/js/views/projects.html",
            resolve: {
                auth: function($auth) {
                    return $auth.validateUser();
                }
            }
        })
});