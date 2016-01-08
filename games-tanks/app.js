var express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    path = require('path'),
    logger = require('morgan'),
    app = module.exports = express(),
    mongoose = require('mongoose'),
    db = mongoose.connect('mongodb://localhost:27017/notepad'),
    Document = require('./models.js').Document(db),
    db,
    Document;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.Document = Document = require('./models.js').Document(db);

app.get('/', function(req, res, next) {
    res.redirect('/documents');
});

// Document list
app.get('/documents.:format?', function(req, res) {
    Document.find().all(function(documents) {
        switch (req.params.format) {
            case 'json':
                res.send(documents.map(function(d) {
                    return d.__doc;
                }));
                break;

            default:
                res.render('documents/index.jade', {
                    locals: { document: documents }
                });
        }
    });
});

app.get('/documents/:id.:format?/edit', function(req, res) {
    Document.findById(req.params.id, function(d) {
        res.render('documents/edit.jade', {
            locals: { d: d }
        });
    });
});

app.get('/documents/new', function(req, res) {
    res.render('documents/new.jade', {
        locals: { d: new Document() }
    });
});

// Create document
app.post('/documents.:format?', function(req, res) {
    var d = new Document(req.body.document);
    d.save(function() {
        switch (req.params.format) {
            case 'json':
                res.send(d.__doc);
                break;

            default:
                res.redirect('/documents');
        }
    });
});

// Read document
app.get('/documents/:id.:format?', function(req, res) {
    Document.findById(req.params.id, function(d) {
        switch (req.params.format) {
            case 'json':
                res.send(d.__doc);
                break;

            default:
                res.render('documents/show.jade', {
                    locals: { d: d }
                });
        }
    });
});

// Update document
app.put('/documents/:id.:format?', function(req, res) {
    Document.findById(req.body.document.id, function(d) {
        d.title = req.body.document.title;
        d.data = req.body.document.data;
        d.save(function() {
            switch (req.params.format) {
                case 'json':
                    res.send(d.__doc);
                    break;

                default:
                    res.redirect('/documents');
            }
        });
    });
});

// Delete document
app.del('/documents/:id.:format?', function(req, res) {
    Document.findById(req.params.id, function(d) {
        d.remove(function() {
            switch (req.params.format) {
                case 'json':
                    res.send('true');
                    break;

                default:
                    res.redirect('/documents');
            }
        });
    });
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;