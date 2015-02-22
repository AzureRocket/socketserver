var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000);

io.on('connection', function (socket) {
  socket.emit('test', { hello: 'world' });
  setInterval(function() {
    socket.emit('test', {hello: 'world'});
  }, 900);
});