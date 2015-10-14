define(function(require) {
	var PropertySet = require('AXON/PropertySet');
    var inherit = require('PHET_CORE/inherit');

	function ElectrodeSlotModel(option){
		PropertySet.call(this,{
			electrode: null,
			color: '',
			terminal: ''
		});

		this.location = option.location;
		this.terminal = option.terminal;
		this.accepts = ['MetalStripModel', 'SpoonModel'];

		this.onReceiveDrop = function(metalStrip){
			if(this.terminal != metalStrip.attachToTerminal) return;
			this.electrodeProperty.set(metalStrip);
			this.colorProperty.set(metalStrip.color);
		}.bind(this);

	}

	return inherit(PropertySet, ElectrodeSlotModel);

});