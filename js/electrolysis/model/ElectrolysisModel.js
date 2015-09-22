// Copyright 2002-2015, University of Colorado Boulder

/**
 *
 * @author prateek
 */
define(function(require) {
    'use strict';

    // modules
    var inherit = require('PHET_CORE/inherit');
    var PropertySet = require('AXON/PropertySet');
    var CircuitModel = require('ELECTROLYSIS/electrolysis/model/CircuitModel');
    var RackModel = require('ELECTROLYSIS/electrolysis/model/RackModel');
    var CallOutModel = require('ELECTROLYSIS/electrolysis/model/CallOutModel');

    /**
     * @constructor
     */
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
    }

    return inherit(PropertySet, ElectrolysisModel, {

        //TODO Called by the animation loop. Optional, so if your model has no animation, please delete this.
        step: function(dt) {
            //TODO Handle model animation here.
        }
    });
});
