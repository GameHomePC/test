var app = app || {};

app.BookView = Backbone.View.extend({
    tagName: 'div',
    className: 'bookContainer',
    template: _.template( $('#bookTemplate').html() ),
    render: function() {
        console.log(this);
        this.$el.html( this.template( this.model.JSON() ) )
    }
});

var test = new app.BookView();