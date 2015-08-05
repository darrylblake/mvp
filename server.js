var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use('/', express.static(__dirname + '/client'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

var presentations = {}

// Delete votes older than 10 seconds
setInterval(function() {
  // for (var user in votes) {
  //   // Delete users votes after a period
  //   if(currentTime() - votes[user].time > 10) {
  //     delete votes[user];
  //   };

  //   // { code: '5678', user: 'CMDRGQU2Y3', score: 298 }

  //   var presentations = {};

  //   var chart = [];
  //   for (var vote in votes) {
  //     chart.push(votes[vote].vote);
  //   }


  //   if (chart.length === 0) {
  //     chart = [50];
  //   }
  //   io.emit('serverdata-2MJN', chart.sort());
  // }

  for (var presentation in presentations) {
    var code = presentation;
    var presentation = presentations[presentation];

    var chart = [];
    for (var vote in presentation) {
      var vote = presentation[vote];
      // Delete vote after a certain period
      if(currentTime() - vote.time > 20) {
        delete vote;
      } else {
        chart.push(vote.score);
      }
    }
 
    if (chart.length > 0) {
      console.log(presentation);
      io.emit('serverdata-' + code.toUpperCase(), chart.sort(function(a, b) {
        return a - b;
      }));
    }
  }
}, 500)

function currentTime(){
  return Math.floor(new Date().getTime() / 1000);
}

io.on('connection', function(socket){
  // On receiving a vote
  socket.on('uservote', function(data){
    var code = data.code || '0000';
    presentations[code] = presentations[code] || {}
    presentations[code][data.user] = {
      'score': data.score,
      'time': currentTime()
    }
  });

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

});
    

var server = http.listen(7777, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log(host, port);
});