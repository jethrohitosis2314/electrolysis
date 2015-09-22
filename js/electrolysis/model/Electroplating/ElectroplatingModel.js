define(function(require) {
    'use strict';

    var inherit = require('PHET_CORE/inherit');
    var PropertySet = require('AXON/PropertySet');
    var CircuitModel = require('ELECTROLYSIS/electrolysis/model/CircuitModel');
    var RackModel = require('ELECTROLYSIS/electrolysis/model/RackModel');
    var CallOutModel = require('ELECTROLYSIS/electrolysis/model/CallOutModel');

    function ElectrolysisModel() {
        PropertySet.call(this, {});

        this.circuitModel = new CircuitModel();
        this.rack = new RackModel();
        this.callOutModel = new CallOutModel();

        this.tryPourLiquid = function(model) {
            if (this.circuitModel.collidesWith(model)) {
                this.circuitModel.onReceiveDrop(model);
            }
        }.bind(this);

        var callOut = function() {
            this.callOutModel.visibleProperty.set(this.circuitModel.check());
        }.bind(this);

        this.circuitModel.electrolyteProperty.link(function(electrolyte) {
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
        step: function(dt) {}
    });
});
