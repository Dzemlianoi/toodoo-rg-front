var app = angular.module('todo');

app.controller('signinCtrl', [
    '$scope',
    '$auth',
    '$state',
    function($scope, $auth, $state){
        $scope.$on('auth:login-success', function(ev, user) {
            $state.go('home')
        });

        $scope.$on('auth:logout-success', function() {
            $state.go('signin');
        });
    }
])
