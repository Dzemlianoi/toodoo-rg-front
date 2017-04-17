var app = angular.module('todo');

app.controller('signinCtrl', [
    '$scope',
    '$auth',
    '$state',
    'Flash',
    function($scope, $auth, $state, Flash){
        $scope.$on('auth:login-success', function(ev, user) {
            Flash.clear();
            Flash.create('success', 'Log in successfully');
            $state.go('home')
        });

        $scope.$on('auth:login-error', function(ev, reason) {
            if (reason && reason.errors) Flash.create('danger', reason.errors[0]);
        });

        $scope.$on('auth:logout-success', function() {
            Flash.create('success', 'Log out successfully');
            $state.go('signin');
        });
    }
]);
