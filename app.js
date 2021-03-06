var express = require('express');
var app     = express();
var server  = require('http').createServer(app);
var io      = require('socket.io')(server);

app.get('/', function (req, res, next) {
	res.sendFile(__dirname+'/index.html');
});
server.listen(3000);
console.log('servidor corriendo...');

io.on('connection', function (socket){
	console.log('socket');

	socket.on('join', function (data) {
		console.log($('#new_user').val());
	});
	
	socket.on('messages', function (message) {
		socket.emit('broad', message);
		socket.broadcast.emit('broad', message);
	});
});
