// lessen 22
// JSON - javascript object native

var user = {
    name: "franc",
    id: 44444,
    lastVisit: Date.now(),
    friends: [2452, 62532, 4234234],
    toJSON: function() {
        return {
            name: this.name,
            lastVisit: this.lastVisit
        }
    }
};

var userData = JSON.stringify(user);

console.log(userData);
console.log(JSON.parse(userData));






