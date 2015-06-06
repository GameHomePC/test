var fs = require('fs');
var path = require('path');

/* fs.ReadStream наследуется от stream.Readable */
var ROOT = path.normalize(__dirname + '/public/');

var stream = new fs.ReadStream(ROOT + 'index.html');

stream.on('readable', function() {
    var data = stream.read();

    if(data != null) {
        console.log(data.length);
    }
});

stream.on('end', function() {
    console.log("THE END");
});

stream.on('error', function(err) {
    if(err.code == 'ENOENT') {
        console.log('Файл не найден, попинайте админа пусть выложит...');
    } else {
        console.error(err);
    }
});