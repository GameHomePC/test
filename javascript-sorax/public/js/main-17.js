// lessen 20
// Прототипы и наследования

//var ObjectProto = {
//    name: "Evgeny"
//};
//
//var object = Object.create(ObjectProto);
//console.log(object.name);

var Person = {
    constructor: function(name, age, gender) {
        this.name = name,
        this.age = age,
        this.gender = gender

        return this;
    },
    greet: function() {
        console.log("Hi, my name is " + this.name);
    }
};

var person, anotherPerson, IvanPerson;

person = Object.create(Person).constructor("Evgeny", 24, "male");
anotherPerson = Object.create(Person).constructor("Sergey", 22, "male");
IvanPerson = Object.create(Person).constructor("Ivan", 27, "male");

console.log(person);
console.log(person1);
console.log(anotherPerson);
console.log(IvanPerson);

person.greet();
anotherPerson.greet();
IvanPerson.greet();

// проверка наслудуется ли конструктор
console.log(Person.isPrototypeOf(person));

//var person = {
//    name: "Evgeny",
//    age: 24,
//    gender: "male",
//    greet: function() {
//        console.log("Hi, my name is" + this.name);
//    }
//};
//
//var anotherPerson = {
//    name: "Sergey",
//    age: 22,
//    gender: "male",
//    greet: function() {
//        console.log("Hi, my name is" + this.name);
//    }
//};
//
//var IvanPerson = {
//    name: "Ivan",
//    age: 27,
//    gender: "male",
//    greet: function() {
//        console.log("Hi, my name is" + this.name);
//    }
//};

var WebDeveloper = Object.create(Person)
WebDeveloper.constructor = function(name, age, gender, skills) {
    Person.constructor.apply(this, arguments);
    this.slills = skills || [];
    return this;
};

console.log(WebDeveloper);

var developer = Object.create(WebDeveloper).constructor("Sergey", 22, "male", ["css", "js", "php", "html"]);

console.log(developer);


