// lessen 26
// Объект Math
console.log(Math.pow(2,5)); // возведение в степень
console.log(Math.sqrt(400)); // квадратный корень числа
console.log(Math.sqrt(9)); // квадратный корень числа
console.log(Math.abs(300)); // абсолютное число
console.log(Math.abs(-300)); // абсолютное число

console.log(Math.round(9.6)); // округление числа
console.log(Math.round(9.4)); // округление числа

console.log(Math.floor(9.6)); // принудительное округление в меньшую сторону
console.log(Math.ceil(9.3)); // принудительное округление в большую сторону

console.log(Math.min(6, 9, 2, 5)); // выводит наименьшее число
console.log(Math.max(6, 9, 2, 5)); // выводит наибольшее число

console.log(Math.exp(1)); // выводит число е в указанную степнь
console.log(Math.exp(2)); // выводит число е в указанную степнь

console.log(Math.log(5)); // выводит натуральный логарифм числа

// тригонамитрические функции (Возвращают значение в радианах)

console.log(Math.sin(1)); // синус
console.log(Math.cos(1)); // косинус
console.log(Math.tan(1)); // тангенс
console.log(Math.asin(1)); // арк-синус
console.log(Math.acos(1)); // арк-косинус
console.log(Math.atan(1)); // арк-тангенс

console.log(Math.PI); // значение PI
console.log(Math.cos(Math.PI)); // косинус PI равен 1

// Метод random
console.log(Math.random()); // выводит рондомное значение от 0 до 1 по Default; переводится - Случайный

var getRandom = function(min, max) {
    return Math.round(Math.random() * (max - min) + min);
};

console.log(getRandom(10, 20));
console.log(getRandom(-100, 100));












