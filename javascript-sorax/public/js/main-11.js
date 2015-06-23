// lessen 14
// область видимости

var i = 5;
console.log(i);

var func = function() {
    var i = 10;
    console.log(i);

    var innerFunc = function() {
        var i = 15;
        console.log(i);
    };

    innerFunc();
};

func();








