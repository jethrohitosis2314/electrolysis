define(function(require) {
	var PropertySet = require('AXON/PropertySet');
    var inherit = require('PHET_CORE/inherit');

	function ArticleModel(option){
		PropertySet.call(this,{});
		this.color = option.color;

	}

	return inherit(PropertySet, ArticleModel);

});