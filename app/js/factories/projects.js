app = angular.module('todo');

app.factory('Projects', ['$resource', function($resource){
    return $resource('/projects.json', {}, {
        index: { method: 'GET', isArray: true }
    })
}]);