define(function(require) {
    var PropertySet = require('AXON/PropertySet');
    var inherit = require('PHET_CORE/inherit');
    var Dimension2 = require('DOT/Dimension2');
    var Vector2 = require('DOT/Vector2');

    function Beaker(options) {
        this.parent = options.parent;
        PropertySet.call(this, {
            electrolyte: null
        });

        this.electrolyteProperty.link(function() {
            this.parent.checkCurrentFlow();
        }.bind(this));

        this.onReceiveDrop = function(liquid) {
            this.electrolyteProperty.set(liquid);
        }.bind(this);
    }

    return inherit(PropertySet, Beaker);
});
