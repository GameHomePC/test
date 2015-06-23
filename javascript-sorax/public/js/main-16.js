// lessen 19
// Аксессоры и атрибуты свойств
var person = {
    name: "Evgeny",
    _age: 20,

    // Аксессоры
    get age(){
        return this._age;
    },
    set age(value){
        this._age = value < 0 ? 0 : value > 122 ? 122 : value;
    }
};

//person.age = 180;
//console.log(person.age);
//person.age = -80;
//console.log(person.age);
//person.age = 34;
//console.log(person.age);

// Дескриптор свойства
// writable: true, enumerable: true, configurable: true - атрибуты
console.log(Object.getOwnPropertyDescriptor(person, "name"));
console.log(Object.getOwnPropertyDescriptor(person, "age"));

// Определение или переопределение статический свойств
Object.defineProperty(person, "gender", {
    value: "male",
    writable: true,
    enumerable: false,
    configurable: false
});

console.log(person);
console.log(person.gender);
person.gender = "female";
console.log(person.gender);
console.log("");

for (property in person) {
    console.log(property);
}

// перечисляет свойства keys
console.log(Object.keys(person));

// проверка перечеслимых свойства
console.log(person.propertyIsEnumerable("gender"));

// defineProperties аналог defineProperty (но лучше)
var o = {};

Object.defineProperties(o, {
    x: {
        value: 10,
        writable: false
    },
    y: {
        value: 20,
        writable: false
    },
    r: {
        get: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        }
    }
});

o.x = 16;
console.log(o.x);
console.log(o.r);

var obj = {};
console.dir(Object);

// предотвратить расширение
//Object.preventExtensions(obj);
// проверка на расширение
//console.log(Object.isExtensible(obj));

// предотвратить расширение и ставит configurable: false на все свойства
//Object.seal(obj);
// Проверка isSeal
//console.log(Object.isSealed(obj));

// Аналог seal, только делает все свойства доступними для чтения(их нельзя будет изменить)
Object.freeze(obj);
console.log(Object.isFrozen(obj));

obj.x = 10;
console.log(obj);




