define(function(require) {
    var PropertySet = require('AXON/PropertySet');
    var inherit = require('PHET_CORE/inherit');
    var Dimension2 = require('DOT/Dimension2');
    var Vector2 = require('DOT/Vector2');

    function Beaker(options) {
        PropertySet.call(this, {
            electrolyte: null
        });
        this.location = options.location;
        this.liquidFillLocation = options.liquidFillLocation;
        this.liquidFillSize = options.liquidFillSize;
        this.accepts = ['LiquidModel'];
        this.type = 'Beaker';

        this.onReceiveDrop = function(liquid) {
            this.electrolyteProperty.set(liquid);
        }.bind(this);

        this.setParent = function(parent) {
            this.parent = parent;
        }.bind(this);
    }

    return inherit(PropertySet, Beaker);
});
