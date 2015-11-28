var app = app || {};

var TodoList = Backbone.Collection.extend({
    model: app.Todo,
    localStorage: new Backbone.LocalStorage('todos-backbone'), // подключаем локальное хранилище
    completed: function() {
        return this.filter(function(todo) {
            return todo.get('completed');
        })
    },
    // Фильтрация незавершенных задач списка.
    remaining: function() {
        return this.without.apply( this, this.completed() );
    },

    nextOrder: function() {
        if( !this.length ) {
            return 1;
        }
        return this.last().get('order') + 1;
    },

    // Задачи сортируются в порядке их ввода.
    comparator: function(todo) {
        return todo.get('order');
    }
});

app.Todos = new TodoList();