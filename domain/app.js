var domain = require('domain');
var serverDomain = domain.create();

var server;

serverDomain.on('error', function(err) {
    console.error('Домен перехватил %s', err);
});

serverDomain.run(function() {
    var http = require('http');
    var handler = require('./handler');

    server = http.createServer(function(req, res) {
        var reqDomain = domain.create();
        reqDomain.add(req);
        reqDomain.add(res);

        reqDomain.on('error', function(err) {
            res.statusCode = 500;
            res.end("Sorry, " + err);

            serverDomain.emit('error', err);
        });

        reqDomain.run(function() {
           handler(req, res);
        });
    });

    http.createServer(server.handler);

    server.listen(3000);
});