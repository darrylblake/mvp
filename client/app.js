var app = angular.module('ThumbsCheck', ['ngRoute']);
unique = Math.floor(Math.random() * 999999 + 99999);
socket = io();


$(function() {
  var data = {
    // A labels array that can contain any sort of values
    labels: [1,2,3,4,5],
    // Our series array that contains series objects or in this case series data arrays
    series: [
      [0, 100, 50, 25]
    ]
  };

  // Create a new line chart object where as first parameter we pass in a selector
  // that is resolving to our chart container element. The Second parameter
  // is the actual data object.
  var chart = new Chartist.Line('.chart', data);


  var data = {
    // A labels array that can contain any sort of values
    labels: [1,2,3,4,5],
    // Our series array that contains series objects or in this case series data arrays
    series: [
      [0, 20, 50, 25]
    ]
  };

  chart.update(data);
  
  socket.on('vote', function(data){
    $('#position').text(JSON.stringify(data));

    var data = {
      // A labels array that can contain any sort of values
      labels: [1,2,3,4,5],
      // Our series array that contains series objects or in this case series data arrays
      series: [
        data
      ]
    };

    chart.update(data);
    //$('.marker').css({'top': msg[0], 'left': msg[1]});
  });


});

