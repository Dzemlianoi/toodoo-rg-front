app = angular.module('todo');

app.directive('taskWrapper', function() {
    return {
        scope: {
            'task': '='
        },
        templateUrl: 'js/views/task-wrapper.html',
        controller: ['$scope', 'Task', function ($scope, Task) {
        }]
    }
});