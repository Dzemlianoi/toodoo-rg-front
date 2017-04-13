app = angular.module('todo');


app.factory('Project', ['$resource', function($resource){
    return $resource('/projects/:id.json', { id:'@id' }, {
        save: { method: 'PUT' },
        create: {method:'POST'}
    })
}]);