app = angular.module('todo');

app.directive('taskWrapper', function() {
    return {
        scope: {
            'tasks': '=',
            'project': '='
        },
        templateUrl: 'views/directives/task-wrapper.html',
        controller: ['$scope', 'Task', 'Flash', 'ngDialog', function ($scope, Task, Flash, ngDialog) {
            $scope.addTask = function () {
                Task.create({ project_id: $scope.project.id, title: $scope.task_title },
                    function (response) {
                        $scope.tasks.push(response);
                        $scope.task_title = '';
                    },
                    function (reason) {
                        $scope.setError(reason, task);
                    }
                )
            };

            $scope.removeTask = function (task) {
                Task.delete({id: task.id}, function () {
                    $scope.tasks = window._.without($scope.tasks, task);
                })
            };

            $scope.updateCompleted = function (task) {
                Task.update({ id: task.id, completed: task.completed }, function (response) {
                    task = response;
                })
            };

            $scope.addTaskByEnter = function (task, keyEvent) {
                if (keyEvent.which == 13) $scope.addTask(task);
            };

            $scope.enableTitleEditing = function (event, task) {
                $scope.edited_input = angular.element(document.querySelector('#task' + task.id + ' .title-task'));
                $scope.edited_input.removeAttr('readonly');
                $scope.edited_input_title = task.title;
            };

            $scope.renameTaskByEnter = function (task, keyEvent) {
                if (keyEvent.which == 13) $scope.renameTask(task);
            };

            $scope.renameTask = function (task) {
                Task.update({id: task.id, title: task.title},
                    function () {
                        if ($scope.edited_input) {
                            $scope.edited_input.attr('readonly', true);
                            $scope.edited_input = '';
                        }
                        $scope.edited_input_title = '';
                    }, function (reason) {
                        $scope.setError(reason, task)
                    }
                )
            };

            $scope.setError = function (reason, task) {
                if (reason.data.title) {
                    task.title = $scope.edited_input_title;
                    Flash.create('danger', 'Title ' + reason.data.title.join('.<br/> Title '));
                }
            };

            $scope.orderDown = function (task) {
                Task.orderDown({ task_id: task.id }, function(response){ $scope.changePriority(task, response) })
            };

            $scope.orderUp = function (task) {
                Task.orderUp({ task_id: task.id }, function (response) { $scope.changePriority(task, response) })
            };

            $scope.changePriority = function(task, response) {
                task.priority = response.self_task.priority;
                var sided_task = window._.find($scope.tasks, { id: response.sided_task.id });
                sided_task.priority = response.sided_task.priority
            };

            $scope.checkArrow = function(task){
                var max_task = window._.last($scope.tasks);
                return max_task.priority == task.priority;
            };

            $scope.isCompleted = function(task) {
                return task.completed ? 'Yes' : 'No';
            };

            $scope.openTab = function(task) {
                $scope.editedTask = task;
                ngDialog.open({ template: 'views/modal/task-details-modal.html', width: 520, scope: $scope, task: task });
            };

            $scope.saveTask = function(task) {
                $scope.editedDeadline = task.deadline;
            };

            $scope.updateTime = function(task) {
                Task.update({ task_id: task.id, deadline: task.deadline },
                    function(response){
                        console.log(response)
                    }, function(reason){
                        console.log(reason);
                    }
                )
            }
        }]
    }
});