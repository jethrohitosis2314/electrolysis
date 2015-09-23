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
            switchedOn: false
        });

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

        this.collidesWith = function(bounds) {
            console.log(bounds);
            var beakerLocation = new Vector2(300, 430);
            var beakerSize = new Dimension2(150, 100);

            var positionDelta = function(position1, position2, deltaX, deltaY) {
                var within = function(value, lowerBound, upperBound) {
                    return lowerBound < value && value < upperBound;
                };
                return within(position1.x, position2.x, position2.x + deltaX) && within(position1.y, position2.y, position2.y + deltaY);
            };

            return positionDelta(new Vector2(bounds.minX, bounds.minY), beakerLocation, beakerSize.width, beakerSize.height);
        }.bind(this);
    }

    return inherit(PropertySet, CircuitModel);
});
