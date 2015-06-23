// lessen 21
// Конструкторы и классы

var Person, person, anotherPerson, Developer, developer;

Person = function(name) {
    this.name = name;
};

Person.prototype.greet = function() {
    return "Hello, my name is " + this.name;
};

//person = new Person("Jack");
//console.log(person);
//console.log(person.name);
//console.log(person.greet());
//
//anotherPerson = new Person("Bruce");
//console.log(anotherPerson.name);
//
//// проверка на пренодлежность конструктора
//console.log(anotherPerson instanceof Person);
//console.log(Person.prototype.isPrototypeOf(anotherPerson));

Developer = function(name, skills) {
    Person.apply(this, arguments);

    this.skills = skills || [];
};

// наслудуем прототип Person в прототип Developer
Developer.prototype = Object.create(Person.prototype);

// Указать свой конструктор
Developer.prototype.constructor = Developer;

developer = new Developer("Evegny", ["css", "js", "html", "sass"]);
console.log(developer);
console.dir(developer.name);
console.log(developer.skills);
console.log(developer.greet());

console.log(developer instanceof Developer); // true
console.log(developer instanceof Person); // true

// немного нового об классах

console.log({}.toString()); // [object Object], где Object это класс

console.log(Object.prototype.toString.call(''));
console.log(Object.prototype.toString.call(1));
console.log(Object.prototype.toString.call([]));
console.log(Object.prototype.toString.call(function func() {}));

// определяет класс объекта
var classof = function(object) {
    return Object.prototype.toString.call(object).slice(8, -1);
};

console.log(classof(''));
console.log(classof(1));
console.log(classof([]));
console.log(classof(function func() {}));
console.log(classof(true));


