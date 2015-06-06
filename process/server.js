var http = require('http');
var argv = require('optimist').argv;

var server = new http.createServer();

server.on('request', function(req, res) {
    res.end("The server is running!");
});

server.listen(argv.port);
