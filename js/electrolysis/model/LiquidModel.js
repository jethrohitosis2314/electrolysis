define(function(require) {
    var inherit = require('PHET_CORE/inherit');
    var PropertySet = require('AXON/PropertySet');

    function LiquidModel(options) {
        PropertySet.call(this, _.extend({name: '', color: '', conductor: false, location: null}, options));
    }

    return inherit(PropertySet, LiquidModel);
});
