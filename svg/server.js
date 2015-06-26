var http = require('http');
var express = require('express');
var path = require('path');

var app = express();
var server = new http.createServer(app);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    send('index.html', req, res);
});

function send(file, req, res) {
    res.sendFile(file, { root: __dirname }, function(err) {
        if(err) {
            console.log(err);
            res.status(err.status).end();
        }
    });
}

server.listen(3000, function() {
    console.log('localhost:3000');
});