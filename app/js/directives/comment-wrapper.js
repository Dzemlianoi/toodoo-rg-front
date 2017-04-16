app = angular.module('todo');

app.directive('commentWrapper', function() {
    return {
        scope: {
            'task': '='
        },
        templateUrl: 'js/views/directives/comment-wrapper.html',
        controller: ['$scope', 'Comment', 'Flash', 'ngDialog', function ($scope, Comment, Flash, ngDialog) {
            $scope.comments = Comment.index({ task_id: task.id })
        }]
    }
});