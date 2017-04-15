app = angular.module('todo');

app.directive('projectWrapper', function() {
    return {
        scope: {
            'project': '=',
            'delete': '='
        },
        templateUrl: 'js/views/project-wrapper.html',
        controller: ['$scope', 'Task', 'Project', 'Flash', function ($scope, Task, Project, Flash) {
            $scope.tasks = Task.index({ project_id: $scope.project.id });

            $scope.editProject = function(project) {
                $scope.edited_input = angular.element(document.querySelector('#project' + project.id + ' input'));
                $scope.edited_input.removeAttr('readonly');
                $scope.edited_input_title = project.title;
            };

            $scope.renameProject = function(project) {
                Project.update({ id: project.id, title: project.title},
                    function(){
                        if ($scope.edited_input){
                            $scope.edited_input.attr('readonly', true);
                            $scope.edited_input = '';
                        }
                        $scope.edited_input_title = '';
                    },
                    function(reason){
                        if (reason.data.title){
                            project.title = $scope.edited_input_title;
                            Flash.create('danger', 'Title ' + reason.data.title.join('.<br/> Title '));
                        }
                    }
                )
            };

            $scope.renameProjectByEnter = function(project, keyEvent) {
                if (keyEvent.which == 13) $scope.renameProject(project);
            };
        }]
    }
});
