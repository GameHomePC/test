var http = require('http');

http.createServer(function(req, res) {
    process.nextTick(function() {

    });
}).listen(3000);
