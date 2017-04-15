app = angular.module('todo');

app.directive('projectWrapper',
    function() {
        return {
            scope: {
                'project': '='
            },
            templateUrl: 'js/views/project-wrapper.html',
            controller: 'projectsCtrl',
            link: ['Task', 'Project', function (scope, element, attrs, ctrl) {
                scope.testFunc = function(){
                    console.log(scope);
                }


                $scope.deleteProject = function (project) {
                    Project.delete({ id: project.id }, function () {
                        $scope.projects = window._.without($scope.projects, project);
                    })
                };
                // $scope.tasks = Task.index({project_id: $scope.project.id});
            }]
        }
    }
);
