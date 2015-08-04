var app = angular.module('ThumbsCheck');

app.controller('SpeakController', function() {

  $(function() {
    var chart;
    socket.on('serverdata', function(data){
      var data = {
        // TODO: Labels should represent each audience member
        labels: [1,2,3,4,5,6],
        series: [data]
      };
      // Create chart if it doesn't yet exist.
      chart = chart || new Chartist.Line('.chart', data);
      chart.update(data);
    });
  });
  
});


