var util = require('util');

/* Родитель */
function Animal(name) {
    this.name = name;
}

Animal.prototype.walk = function() {
    console.log("Ходит " + this.name);
};

function Rabbit(name) {
    this.name = name;
}

util.inherits(Rabbit, Animal);

Rabbit.prototype.jump = function() {
  console.log("Прыгает " + this.name);
};

var rabbit = new Rabbit("Наш Кролик");

rabbit.walk();
rabbit.jump();