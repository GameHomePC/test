var express = require('express');
var app = express();
var WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({port: 10001, server: app});

/* app */
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(10000);

var users = {};
var userId = function(){

	function countObj(obj){
		var number = 0;

		for (var i in obj){
			if (obj.hasOwnProperty(i)){
				number += 1;
			}
		}

		return number;
	}

	var key = countObj(users);

	while(key in users){
		key += 1;
	}

	return key;
};

/* ws */
wss.on('connection', function(socket) {

	var id = userId();
	users[id] = {
		ws: socket
	};

	console.log(users);



    socket.on('message', function(data) {
    	for (var i in users){
    		if (users.hasOwnProperty(i)){
    			var user = users[i];
    			var ws = user.ws;

    			ws.send(data);
    		}
    	}
    });

    socket.on('close', function() {
    	if (id in users){
    		delete users[id];
    	}

        console.log('соединение закрыто');
    });
});