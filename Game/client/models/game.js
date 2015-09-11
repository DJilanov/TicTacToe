var AmpersandModel = require('ampersand-model');


module.exports = AmpersandModel.extend({
    type: 'game',
    props: {
        id: ['string'],
        firstPlayer: ['string'],
        secondPlayer: ['string'],
        turns: ['array']
    },
    derived: {
        firstPlayerName: {
            deps: ['firstPlayer'],
            cache: true,
            fn: function () {
                return this.firstPlayer;
            }
        },
        secondPlayerName: {
            deps: ['secondPlayer'],
            cache: true,
            fn: function () {
                return this.secondPlayer;
            }
        }
    }
});
