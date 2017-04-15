app = angular.module('todo');

app.directive('taskWrapper', function() {
    return {
        scope: {
            'tasks': '=',
            'project': '='
        },
        templateUrl: 'js/views/task-wrapper.html',
        controller: ['$scope', 'Task', 'Flash', function ($scope, Task, Flash) {
            $scope.addTask = function(){
                Task.create({ project_id: $scope.project.id, title: $scope.task_title },
                    function(response){
                        $scope.tasks.push(response);
                        $scope.task_title = '';
                    },
                    function(reason) {
                        if (reason.data.title){
                            Flash.create('danger', 'Title ' + reason.data.title.join('.<br/> Title '));
                        }
                    }
                )
            };

            $scope.removeTask = function(task){
                Task.delete({ id: task.id }, function(){
                    $scope.tasks = window._.without($scope.tasks, task);
                })
            };

            $scope.updateComplitiion = function(task){
                Task.update({ id: task.id, completed: task.completed }, function(response){
                    task = response;
                })
            };

            $scope.addTaskByEnter = function(task, keyEvent) {
                console.log(keyEvent);
                if (keyEvent.which == 13) $scope.addTask(task);
            };
        }]
    }
});