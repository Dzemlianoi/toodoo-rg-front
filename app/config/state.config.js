let app = angular.module('todo');

app.config(function ($stateProvider, $urlRouterProvider) {
  const unpermited = {
    access: ['$auth', '$state', function ($auth, $state) {
      $auth.validateUser().then(function () {
        $state.go('home')
      }, function () {
        return true
      })
    }]
  };
  
  $stateProvider
    .state('signin', {
      url: "/",
      controller: 'signinCtrl',
      templateUrl: "/views/signin.html",
      resolve: unpermited
    })
    .state('signup', {
      url: "/signup",
      controller: 'signupCtrl',
      templateUrl: "/views/signup.html",
      resolve: unpermited
    })
    .state('home', {
      url: "/todo",
      controller: 'projectsCtrl',
      templateUrl: "/views/projects.html",
      resolve: {
        auth: function ($auth) {
          return $auth.validateUser();
        }
      }
    });
  
  $urlRouterProvider.otherwise("/");
});