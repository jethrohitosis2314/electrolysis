define(function(require) {
    var PropertySet = require('AXON/PropertySet');
    var inherit = require('PHET_CORE/inherit');
    var Vector2 = require('DOT/Vector2');

    function CircuitModel(beaker) {
        PropertySet.call(this, {
            open: true,
            bulbGlows: false,
            switchedOn: false
        });

        this.beaker = beaker;
        this.checkCurrentFlow = function() {
            this.bulbGlowsProperty.set(this.check() && this.beaker.electrolyte.conductor);
        }.bind(this);

        this.check = function() {
            return !this.open && this.beaker.electrolyte;
        }.bind(this);

        this.openProperty.link(function() {
            this.checkCurrentFlow();
        }.bind(this));

        this.electrons = [
            {location : new Vector2(30,77), direction : 'LEFT'},
            {location : new Vector2(200,77), direction : 'LEFT'},
            {location : new Vector2(430,77), direction : 'LEFT'},
            {location : new Vector2(454,210), direction : 'UP'},
            {location : new Vector2(370,263), direction : 'RIGHT'},
            {location : new Vector2(40,263), direction : 'RIGHT'},
            {location : new Vector2(160,263), direction : 'RIGHT'},
            {location : new Vector2(-7,170), direction : 'DOWN'},
        ];
    }

    return inherit(PropertySet, CircuitModel);
});
