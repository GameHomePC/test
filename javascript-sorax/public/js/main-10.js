// lessen 13
// функции

//function greet(name) {
//    return "Hello " + name;
//}
//
//console.log(greet("Evgeny").toUpperCase());

//var greet = function(name) {
//    console.log(arguments);
//
//    return "Hello " + name;
//};
//
//console.log(greet("Evgeny", 23, 24, 25).toUpperCase());

var func = function(callback) {
    var name = "Evgeny";

    callback(name);
};

func(function(n) {
    console.log("Hello " + n);
});






