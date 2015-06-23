// lessen 14
// Обработчики исключений

//throw "Hello";

//10 = "string";

//var myError = new Error("My Error Message");
//console.dir(myError);
//console.log(myError.name);
//console.log(myError.message);
//
//throw myError;

var calculate = function(n) {
    calculate.n = n !== undefined ? n : calculate.n;

    if (calculate.n > 10) {
        throw new Error('n should be less than 10');
        return n + 10;
    }
};

calculate.n = 15;

//calculate(20);

// try catch finally

try {
    calculate();
} catch (e) {
    console.log(e.message);
}