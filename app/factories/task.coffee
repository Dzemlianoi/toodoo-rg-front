app = angular.module('todo');

app.factory 'Task', ['$resource', ($resource) ->
  $resource 'http://localhost:3000/tasks/:id.json', { id: '@id' },
    index:
      method: 'GET'
      responseType: 'json'
      isArray: true
      params:
        project_id: '@project_id'
    update:
      method: 'PUT'
    orderUp:
      method: 'PATCH',
      url: 'http://localhost:3000/tasks/:task_id/order_up',
      responseType: 'json',
      params:
        task_id: '@task_id'
    orderDown:
      method: 'PATCH',
      url: 'http://localhost:3000/tasks/:task_id/order_down',
      responseType: 'json',
      params:
        task_id: '@task_id'
]
