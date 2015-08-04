var app = angular.module('ThumbsCheck');

app.controller('ListenController', function($scope) {


  
  // Detects desktop
  $('.votepatch').on('mousemove', function(e) {
    if (e.which == 1) {
      socket.emit('uservote', {
        'code': $scope.code,
        'user': session,
        'score': e.pageY
      });
    };
  });
  // Detecting user touch...
  // document.addEventListener('touchmove', function(e) {
  //     e.preventDefault();
  //     var touch = e.touches[0];
  //     socket.emit('vote', {
  //       'user': unique,
  //       'vote': touch.pageY
  //     });      
  // }, false);

// $('body').on('mousedown touchstart', function(e) {

//   var touch = e.originalEvent;
//   //e.preventDefault();

//   //var pageX = touch ? touch[0].pageX : e.pageX;

//     socket.emit('vote', {
//       'user': unique,
//       'vote': ev.originalEvent.pageY
//     });  
// });

  // $('body').on('swipe', function(ev) {
  //   //ev.preventDefault();
  //   var e = ev.originalEvent
  //   e.preventDefault();
    
  //   //var touch = e.touches[0];
  //   socket.emit('vote', {
  //     'user': unique,
  //     'vote': ev.originalEvent.pageY
  //   });    
  // });

  // $('body').on({ 'touchstart', function(ev){ 
  // });


  $(".votepatch").on("swipe",function(){
    alert('testing');
  });

  socket.on('vote', function(data){
    $('#position').text(JSON.stringify(data));
    $('.marker').css({'top': data.vote });
  });
});
