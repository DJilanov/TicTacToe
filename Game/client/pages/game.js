var PageView = require('./base');
var templates = require('../templates');


module.exports = PageView.extend({
    pageTitle: 'Game home',
    template: templates.pages.game,
    events: {
        'click [data-hook~=shuffle]': 'shuffle'
    },
    render: function () {
        this.renderWithTemplate();
    },
    shuffle: function () {
        this.collection.comparator = function () {
            return !Math.round(Math.random());
        };
        this.collection.sort();
        delete this.collection.comparator;
        return false;
    },
});
