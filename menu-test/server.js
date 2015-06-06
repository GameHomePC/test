var http = require('http');
var express = require('express');
var path = require('path');
var fs = require('fs');

var env = process.env.Path.split(';');

var app = express();

var server = new http.createServer(app);

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', function(req, res, next) {
    fs.readFile(path.join(__dirname, 'index.html'), function(err, content) {
        if(err) {
            res.statusCode = 500;
            res.end('Error Server');
            return;
        }

        res.end(content);
    });
});

server.listen(3000, function() {
    console.log('localhost:3000');
});