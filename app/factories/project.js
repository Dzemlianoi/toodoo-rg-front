let app = angular.module('todo');

app.factory('Project', ['$resource', function ($resource) {
  return $resource('http://localhost:3000/projects/:id.json', { id: '@id' }, {
    index: { method: 'GET', isArray: true, responseType: 'json' },
    update: { method: 'PUT' },
    create: { method: 'POST' }
  })
}]);