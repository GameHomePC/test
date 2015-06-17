// lessen 11
// условный оператор
console.log("// условный оператор");

var number = 9;

var text = number > 10 ? "number больше 10" : number < 10 ? "number меньше 10" : "number равен 10";

console.log(text);

if (number > 10) {
    text = "number больше 10";
} else if (number < 10) {
    text = "number меньше 10";
} else {
    text = "number равен 10";
}

console.log(text);

// оператор запятая
console.log("// оператор запятая");

var test = (15, 20);

console.log((test, "Hello"));






