var util = require('util');

var phrases = {
    "Hello": "Привет",
    "world": "Мир"
};

/* message name stack */
/* PhraseError */
function PhraseError(message) {
    this.message = message; // Error.apply(this, arguments) конструктор супер класса
    Error.captureStackTrace(this, PhraseError); // получаем текущий стек
}
util.inherits(PhraseError, Error);
PhraseError.prototype.name = "PhraseError";

/* HttpError */
function HttpError(status, message) {
    this.status = status;
    this.message = message;
    Error.captureStackTrace(this, HttpError); // получаем текущий стек
}
util.inherits(HttpError, Error);
HttpError.prototype.name = "HttpError";


function getPhrase(name) {
    if(!phrases[name]) {
        throw new PhraseError("Нет такой фразы: " + name);
    }
    return phrases[name];
}

function makePage(url) {
    if(url != 'index.html') {
        throw new HttpError(404, "нет такой страницы");
    }
    return util.format("%s, %s", getPhrase("Hello1"), getPhrase("world"));
}

try {
    var page = makePage('index.html');
    console.log(page);
} catch(e) {
    if(e instanceof HttpError) {
        console.log(e.status);
        console.log(e.message);
    } else {
        console.error("Ошибка %s\n Сообщение: %s\n стек: %s", e.name, e.message, e.stack);
    }
}
