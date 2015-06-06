var fs = require('fs');
var path = require('path');

var ROOT = path.normalize(__dirname);

module.exports = function handler(req, res) {
    if(req.url == '/') {
        fs.readFile(ROOT + '/indexdd.html', function(err, content) {
            if(err) throw err;

            res.end(content);
        });
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
};