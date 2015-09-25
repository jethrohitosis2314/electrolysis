define(function(require) {
	var PropertySet = require('AXON/PropertySet');
    var inherit = require('PHET_CORE/inherit');

	function ElectrodeSlotModel(option){
		PropertySet.call(this,{
			electrode: null
		});

		this.location = option.location;
		this.accepts = ['MetalStripModel'];

		this.onReceiveDrop = function(metalStrip){
			this.electrodeProperty.set(metalStrip);
		}.bind(this);

	}

	return inherit(PropertySet, ElectrodeSlotModel);

});