require('angular');
var app = angular.module('todoApp', []);

app.controller('todoCtrl', ['$scope', todoCtrl]);

function todoCtrl($scope){
    $scope.projects = [
        {
            id: 1,
            title: 'Home',
            tasks: [
                {
                    id: 1,
                    title: 'Clean house',
                    completed: false,
                    order: 1,
                    deadline: null,
                    comments: [
                        {id: 1, comment_text: 'Perject'}, {id:2, comment_text: 'Great' }
                    ]
                },
                {
                    id: 2,
                    title: 'Wash dishes',
                    completed: true,
                    order: 2,
                    deadline: null
                },
                {
                    id: 3,
                    title: 'Cook dinner',
                    completed: true,
                    order: 3,
                    deadline: null
                }
            ]
        },
        {
            id: 2,
            title: 'Rest',
            tasks: [
                {
                    id: 4,
                    title: 'Walk around',
                    completed: true,
                    order: 1,
                    deadline: null,
                    comments: [
                        {id: 1, comment_text: 'Done'}
                    ]
                },
                {
                    id: 5,
                    title: 'Play football',
                    completed: false,
                    order: 2,
                    deadline: null
                },
                {
                    id: 6,
                    title: 'Go swimming',
                    completed: false,
                    order: 3,
                    deadline: null
                }
            ]
        }
    ]
}