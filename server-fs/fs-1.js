var fs = require('fs');

fs.readFile(__filenamedasd, { encoding: 'utf-8' }, function(err, data) {
    if(err) {
        console.error(err);
    } else {
        console.log(data.toString());
    }
});