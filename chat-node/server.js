var http = require('http');
var fs = require('fs');
var chat = require('./chat');
var path = require('path');

http.createServer(function(req, res) {
    switch(req.url) {
        case '/':
            sendFile(path.normalize(__dirname + '/index.html'), res);
            break;

        case '/subscribe':
            chat.subscribe(req, res);
            break;

        case '/publish':
            var body = '';

            req
                .on('readable', function() {
                    body += req.read();

                    if(body.length > 1e4) {
                        res.statusCode = 413;
                        res.end("Ваши данные слишком большого размера, произошла остановка");
                    }

                })
                .on('end', function() {

                    try {
                        body = JSON.parse(body);
                    } catch(e) {
                        res.statusCode = 400;
                        res.end("Запрос некоректен");
                        return;
                    }

                    chat.publish(body.message);
                    res.end('ok');
                });
            break;

        default:
            res.statusCode = 404;
            res.end("Not found");
    }
}).listen(3000);
console.log('localhost:3000');

function sendFile(fileName, res) {
    var fileStream = fs.createReadStream(fileName);

    fileStream
        .on('error', function() {
            res.statusCode = 500; // ошибка разработчика
            res.end('Server error');
        })
        .pipe(res)
        .on('close', function() {
            fileStream.destroy();
        });
}

