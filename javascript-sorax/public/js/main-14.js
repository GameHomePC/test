// lessen 14
// Объекты

var person = {
    name: "Evgeny",
    age: 24,
    gender: "male",
    sayHi: function() {
        return "Hello!";
    }
};

var object = Object.create({ x: 10, y: 20, z: 30 });
object.x = 20;
console.log(object);

// delete выражение
delete object.x;
console.log(object);

console.log(object.z);
console.log("z" in object);

//object.z = undefined;
console.log(object.z);

for(var prop in object) {
    if(object.hasOwnProperty(prop)) {
        console.log(prop in object);
        console.log(object[prop]);
    }

    console.log(prop in object);
    console.log(object[prop]);
}

console.log("z" in object);

console.log(object);