var app = app || {};

app.AppView = Backbone.View.extend({
    el: '#todoapp',
    stastTemplate: _.template( $('#stats-template').html() ),
    events: {
        'keypress #new-todo': 'createOnEnter',
        'click #clear-completed': 'clearCompleted',
        'click #toggle-all': 'toggleAllComplete'
    },

    initialize: function() {
        this.allCheckbox = this.$('#toggle-all')[0];
        this.$input = this.$('#new-todo');
        this.$footer = this.$('#footer');
        this.$main = this.$('#main');
        this.listenTo(app.Todos, 'add', this.addOne);
        this.listenTo(app.Todos, 'reset', this.addAll);

        this.listenTo(app.Todos, 'change:completed', this.filterOne);
        this.listenTo(app.Todos, 'filter', this.filterAll);
        this.listenTo(app.Todos, 'all', this.render);

        app.Todos.fetch();
    },
    // Повторное отображение приложения означает лишь обновление статистики.
    // Остальная часть приложения не изменяется.
    render: function() {
        var completed = app.Todos.completed().length;
        var remaining = app.Todos.remaining().length;

        if( app.Todos.length ) {
            this.$main.show();
            this.$footer.show();
            this.$footer.html(this.stastTemplate({
                completed: completed,
                remaining: remaining
            }));

            this.$('#filters li a')
                .removeClass('selected')
                .filter('[href="#/' + (app.TodoFilter || '') + '"]')
                .addClass('selected');
        } else {
            this.$main.hide();
            this.$footer.hide();
        }

        this.allCheckbox.checked = !remaining;
    },
    // Добавление одной задачи в список путем создания представления для нее
    // и добавления ее элемента в `<ul>`.
    addOne: function( todo ) {
        var view = new app.TodoView({ model: todo });
        $('#todo-list').append( view.render().el );
    },
    // Одновременное добавление всех элементов в коллекцию Todos.
    addAll: function() {
        this.$('#todo-list').html('');
        app.Todos.each(this.addOne, this);
    },
    // Новое
    filterOne : function (todo) {
        todo.trigger('visible');
    },
    // Новое
    filterAll : function () {
        app.Todos.each(this.filterOne, this);
    },
    // Новое
    // Генерация атрибутов для новой задачи.
    newAttributes: function() {
        return {
            title: this.$input.val().trim(),
            order: app.Todos.nextOrder(),
            completed: false
        };
    },
    // Создание новой задачи и ее сохранение
    // в локальном хранилище при нажатии return.
    createOnEnter: function( event ) {
        if ( event.which !== ENTER_KEY || !this.$input.val().trim() ) {
            return;
        }
        app.Todos.create( this.newAttributes() );
        this.$input.val('');
    },
    // Новое
    // Удаление всех завершенных задач уничтожением их моделей.
    clearCompleted: function() {
        _.invoke(app.Todos.completed(), 'destroy');
        return false;
    },
    // Новое
    toggleAllComplete: function() {
        var completed = this.allCheckbox.checked;
        app.Todos.each(function (todo) {
            todo.save({
                'completed': completed
            });
        });
    }
});

