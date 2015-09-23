define(function(require) {
    'use strict';

    var inherit = require('PHET_CORE/inherit');
    var PropertySet = require('AXON/PropertySet');
    var CircuitModel = require('ELECTROLYSIS/electrolysis/model/Electroplating/CircuitModel');
    var LiquidModel = require('ELECTROLYSIS/electrolysis/model/LiquidModel');
    var Vector2 = require('DOT/Vector2');
    var RackModel = require('ELECTROLYSIS/electrolysis/model/RackModel');

    function ElectroplatingModel() {
        PropertySet.call(this, {});
        var liquids = [
            new LiquidModel({name: "Water", color: 'cyan', conductor: false, location: new Vector2(60, 55)}),
            new LiquidModel({name: "Salt Water", color: '#ddd', conductor: true, location: new Vector2(100, 55)})
        ];
        this.rackModel = new RackModel(liquids);
        this.circuitModel = new CircuitModel();
    }

    return inherit(PropertySet, ElectroplatingModel, {
        step: function(dt) {}
    });
});
