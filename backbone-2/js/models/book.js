var app = app || {};

app.Book = Backbone.Model.extend({
    defaults: {
        coverImage: 'img/poster.jpg',
        title: 'No title',
        author: 'Unknown', // Unknown - неизвестный
        releaseDate: 'Unknown',
        keywords: 'None'
    }
});