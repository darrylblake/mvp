var app = angular.module('ThumbsCheck', ['ngRoute']);
unique = Math.floor(Math.random() * 999999 + 99999);
socket = io();


$(function() {

  // Create a new line chart object where as first parameter we pass in a selector
  // that is resolving to our chart container element. The Second parameter
  // is the actual data object.
  var chart;


  
  socket.on('serverdata', function(data){
    $('#position').text(JSON.stringify(data));

    var data = {
      // A labels array that can contain any sort of values
      labels: [1,2,3,4,5,6],
      // Our series array that contains series objects or in this case series data arrays
      series: [
        data
      ]
    };

    chart = chart || new Chartist.Line('.chart', data);

    chart.update(data);
    //$('.marker').css({'top': msg[0], 'left': msg[1]});
  });


});

