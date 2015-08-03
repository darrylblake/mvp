var app = angular.module('ThumbsCheck')
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'templates/index.html'
      })

      .when('/speak', {
        templateUrl: 'templates/speak.html'
      })

      .when('/listen', {
        templateUrl: 'templates/listen.html'
      })

      .otherwise({
        redirectTo: '/'
      })
  });