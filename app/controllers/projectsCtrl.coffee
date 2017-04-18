app = angular.module('todo');

app.controller 'projectsCtrl', ['$scope', 'Project', ($scope, Project) ->
  $scope.projects = Project.index();

  $scope.addProject = () ->
    Project.create { }, (project) ->
      $scope.projects.push project

  $scope.deleteProject = (project) ->
    Project.delete { id: project.id }, () ->
      $scope.projects = _.without $scope.projects, project
]