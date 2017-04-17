let app = angular.module('todo');

app.controller('signupCtrl', ['$scope', '$auth', '$state', 'Flash',
  function ($scope, $auth, $state, Flash) {
    $scope.$on('auth:registration-email-success', function () {
      $state.go('signin');
      Flash.create('success', 'Signed up successfully!<br/> Sign in if you want')
    });
    
    $scope.$on('auth:registration-email-error', function (ev, reason) {
      if (reason && reason.errors && reason.errors.full_messages) {
        $scope.error_text = '<ul><li>' + reason.errors.full_messages.join('</li><li>') + '</li></ul>';
      } else {
        $scope.error_text = reason.errors[0];
      }
      Flash.create('danger', $scope.error_text);
    });
  }
]);