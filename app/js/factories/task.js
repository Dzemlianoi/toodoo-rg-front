app = angular.module('todo');

app.factory('Task', ['$resource', function($resource){
    return $resource('/tasks/:id.json', { id: '@id' }, {
        index:  { method: 'GET', isArray: true, responseType: 'json' },
        update: { method: 'PUT' },
        create: { method:'POST' }
    })
}]);