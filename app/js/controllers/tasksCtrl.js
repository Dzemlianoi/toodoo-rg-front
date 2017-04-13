angular.module('todo').controller('tasksCtrl', ['$scope', '$http', function($scope, $http){
    var request = {
        method: 'GET',
        url: "http://toodoo-rg.herokuapp.com/tasks",
        data: { project_id: '????' }
    };
    $http(request).then(function (response) {
        $scope.tasks = response.data;
    });
}]);
