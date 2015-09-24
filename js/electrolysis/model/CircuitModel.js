define(function(require) {
    var PropertySet = require('AXON/PropertySet');
    var inherit = require('PHET_CORE/inherit');
    var Dimension2 = require('DOT/Dimension2');
    var Vector2 = require('DOT/Vector2');
    var Beaker = require('ELECTROLYSIS/electrolysis/model/Beaker');

    function CircuitModel() {
        PropertySet.call(this, {
            open: true,
            bulbGlows: false,
            switchedOn: false
        });

        this.checkCurrentFlow = function() {
            this.bulbGlowsProperty.set(this.check() && this.beaker.electrolyte.conductor);
        }.bind(this);

        this.check = function() {
            return !this.open && this.beaker.electrolyte;
        }.bind(this);

        this.beaker = new Beaker({parent: this});

        this.openProperty.link(function() {
            this.checkCurrentFlow();
        }.bind(this));

        this.beaker.electrolyteProperty.link(function() {
            this.checkCurrentFlow();
        }.bind(this));
    }

    return inherit(PropertySet, CircuitModel);
});
