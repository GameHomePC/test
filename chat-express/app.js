var express = require('express');
var http = require('http');
var path = require('path');
var config = require('config');
var log = require('libs/log')(module);

var app = express();
var server = new http.createServer(app);

app.engine('ejs', require('ejs-locals'));
app.set('views', __dirname + '/templates');
app.set('view engine', 'ejs');

// all environments
app.use(express.favicon()); // favicon.ico
if(app.get('env') == 'development') {
    app.use(express.logger('dev'));
} else {
    app.use(express.logger('default'));
}

app.use(express.bodyParser()); // req.body
app.use(express.cookieParser('your secret here')); // req.headers
app.use(app.router);

app.get('/', function(req, res, next) {
    res.render('index', {

    })
});

app.use(express.static(path.join(__dirname, 'public')));

app.use(function(err, req, res, next) {
    if (app.get('env') == 'development') {
        var errorHandler = express.errorHandler();
        errorHandler(err, req, res, next);
    } else {
        res.send(500);
    }
});

server.listen(config.get('port'), function() {
    log.info('Express server listening on port ' + config.get('port'));
});


