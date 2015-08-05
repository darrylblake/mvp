var app = angular.module('ThumbsCheck');

app.controller('ListenController', function($scope, $location) {

  $scope.vote = function(code) {
    console.log('submitted form with ' + code)
    $location.path('/listen/' + code);
  };
});
