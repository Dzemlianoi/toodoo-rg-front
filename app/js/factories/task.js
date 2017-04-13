app = angular.module('todo');

app.factory('Task', ['$resource', function($resource){
    return $resource('/tasks/:id.json', { id: '@id' }, {
        save: { method: 'PUT' },
        create: { method:'POST' }
    })
}]);