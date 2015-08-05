// var app = angular.module('ThumbsCheck', [])

// app.factory('utils', function() {
//   var instance = {};
//   instance.alphaNum = function(length, chars){
//     chars = chars || '123456789ABCDEFGHJKMNPQRSTUVWXYZ'
//     var result = '';
//     for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
//     return result;  
//   }
//   return instance;
// });  

function alphaNum(length, chars) {
  chars = chars || '123456789'
  var result = '';
  for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
  return result;
}
