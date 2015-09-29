define(function(require) {
    'use strict';

    var inherit = require('PHET_CORE/inherit');
    var PropertySet = require('AXON/PropertySet');
    var CircuitModel = require('ELECTROLYSIS/electrolysis/model/Electroplating/CircuitModel');
    var MetalStripModel = require('ELECTROLYSIS/electrolysis/model/Electroplating/MetalStripModel');
    var SpoonModel = require('ELECTROLYSIS/electrolysis/model/Electroplating/SpoonModel');
    var LiquidModel = require('ELECTROLYSIS/electrolysis/model/LiquidModel');
    var Vector2 = require('DOT/Vector2');
    var RackModel = require('ELECTROLYSIS/electrolysis/model/RackModel');

    function ElectroplatingModel(environment) {
        PropertySet.call(this, {});

        var copperSulhate = new LiquidModel({name: "Copper Sulhate", color: 'blue', conductor: true, location: new Vector2(70, 55)});
        var silverNitrate = new LiquidModel({name: "Silver Nitrate", color: 'steelblue', conductor: true, location: new Vector2(160, 55)});
        var goldCynide = new LiquidModel({name: "Gold Cynide", color: 'gold', conductor: true, location: new Vector2(30, 143)});
        var liquids = [
            copperSulhate,
            silverNitrate,
            goldCynide
        ];
        var metalStrips = [
            new MetalStripModel({
                name: 'Copper',            
                color: '#B87333', 
                liquid: silverNitrate, 
                location: new Vector2(100, 135)
            }),
             new MetalStripModel({
                name: 'Silver',
                color: 'silver', 
                liquid: copperSulhate,
                location: new Vector2(160, 135)
            }),
             new MetalStripModel({
                name: 'Gold',
                color: 'goldenrod',
                liquid: goldCynide,
                location: new Vector2(70, 224)
             })
        ];

        var spoonModel = new SpoonModel({name: 'Spoon', color: 'grey', conductor: false, location: new Vector2(120, 200)})

        var article = []
        this.rackModel = new RackModel(liquids, metalStrips, spoonModel);
        this.circuitModel = new CircuitModel();
        this.environment = environment;
    }

    return inherit(PropertySet, ElectroplatingModel, {
        step: function(dt) {}
    });
});
