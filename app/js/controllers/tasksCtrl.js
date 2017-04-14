angular.module('todo').controller('tasksCtrl', [
    '$scope',
    '$http',
    'Task',
    function($scope, $http, Task) {
        $scope.tasks = Task.index({ project_id: '????' });
    }
]);
