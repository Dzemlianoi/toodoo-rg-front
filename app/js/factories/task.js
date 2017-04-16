app = angular.module('todo');

app.factory('Task', ['$resource', function($resource){
    return $resource('http://localhost:3000/tasks/:id.json', { id: '@id' }, {
        index:  { method: 'GET', responseType: 'json', isArray: true, params: { project_id: '@project_id' } },
        update: { method: 'PUT' },
        create: { method: 'POST' },
        orderUp: { method: 'PATCH', responseType: 'json', params: { task_id: '@task_id' }  },
        orderDown: { method: 'PATCH', responseType: 'json', params: { task_id: '@task_id' }  }
    })
}]);
