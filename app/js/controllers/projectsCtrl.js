angular.module('todo').controller('projectsCtrl', [
    '$scope',
    '$http',
    'Project',
    'Projects',
    function ($scope, $http, Project) {
        $scope.projects = Project.index();

        $scope.deleteProject = function (project) {
            Project.delete({ id: project.id }, function () {
                $scope.projects = window._.without($scope.projects, project);
            })
        };

        $scope.addProject = function (){
            $scope.projects = $scope.projects.push(Project.create())
        }
}]);