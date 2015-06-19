// lessen 22
// Массивы
// ECMAScript 4
console.log("\t// ECMAScript 4\n\n");

var array = ["Some String", "Another String", "Third String"];

console.log(array);

console.log("// join - возвращает строку переводится присоединить");
array.join(); // возвращает строку переводится присоединить
console.log(array.join());

console.log("\n// reverse - Обратить обратно переводится обратный");
array.reverse(); // перевернуть массив переводится обратный
console.log(array);

console.log("\n// sort - сортирует массив");
array.sort(); // сортирует массив
console.log(array);

console.log("\n// concat - обьединяет массивы и возвращает новый массив");
array.concat("Hello World", ["1", "2", "3"]); // обьединяет массивы и возвращает новый массив
console.log(array.concat("Hello World", ["1", "2", "3"])); // обьединяет массивы и возвращает новый массив

console.log("\n// slice - удаляет значение массива под индексом и возвращает текущий");
console.log(array.slice(1)); // удаляет значение массива под индексом и возвращает текущий

console.log("\n// splice - удаляет с определённого индекса определённое колличество и вставляет вместо удалённого новый массив и возвращает то что заменили");
array.splice(1, 1, "1", "2"); // удаляет с определённого индекса определённое колличество и вставляет вместо удалённого новый массив и возвращает то что заменили
console.log(array);

console.log("\n// push - добавляет в конец массива новое значение");
array.push("JavaScript - last"); // добавляет в конец массива новое значение
console.log(array);

console.log("\n// unshift - добавляет в в начало массива новое значение");
array.unshift("JavaScript - first"); // добавляет в в начало массива новое значение
console.log(array);

console.log("\n // pop - удаляет последний элемент массива и возвращает его");
console.log(array.pop());

console.log("\n // shift - удаляет первый элемент массива и возвращает его");
console.log(array.shift());

// ECMAScript 5
console.log("\n\t// ECMAScript 5");

var array = ["Some String", "Another String", "Third String", "JavaScript", "Sorax"];
var numbers = [1, 2, 3, 4, 5, 6];

console.log("\n// forEach - пробежаться по массиву");
array.forEach(function(elements, index, array) {
    array[index] = elements.toUpperCase();
});
console.log(array);

console.log("\n// map - пробежаться по массиву");
var map = array.map(function(e) {
    return e.toLowerCase();
});
console.log(map);

console.log("\n filter - фильтрует элементы, возвращает true или false");
var filters = array.filter(function(e) {
    return e.indexOf("T") >= 0;
});
console.log(filters);

console.log("\n // every - возвращает true, если во всех значениях массива будет истина переводится: каждый");
console.log(array.every(function(e){
    return e.length > 4;
}));

console.log("\n // some - переводится: некоторые");
console.log(array.some(function(e) {
    console.log(e);
    return e.indexOf('X') !== -1;
}));

console.log("\n // reduce - пересчитывает все значения переводится: уменьшить");
var reduced = numbers.reduce(function(a, b) {
    console.log(arguments);
    console.log(b % 3);
    return a * (b % 3 === 0 ? b : 1);
});
console.log(reduced);

console.log("\n // reduceRight - переводится: уменьшить");
var reducedRight = numbers.reduceRight(function(a, b) {
    console.log(arguments);
    console.log(b % 3);
    return a * (b % 3 === 0 ? b : 1);
});
console.log(reducedRight);

console.log("\n // indexOf - для массивов");
numbers.indexOf();
numbers.lastIndexOf();









