angular.module('todo').controller('projectsCtrl', [
    '$scope',
    'Project',
    'underscore',
    function ($scope, Project, _) {
        $scope.projects = Project.index();

        $scope.addProject = function () {
            Project.create({}, function (project) {
                $scope.projects.push(project);
            })
        };

        $scope.deleteProject = function (project) {
            console.log(_);
            Project.delete({ id: project.id }, function () {
                $scope.projects =  _.without($scope.projects, project);
            })
        };
}]);