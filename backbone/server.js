var http = require('http');
var express = require('express');
var path = require('path');

var app = express();
var server = new http.createServer(app);

app.use(express.static(path.join(__dirname)));

app.get('/', function(res, req) {
    send('index.html', res, req);
});

function send(file, req, res) {
    res.sendFile(file, { root: __dirname }, function(err) {
        if(err) {
            console.log(err);
            res.status(err.status).end();
        }
    });
}

server.listen(4000, function() {
    console.log('localhost:4000');
});