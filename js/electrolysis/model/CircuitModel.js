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
        this.beakerLocation = new Vector2(151,300);
        this.liquidFillLocation = new Vector2(15, 30);
        this.liquidFillSize = new Dimension2(150, 100);

        this.checkCurrentFlow = function() {
            this.bulbGlowsProperty.set(this.check() && this.beaker.electrolyte.conductor);
        }.bind(this);

        this.check = function() {
            return !this.open && this.beaker.electrolyte;
        }.bind(this);

        var option = {
            location: new Vector2(151,300),
            liquidFillLocation: new Vector2(15, 30),
            liquidFillSize: new Dimension2(150, 100),
            parent: this
        }
        this.beaker = new Beaker(option);

        this.openProperty.link(function() {
            this.checkCurrentFlow();
        }.bind(this));

        this.beaker.electrolyteProperty.link(function() {
            this.checkCurrentFlow();
        }.bind(this));
    }

    return inherit(PropertySet, CircuitModel);
});
