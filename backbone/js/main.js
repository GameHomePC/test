//================
// Модель
//================
var Person = Backbone.Model.extend({
    defaults: {
        name: 'Dima',
        age: 23,
        job: 'web developer'
    },

    //===================
    // Валидация Модели
    //===================
    validate: function(attrs) {
        console.log(attrs);
    },

    //===================
    // Методы
    //===================
    walk: function() {
        return this.get('name') + ' is walking'
    }
});

/* инициализация */
var person = new Person({
    name: 'Evgenie',
    age: 24,
    job: 'front-end developer'
});

//person.get('name');
//person.set('name', 'Roboto');
//person.toJSON() // вывести параметры в видеде объекта

