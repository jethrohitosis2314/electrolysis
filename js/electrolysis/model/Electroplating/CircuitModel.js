define(function(require) {
    var PropertySet = require('AXON/PropertySet');
    var inherit = require('PHET_CORE/inherit');
    var Dimension2 = require('DOT/Dimension2');
    var Vector2 = require('DOT/Vector2');

    function CircuitModel() {
        PropertySet.call(this, {
            open: true,
            electrolyte: null,
            bulbGlows: false,
            switchedOn: false,
            electrode1: null,
            electrode2: null
        });
        this.beakerLocation = new Vector2(178, 339);
        this.beakerSize = new Dimension2(120, 80);
        this.beakerColor = 'Aqua';

        var checkCurrentFlow = function() {
            this.bulbGlowsProperty.set(this.check() && this.electrolyte.conductor);
        }.bind(this);

        this.check = function() {
            return !this.open && this.electrolyte;
        }.bind(this);

        this.openProperty.link(function() {
            checkCurrentFlow();
        });

        this.electrolyteProperty.link(function() {
            checkCurrentFlow();
        });

        this.onReceiveDrop = function(liquid) {
            this.electrolyteProperty.set(liquid);
        }.bind(this);

        this.collidesWith = function(draggable) {
            var beakerLocation = new Vector2(-450, 300);
            var beakerSize = new Dimension2(150, 100);

            var positionDelta = function(position1, position2, deltaX, deltaY) {
                var within = function(value, lowerBound, upperBound) {
                    return lowerBound < value && value < upperBound;
                };
                return within(position1.x, position2.x, position2.x + deltaX) && within(position1.y, position2.y, position2.y + deltaY);
            };

            return positionDelta(draggable.location, beakerLocation, beakerSize.width, beakerSize.height);
        }.bind(this);
    }

    return inherit(PropertySet, CircuitModel);
});
