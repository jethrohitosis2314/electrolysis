define(function(require) {
    var inherit = require('PHET_CORE/inherit');
    var PropertySet = require('AXON/PropertySet');

    function LiquidModel(name, color, conductor) {
        PropertySet.call(this, {name: name, color: color, conductor: conductor});
    }

    return inherit(PropertySet, LiquidModel);
});
