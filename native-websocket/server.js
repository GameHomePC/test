var express = require('express');
var app = express();
var WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({port: 10001, host: 'localhost'});

/* app */
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(10000);
console.log('start server: localhost:10000');


/* ws */
wss.on('connection', function(socket) {

    console.dir(user);

    socket.on('message', function(event) {
        console.log(event);
    });

    socket.on('close', function() {
        console.log('соединение закрыто');
    });
});