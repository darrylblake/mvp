var app = angular.module('ThumbsCheck');

app.controller('SpeakController', function($scope) {
  $scope.code = alphaNum(4);


  $(function() {
    var chart;
    socket.on('serverdata-' + $scope.code.toUpperCase(), function(data){
      console.log(data);
      var data = {
        // TODO: Labels should represent each audience member
        labels: range(data.length),
        series: [data]
      };
      // Create chart if it doesn't yet exist.
      chart = chart || new Chartist.Line('.chart', data);
      chart.update(data);
    });
  });
});


function range(length) {  
  var arr = []
  for (var i = 1; i < length; i++) {
    arr.push(i);
  }
  return arr;
}