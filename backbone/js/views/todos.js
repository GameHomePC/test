var app = app || {};

app.TodoView = Backbone.View.extend({
    tagName: 'li',
    template: _.template( $('#item-template').html() ),

    events: {
        'dbclick label': 'edit',
        'keypress .edit': 'updateOnEnter',
        'blur .edit': 'close',

        'click .toggle': 'togglecompleted',
        'click .destroy': 'clear'
    },

    initialize: function() {
        this.listenTo(this.model, 'change', this.render);
        this.listenTo(this.model, 'destroy', this.remove);
        this.listenTo(this.model, 'visible', this.toggleVisible);
    },
    // Повторно отображает заголовки задачи.
    render: function() {
        this.$el.html( this.template( this.model.toJSON() ) );
        this.$input = this.$('.edit');
        return this;
    },
    toggleVisible: function() {
        this.$el.toggleClass('hidden', this.isHidden());
    },
    // определяет, должен ли элемент быть скрытым
    isHidden: function() {
        var isCompleted = this.model.get('completed');
        return (
            (!isCompleted && app.TodoFilter === 'completed') || (isCompleted && app.TodoFilter === 'active')
        );
    },
    togglecompleted: function() {
        this.model.toggle();
    },
    // Переключение этого представления в режим редактирования,
    // отображение поля ввода.
    edit: function() {
        this.$el.addClass('editing');
        this.$input.focus();
    },
    // Закрытие режима редактирования, сохранение изменений в задаче.
    close: function() {
        var value = this.$input.val().trim();
        if ( value ) {
            this.model.save({ title: value });
        } else {
            this.clear();
        }
        this.$el.removeClass('editing');
    },
    // Если вы нажмете `enter`, то редактирование элемента завершится.
    updateOnEnter: function( e ) {
        if ( e.which === ENTER_KEY ) {
            this.close();
        }
    },
    clear: function() {
        this.model.destroy();
    }
});