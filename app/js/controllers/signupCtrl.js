var app = angular.module('todo');

app.controller('signupCtrl', [
    '$scope',
    '$auth',
    '$state',
    function($scope, $auth, $state){
        $scope.$on('auth:registration-email-success', function(ev, user) {
            $state.go('signin')
        });

        $scope.$on('auth:registration-email-error', function(ev, reason) {
            console.log(reason);
        });
    }
]);