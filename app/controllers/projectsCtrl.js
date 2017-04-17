let app = angular.module('todo');

app.controller('projectsCtrl', ['$scope', 'Project',
  function ($scope, Project) {
    $scope.projects = Project.index();
    
    $scope.addProject = function () {
      Project.create({}, function (project) {
        $scope.projects.push(project);
      })
    };
    
    $scope.deleteProject = function (project) {
      Project.delete({ id: project.id }, function () {
        $scope.projects = _.without($scope.projects, project);
      })
    };
  }]);