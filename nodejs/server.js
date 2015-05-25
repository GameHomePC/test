/* bd */
var db = require('db');
var log = require('logger')(module); // модуль фабрика

db.connect();

/* user */
var User = require('user'); // exports

function run() {
    var vasya = new User("Вася");
    var petya = new User("Петя");

    vasya.hello(petya);

    log(db.getPhrase("Run successful"));
}

if(module.parent) {
    exports.run = run;
} else {
    run();
}