define(function(require) {
	var PropertySet = require('AXON/PropertySet');
    var inherit = require('PHET_CORE/inherit');

	function ElectrodeSlotModel(option){
		PropertySet.call(this,{
			electrode: null,
			color: '',
			canHandle: ''
		});

		this.location = option.location;
		this.canHandle = option.canHandle;
		this.accepts = ['MetalStripModel', 'SpoonModel'];

		this.onReceiveDrop = function(metalStrip){
			this.electrodeProperty.set(metalStrip);
			this.colorProperty.set(metalStrip.color);
		}.bind(this);

	}

	return inherit(PropertySet, ElectrodeSlotModel);

});