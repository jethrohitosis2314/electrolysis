define(function(require) {
	var PropertySet = require('AXON/PropertySet');
    var inherit = require('PHET_CORE/inherit');
    var Dimension2 = require('DOT/Dimension2');

	function MetalStripModel(option){
		PropertySet.call(this,_.extend({name: '', color: '', location: null, correctLiquid: null, attachToTerminal: ''}, option));
		this.size = new Dimension2(10,35);
	}

	return inherit(PropertySet, MetalStripModel);

});