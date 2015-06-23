// lessen 14
// this и непрямой вызов методов

var greet = function(greeting, age, famyle) {
    if(age !== undefined) {
        greeting = famyle !== undefined ? greeting + "! My name is " + this.name + ", age " + age + ", famyle " + famyle : greeting + "! My name is " + this.name + ", age " + age
    } else {
        greeting = greeting + "! My name is " + this.name;
    }

    return greeting;
};

var person = {
    name: "Evgeny",
    greet: greet
};

var anotherPerson = {
    name: "Bob",
    greet: greet
};

var anotherPersonSergey = {
    name: "Sergey"
};

// test
console.log(person.greet("Hi"));
console.log(anotherPerson.greet.call(person, "Bonjour"));
console.log(anotherPerson.greet.call(person, "Bonjour", "20"));
console.log(anotherPerson.greet.apply(person, ["Bonjour", "24", "Alexseenko"]));
console.log(anotherPerson.greet.apply(anotherPersonSergey, ["Bonjour", "23"]));

var bound = greet.bind(anotherPersonSergey, "Hello there", "20", "Alexseenko");

console.log(bound());

