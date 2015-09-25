define(function(require) {
    'use strict';

    var inherit = require('PHET_CORE/inherit');
    var PropertySet = require('AXON/PropertySet');
    var CircuitModel = require('ELECTROLYSIS/electrolysis/model/Electroplating/CircuitModel');
    var MetalStripModel = require('ELECTROLYSIS/electrolysis/model/Electroplating/MetalStripModel');
    var LiquidModel = require('ELECTROLYSIS/electrolysis/model/LiquidModel');
    var Vector2 = require('DOT/Vector2');
    var RackModel = require('ELECTROLYSIS/electrolysis/model/RackModel');

    function ElectroplatingModel(environment) {
        PropertySet.call(this, {});

        var water = new LiquidModel({name: "Water", color: 'cyan', conductor: false, location: new Vector2(60, 55)});
        var saltWater = new LiquidModel({name: "Salt Water", color: '#ddd', conductor: true, location: new Vector2(100, 55)});
        var liquids = [
            water,
            saltWater
        ];
        var metalStrips = [
            new MetalStripModel({
                name: 'copper',            
                color: 'red', 
                liquid: [saltWater], 
                location: new Vector2(70, 143)
            }),
             new MetalStripModel({
                name: 'zinc',
                color: 'blue', 
                liquid: [water],
                location: new Vector2(30, 143)
            })
        ];
        var article = []
        this.rackModel = new RackModel(liquids, metalStrips);
        this.circuitModel = new CircuitModel();
        this.environment = environment;
    }

    return inherit(PropertySet, ElectroplatingModel, {
        step: function(dt) {}
    });
});
