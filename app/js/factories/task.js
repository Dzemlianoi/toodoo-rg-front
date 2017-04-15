app = angular.module('todo');

app.factory('Task', ['$resource', function($resource){
    return $resource('http://localhost:3000/tasks/:id.json', { id: '@id' }, {
        index:  { method: 'GET', responseType: 'json', isArray: true, params: { project_id: '@project_id' } },
        update: { method: 'PUT' },
        create: { method: 'POST' }
    })
}]);
