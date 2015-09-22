define(function(require) {
    var inherit = require('PHET_CORE/inherit');
    var PropertySet = require('AXON/PropertySet');
    var Dimension2 = require('DOT/Dimension2');
    var Vector2 = require('DOT/Vector2');
    var LiquidModel = require('ELECTROLYSIS/electrolysis/model/LiquidModel');

    function RackModel() {
        PropertySet.call(this, {});
        this.size = new Dimension2(300, 500);
        this.location = new Vector2(700, 100);

        this.liquids = [
            new LiquidModel({name: "Water", color: 'cyan', conductor: false, location: new Vector2(60, 55)}),
            new LiquidModel({name: "Salt Water", color: '#ddd', conductor: true, location: new Vector2(100, 55)})
        ];
    }

    return inherit(PropertySet, RackModel);
});
