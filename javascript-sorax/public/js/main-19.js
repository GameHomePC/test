// lessen 22
// Цепные вызовы методов

// со строками
var string, newString;

string = "Sometimes the same is different";

newString = string
    .replace("is", "is not") // замена строки
    .concat(" actually") // добавить в конец
    .toUpperCase()  // верхний регистр
    .replace(/ /g, "\n") // регулярка добавить перенос вместо пробелов
    .slice(10); // обрезать первых 10 символов

//console.log(newString);

// с объектами
var Vec2 = function(x,y) {
    this.x = x;
    this.y = y;
};

Vec2.prototype.add = function(vec) {
    this.x += vec.x;
    this.y += vec.y;
    return this;
};

Vec2.prototype.multScalar = function(scalar) { // скаляр
    this.x += scalar;
    this.y += scalar;
    return this;
};

var world = { // мир
    gravity: new Vec2(0, 1), // вес
    airResistance: .9, // air - воздух, resistance - сопротивление
    wind: new Vec2(10, 1), // ветер
    control: new Vec2(-3, -5) // управление
};

var object = {
    position: new Vec2(10, 20),
    speed: new Vec2(1,3),
    update: function() {
        this.speed
            .add(world.gravity)
            .add(world.wind)
            .add(world.control)
            .multScalar(world.airResistance)

        return this.position.add(this.speed);
    }
};

console.log(object.update())
console.log(object.update())
console.log(object.update())
console.log(object.update())
console.log(object.update())
console.log(object.update())