define(function(require) {
    'use strict';

    // modules
    var inherit = require('PHET_CORE/inherit');
    var PropertySet = require('AXON/PropertySet');
    var CircuitModel = require('ELECTROLYSIS/electrolysis/model/CircuitModel');
    var RackModel = require('ELECTROLYSIS/electrolysis/model/RackModel');
    var CallOutModel = require('ELECTROLYSIS/electrolysis/model/CallOutModel');
    var LiquidModel = require('ELECTROLYSIS/electrolysis/model/LiquidModel');
    var Vector2 = require('DOT/Vector2');

    /**
     * @constructor
     */
    function ElectrolysisModel(environment) {
        PropertySet.call(this, {});

        var liquids = [
            new LiquidModel({name: "Water", color: 'cyan', conductor: false, location: new Vector2(60, 55)}),
            new LiquidModel({name: "Salt Water", color: '#ddd', conductor: true, location: new Vector2(100, 55)})
        ];

        this.circuitModel = new CircuitModel();
        this.rack = new RackModel(liquids);
        this.callOutModel = new CallOutModel();
        this.environment = environment;
        
        var callOut = function() {
            if (this.circuitModel.check()) {
                this.callOutModel.visibleProperty.set(true);
            } else {
                this.callOutModel.visibleProperty.set(false);
            }
        }.bind(this);

        this.circuitModel.beaker.electrolyteProperty.link(function(electrolyte) {
            if (!electrolyte) return;
            this.callOutModel.liquidNameProperty.set(electrolyte.name);
            this.callOutModel.conductorProperty.set(electrolyte.conductor);
            callOut();
        }.bind(this));

        this.circuitModel.switchedOnProperty.link(function(on) {
            callOut();
        }.bind(this));
    }

    return inherit(PropertySet, ElectrolysisModel, {

        //TODO Called by the animation loop. Optional, so if your model has no animation, please delete this.
        step: function(dt) {
            //TODO Handle model animation here.
        }
    });
});
