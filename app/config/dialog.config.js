let app = angular.module('myApp', ['ngDialog']);

app.config(['ngDialogProvider', function (ngDialogProvider) {
  ngDialogProvider.setDefaults({
    className: 'ngdialog-theme-default custom-width',
    showClose: true,
    closeByDocument: true,
    closeByEscape: true
  });
}]);