app = angular.module('todo');

app.factory('Tasks', ['$resource', function($resource){
    return $resource('/tasks.json', {}, {
        index: { method: 'GET', isArray: true }
    })
}]);