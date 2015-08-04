var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use('/', express.static(__dirname + '/client'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

var votes = {}

// Delete votes older than 10 seconds
setInterval(function() {
  for (var user in votes) {
    console.log(votes[user]);
    if(currentTime() - votes[user].time > 10) {
      delete votes[user];
      io.emit('vote', votes);
    };
    
  }
}, 1000)

function currentTime(){
  return Math.floor(new Date().getTime() / 1000);
}

io.on('connection', function(socket){
  socket.on('vote', function(data){
    votes[data.user] = {
      'vote': data.vote,
      'time': currentTime()
    }
    var chart = [];
    for (var vote in votes) {
      chart.push(votes[vote].vote);
    }
    io.emit('vote', chart);
  });

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

});
    

var server = http.listen(7878, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log(host, port);
});