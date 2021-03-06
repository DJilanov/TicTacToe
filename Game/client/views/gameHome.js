var View = require('ampersand-view');
var templates = require('../templates');


module.exports = View.extend({
    template: templates.includes.gameHome,
    bindings: {
        'model.fullName': '[data-hook~=name]',
        'model.avatar': {
            type: 'attribute',
            hook: 'avatar',
            name: 'src'
        },
        'model.editUrl': {
            type: 'attribute',
            hook: 'action-edit',
            name: 'href'
        },
        'model.viewUrl': {
            type: 'attribute',
            hook: 'name',
            name: 'href'
        }
    },
    events: {
        'click [data-hook~=start-game]': 'startGame'
    },
    startGame: function () {
        debugger
        return false;
    }
});
