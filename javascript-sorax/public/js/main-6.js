// lessen 9
// Смена типов

console.log(5 + "5");
console.log(typeof (5 + "5"));

console.log("5" + "4");
console.log(typeof ("5" + "4"));

console.log("5" * "hi");
console.log(typeof ("5" * "hi"));

console.log("5" == 5);
console.log("0" == false);
console.log(0 == false);
console.log("5" == true);
console.log("" == false);
console.log(null == false);
console.log(null == true);
console.log(undefined == false);
console.log(undefined == true);
console.log(undefined == null);

// преобразование данных в типы
console.log(Number("555"));
console.log(typeof Number("555"));

console.log(String(555));
console.log(typeof String(555));

console.log(Boolean(1));
console.log(typeof Boolean(1));

// что-то новое для меня (можно использовать для краткой формы)
console.log("// что-то новое для меня (можно использовать для краткой формы)");

console.log(!!5); // true
console.log(!!0); // false

console.log(345 + ""); // преобразовывает в строку
console.log(typeof(345 + ""));

console.log(+"345"); // преобразовывает в число
console.log(typeof +"345");

// toString()
console.log("// toString()");

var number = 221111;

console.log(number.toString());
console.log(typeof number.toString());

console.log(number.toString(3));
console.log(number.toString(2));

console.log(typeof false.toString());

// parseInt, parseFloat
console.log('// parseInt, parseFloat');

console.log(parseInt("45px", 10));
console.log(parseFloat("45.22px"));

// infinity, NaN
console.log("// infinity, NaN");

console.log(typeof String(Infinity));
console.log(typeof String(NaN));
console.log(+""); // 0

console.log(!!""); // false
console.log(!!NaN); // false
console.log(!!0); // false
console.log(!!null); // false
console.log(!!undefined); // false

console.log(!!"Hi"); // true
console.log(+"     4 f  "); // 4 игнорирует пробелы(при это не должно встречаться лишних символов, смотри ниже)
console.log(typeof parseInt("     4 f  ", 10) + "");

console.log(+true); // 1
console.log(+false); // 0

var n = 5;
console.log(n.value);
n = "hello";
console.log(n.value);
n = null;
console.log(n.value);




