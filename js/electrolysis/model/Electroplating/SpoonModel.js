define(function(require) {
    var inherit = require('PHET_CORE/inherit');
    var PropertySet = require('AXON/PropertySet');
    var Dimension2 = require('DOT/Dimension2');

    function SpoonModel(options) {
        PropertySet.call(this, _.extend({name: '', color: '', conductor: false, location: null}, options));
        this.size = new Dimension2(100,100);
    }

    return inherit(PropertySet, SpoonModel);
});