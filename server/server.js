var http = require('http');
var log = require('./log')(module);

/* demo 1 */
//var server = new http.Server(function(req, res) {
//
//    var urlParsed = url.parse(req.url, true);
//
//    if(urlParsed.pathname == '/echo' && urlParsed.query.message == 'Hello' ) {
//        res.writeHead(200, 'OK', { 'Cache-control':'no-cache' });
//        res.setHeader('Cache-control', 'no-cache');
//        res.end( urlParsed.query.message );
//    } else {
//        res.statusCode = 404;
//        res.end('Page not found');
//    }
//});

/* demo 2 */
var server = http.createServer();

server.on('request', require('./request'));

server.listen(1337);
log.info('localhost:1337');




