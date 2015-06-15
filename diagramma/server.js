var http = require('http');
var express = require('express');
var fs = require('fs');
var path = require('path');

var app = express();
var server = new http.createServer(app);

app.use(express.static(path.join(__dirname, 'public')));

app.get(['/','/index.html'], function(req, res, next){
    if(req.url == '/' || req.url == '/index.html') {
        getFile('index.html', req, res);
    } else {
        next();
    }
});

app.get('/svg.html', function(req, res, next){
    console.log(req.url);

    if(req.url == '/svg.html') {
        getFile('svg.html', req, res);
    } else {
        next();
    }
});

function getFile(file, req, res) {
    fs.readFile(file, function(err, content) {
        if(err) throw err;

        res.end(content);
    });
}

server.listen(3000, function() {
    console.log('localhost:3000');
});