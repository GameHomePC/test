console.log("Some string");
console.log("Another string");

console.log('Some "long" string');
console.log("Some 'long' string");

console.log("Some 'long' string".length);

console.log("Some \"long\" string");

console.log("--------------------");
console.log("-------update-------");
console.log("--------------------");

var string = "Some \"long\" string";

console.log(string + " world");
console.log(string.charAt(string.length - 1)); // последний символ
console.log(string.slice(-1)); // возвращает последний символ
console.log(string.substring(14,4)); // возвращает строку с определённого номера символа, а так же колличество
console.log(string.substr(14,4));
console.log(string.indexOf('me')); // поиск значения first
console.log(string.lastIndexOf('me'));  // поиск значения last
console.log(string.split(" ")); // возвращает массив строк, которые были разделены пробелами
console.log(string.toUpperCase()); // Поднимает слово в верхний регистр
console.log(string.toLowerCase()); // Поднимает слово в нижний регистр
console.log(string[string.length - 1]); // последний символ (аналог charAt)