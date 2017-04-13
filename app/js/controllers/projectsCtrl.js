angular.module('todo').controller('projectsCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get("http://toodoo-rg.herokuapp.com/projects").then(function (response) {
        $scope.projects = response.data;
    });
    $scope.deleteProject = function (id) {
        $http.delete("http://toodoo-rg.herokuapp.com/projects/" + id).then(function () {
            $scope.projects = window._.without($scope.projects, window._.findWhere($scope.projects, { id: id }));
        })
    };

    $scope.addProject = function(){
        $http.post("http://toodoo-rg.herokuapp.com/projects").then(function (response) {
            $scope.projects = $scope.projects.push(response.data);
        })
    }
}]);