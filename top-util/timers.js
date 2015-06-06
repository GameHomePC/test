var http = require('http');

var server = new http.Server(function(req, res) {
    res.end('1');
}).listen(3000);

console.log('localhost:3000');

setTimeout(function() {
    server.close();
}, 2500);

var timer = setInterval(function() {
    console.log(process.memoryUsage());
}, 1000);

timer.unref();
