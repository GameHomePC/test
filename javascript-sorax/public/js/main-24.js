// lessen 28 - 29
// Регулярные выражения
var elementP = document.getElementsByTagName('p')[0];

var pattern = /(\b\w+)@(\w+\.\w+\b)/g,
    string = elementP.innerText,
    match;

while (match = pattern.exec(string)) {
    console.log(match);
}

// ---------------------- //
//var pattern = new RegExp("\w+", "gim"); // первый вариант
var pattern = /\w+/g, // предпочтительный вариант
    string = string; // текст

console.log(string.match(pattern));
console.log(string.search(pattern)); // игнорирует повторение флаг g и в случае поиска возвращает -1 или 0
console.log(string.split(/[\s,]+/)); // разделяем слова пробелами, не повторяя при этом пробелы

var input = document.getElementById('textarea'),
    output = document.getElementById('output');


var val = {
    name: "Evgeny",
    age: 20
};

// replace переводится заменять
input.addEventListener('keyup', function() {
    output.innerHTML = this.value.replace(/\{\{(\w*)\}\}/g, function(match, value) {
        console.log(arguments);

        return (val[value]) ? val[value] : "";
    });
}, false);


