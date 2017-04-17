let app = angular.module('todo');

app.config(['$authProvider', function ($authProvider) {
  $authProvider.configure({
    apiUrl: 'http://localhost:3000'
  });
}]);
