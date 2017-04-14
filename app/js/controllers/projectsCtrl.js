angular.module('todo').controller('projectsCtrl', [
    '$scope',
    '$http',
    'Project',
    function ($scope, $http, Project) {
        $scope.projects = Project.index();
        $scope.deleteProject = function (project) {
            Project.delete({ id: project.id }, function () {
                $scope.projects = window._.without($scope.projects, project);
            })
        };

        $scope.addProject = function () {
            Project.create({}, function (project) {
                $scope.projects.push(project);
            })
        };

        $scope.renameProject = function() {

        }
}]);