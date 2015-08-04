var app = angular.module('ThumbsCheck')
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'templates/index.html'
      })

      .when('/speak', {
        templateUrl: 'templates/speak.html',
        controller: 'SpeakController'
      })

      .when('/listen', {
        templateUrl: 'templates/listen.html',
        controller: 'ListenController'
      })

      .when('/listen/:code', {
        templateUrl: 'templates/vote.html'
      })

      .otherwise({
        redirectTo: '/'
      })
  });