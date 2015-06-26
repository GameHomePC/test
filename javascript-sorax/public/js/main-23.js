// lessen 27
// Класс Date

var date = new Date(1990, 0, 1, 10, 24, 22, 223); //  год, месяц, число, часыб минуты, секунды
console.log(date);

console.log(date.getMilliseconds());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log("");
console.log(date.getDay());
console.log(date.getMonth());
console.log(date.getYear());
console.log(date.getFullYear());

console.log(date);
console.log(date.getTime());
console.log(new Date(1945, 0, 1).getTime());
console.log(new Date(1970, 0, 1, 3, 0, 0).getTime());
console.log(new Date(0));

console.log(Date.now());
