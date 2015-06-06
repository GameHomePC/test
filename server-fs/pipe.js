var http = require('http');
var fs = require('fs');
var path = require('path');

var ROOT = path.normalize(__dirname + '/public/');

new http.createServer(function(req, res) {

    if(req.url == '/index.html') {

        var file = new fs.ReadStream(ROOT + 'index.html');

        sendFile(file, res);
    }

}).listen(3000);
console.log('localhost:3000');
/* вариант 1 */
/*function sendFile(file, res) {
    file.on('readable', write);

    function write() {
        var fileContent = file.read(); // читаем

        if(fileContent && !res.write(fileContent)) { // отправить
            file.removeListener('readable', write);

            res.once('drain', function() { // подождать
                file.on('readable', write);
                write();
            });
        }
    }

    file.on('end', function() {
        res.end();
    });
}*/

/* вариант 2 - встроенный */
function sendFile(file, res) {
    file.pipe(res);

    file.on('error', function(err) {
        res.statusCode = 500;
        res.end("Server Error");
        console.error(err);
    });

    file
        .on('open', function() {
            console.log('open');
        })
        .on('close', function() {
            console.log('close');
        });

    res.on('close', function() {
        file.destroy();
    })
}