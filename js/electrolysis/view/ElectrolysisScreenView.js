// Copyright 2002-2015, University of Colorado Boulder

/**
 *
 * @author prateek
 */
define(function(require) {
    'use strict';

    // modules
    var inherit = require('PHET_CORE/inherit');
    var ScreenView = require('JOIST/ScreenView');
    var ResetAllButton = require('SCENERY_PHET/buttons/ResetAllButton');
    var Rectangle = require('SCENERY/nodes/Rectangle');
    var ElectrolysisLayoutBound = require('ELECTROLYSIS/electrolysis/view/ElectrolysisLayoutBound');
    var LinearGradient = require('SCENERY/util/LinearGradient');
    var ModelViewTransform2 = require('PHETCOMMON/view/ModelViewTransform2');
    var Vector2 = require('DOT/Vector2');
    var CircuitNode = require('ELECTROLYSIS/electrolysis/view/CircuitNode');
    var RackNode = require('ELECTROLYSIS/electrolysis/view/RackNode');
    var CallOutNode = require('ELECTROLYSIS/electrolysis/view/CallOutNode');

    /**
     * @param {ElectrolysisModel} electrolysisModel
     * @constructor
     */
    function ElectrolysisScreenView(electrolysisModel) {

        ScreenView.call(this);


        ScreenView.call(this, {
            layoutBounds: ElectrolysisLayoutBound
        });

        //Fit to the window and render the initial scene
        var width = this.layoutBounds.width;
        var height = this.layoutBounds.height;

        var environment = electrolysisModel.environment;

        var modelViewTransform = ModelViewTransform2.createOffsetScaleMapping(new Vector2(0, 0), 1);
        this.addChild(new CircuitNode(electrolysisModel.circuitModel, modelViewTransform, environment));
        this.addChild(new CallOutNode(electrolysisModel.callOutModel, modelViewTransform, environment));
        this.addChild(new RackNode(electrolysisModel.rack, modelViewTransform, environment));


        // Reset All button
        var resetAllButton = new ResetAllButton({
            listener: function() {
                electrolysisModel.reset();
            },
            right: this.layoutBounds.maxX - 10,
            bottom: this.layoutBounds.maxY - 10
        });

    }

    return inherit(ScreenView, ElectrolysisScreenView, {

        //TODO Called by the animation loop. Optional, so if your view has no animation, please delete this.
        step: function(dt) {
            //TODO Handle view animation here.
        }
    });
});
