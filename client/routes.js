var app = angular.module('ThumbsCheck')
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        template: '<h1>Home</h1>'
      })

      .when('/speak', {
        template: '<h1>Speaking</h1>'
      })

      .when('/listen', {
        template: '<h1>Listening</h1>'
      })

      .otherwise({
        redirectTo: '/'
      })
  });