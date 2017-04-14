var app = angular.module('todo');

app.config(function (FlashProvider) {
    FlashProvider.setTimeout(7000);
    FlashProvider.setShowClose(true);
});