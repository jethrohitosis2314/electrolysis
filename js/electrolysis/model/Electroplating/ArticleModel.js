// Copyright 2002-2015, University of Colorado Boulder
define(function(require) {
	'use strict';
	var PropertySet = require('AXON/PropertySet');
    var inherit = require('PHET_CORE/inherit');

	function ArticleModel(option){
		PropertySet.call(this,{});
		this.color = option.color;

	}

	return inherit(PropertySet, ArticleModel);

});
