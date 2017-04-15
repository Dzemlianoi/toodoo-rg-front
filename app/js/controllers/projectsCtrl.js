angular.module('todo').controller('projectsCtrl', [
    '$scope',
    '$http',
    'Project',
    'Task',
    'Flash',
    function ($scope, $http, Project, Task, Flash) {

        $scope.projects = Project.index();

        $scope.addProject = function () {
            Project.create({}, function (project) {
                $scope.projects.push(project);
            })
        };

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
                })
        };

        $scope.renameProjectByEnter = function(project, keyEvent) {
            if (keyEvent.which == 13) $scope.renameProject(project);
        };
}]);