// Copyright 2002-2015, University of Colorado Boulder
define(function(require) {
	'use strict';
	var PropertySet = require('AXON/PropertySet');
    var inherit = require('PHET_CORE/inherit');
    var Dimension2 = require('DOT/Dimension2');

	function MetalStripModel(option){
		PropertySet.call(this,_.extend({name: '', color: '', location: null, correctLiquid: null, attachToTerminal: ''}, option));
		this.type = 'MetalStripModel';
		this.size = new Dimension2(10,35);
	}

	return inherit(PropertySet, MetalStripModel);

});
