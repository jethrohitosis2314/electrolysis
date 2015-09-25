define(function(require) {
	var PropertySet = require('AXON/PropertySet');
    var inherit = require('PHET_CORE/inherit');

	function MetalStripModel(option){
		PropertySet.call(this,_.extend({name: '', color: '', location: null, correctLiquid: null}, option));
	}

	return inherit(PropertySet, MetalStripModel);

});