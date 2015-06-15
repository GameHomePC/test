// Простые типы
var myNumber = 2525,
    myString = "Some string",
    myBool = true,
    myNull = null,
    myUndef = undefined;

console.log(typeof myNumber);
console.log(typeof myString);
console.log(typeof myBool);
console.log(typeof myNull);
console.log(typeof myUndef);

// Объектные типы
var obj = { name: "sorax"},
    array = [1,2,3],
    reqexp = /w+/g,
    func = function(){};

console.log(typeof obj);
console.log(typeof array);
console.log(typeof reqexp);
console.log(typeof func);

obj.name = 'Hello, world';
array[1] = 'Hello, world';

console.log(array);

console.log(myString.toUpperCase());
console.log(myString);

var a, b, c, d;
a = b = c = d = 5;