define(function(require) {
    var inherit = require('PHET_CORE/inherit');
    var PropertySet = require('AXON/PropertySet');
    var Dimension2 = require('DOT/Dimension2');
    var Vector2 = require('DOT/Vector2');

    function RackModel(liquids, metalStrips, spoon) {
        PropertySet.call(this, {});
        this.size = new Dimension2(300, 500);
        this.location = new Vector2(700, 100);
        this.metalStrips = metalStrips;
        this.liquids = liquids;
        this.spoon = spoon;
        this.type = 'RackModel';
    }

    return inherit(PropertySet, RackModel);
});
