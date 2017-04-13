app = angular.module('todo');

app.factory('Project', ['$resource', function($resource){
    return $resource('http://toodoo-rg.herokuapp.com/projects/:id.json', { id:'@id' }, {
        index:  { method: 'GET', isArray: true, responseType: 'json' },
        update: { method: 'PUT' },
        create: { method: 'POST'}
    })
}]);