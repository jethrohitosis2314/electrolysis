// Copyright 2002-2015, University of Colorado Boulder
define(function(require) {
    'use strict';

    var inherit = require('PHET_CORE/inherit');
    var ScreenView = require('JOIST/ScreenView');
    var ElectrolysisLayoutBound = require('ELECTROLYSIS/electrolysis/view/ElectrolysisLayoutBound');
    var ModelViewTransform2 = require('PHETCOMMON/view/ModelViewTransform2');
    var Vector2 = require('DOT/Vector2');
    var CircuitNode = require('ELECTROLYSIS/electrolysis/view/Electroplating/CircuitNode');
    var RackNode = require('ELECTROLYSIS/electrolysis/view/RackNode');

    function ElectroplatingScreenView(electroplatingModel) {
        ScreenView.call(this, {
            layoutBounds: ElectrolysisLayoutBound
        });

        var environment = electroplatingModel.environment;

        var modelViewTransform = ModelViewTransform2.createOffsetScaleMapping(new Vector2(0, 0), 1);
        this.addChild(new CircuitNode(electroplatingModel.circuitModel, modelViewTransform, environment));
        this.addChild(new RackNode(electroplatingModel.rackModel, modelViewTransform, environment));
    }

    return inherit(ScreenView, ElectroplatingScreenView, {
        step: function(dt) {
        }
    });
});
