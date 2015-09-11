var app = require('ampersand-app');
var Router = require('ampersand-router');
var HomePage = require('./pages/home');
var game = require('./pages/game');
var InfoPage = require('./pages/info');


module.exports = Router.extend({
    routes: {
        '': 'home',
        'game': 'game',
        'info': 'info',
        '(*path)': 'catchAll'
    },

    // ------- ROUTE HANDLERS ---------
    home: function () {
        app.trigger('page', new HomePage({
            model: app.me
        }));
    },

    game: function () {
        app.trigger('page', new game({
            model: app.me
            // collection: app.people
        }));
    },

    info: function () {
        app.trigger('page', new InfoPage({
            model: app.me
        }));
    },

    catchAll: function () {
        this.redirectTo('');
    }
});
