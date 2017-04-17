app = angular.module('todo');

app.directive('commentWrapper', function() {
    return {
        scope: {
            'task': '='
        },
        templateUrl: 'views/directives/comment-wrapper.html',
        controller: ['$scope', 'Comment', 'Flash', 'Upload', function ($scope, Comment, Flash, Upload) {
            $scope.comments = Comment.index({ task_id: $scope.task.id });
            $scope.addComment = function() {
                var added_comment = Upload.upload({
                    url: 'http://localhost:3000/comments/',
                    data: $scope.getData()
                });
                added_comment.then(
                    function(response){
                        $scope.comments.push(response.data);
                        $scope.comment_text = '';
                    }, function (reason) {
                        if (reason.data.comment_text) {
                            Flash.create('danger', 'Text ' + reason.data.comment_text.join('.<br/> Text '));
                        }
                    }
                )
            };

            $scope.removeComment = function (comment) {
                Comment.delete({id: comment.id}, function () {
                    $scope.comments = window._.without($scope.comments, comment);
                })
            };

            $scope.getData = function() {
                return {
                    task_id: $scope.task.id,
                    comment_text: $scope.comment_text,
                    attachment: $scope.file
                }
            }
        }]
    }
});