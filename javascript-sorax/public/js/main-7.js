// lessen 10
// условные инструкции
if(true) console.log("Its true"); // выведет
if(false) console.log("Its true");  // не выведет

var n = 5;
if(n > 3) {
    n *= 3;
    console.log(n);
}

var name = "Evgeny", homecity;

if(name === "Vasia") {
    homecity = "Egipet"
} else if(name === "Evgeny") {
    homecity = "Minsk";
} else if(name === "Big") {
    homecity = 'LA';
}

console.log(homecity);

switch(name) {
    case "Vasia": homecity = "Egipet"; break;
    case "Evgeny": homecity = "Minsk"; break;
    case "Big": homecity = "LA"; break;
    default: homecity = "Moscow"
}

console.log(homecity);




