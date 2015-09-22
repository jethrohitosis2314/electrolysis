define(function(require) {
    'use strict';

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

    function ElectrolysisScreenView(electrolysisModel) {
        ScreenView.call(this);
        ScreenView.call(this, {
            layoutBounds: ElectrolysisLayoutBound
        });

        var width = this.layoutBounds.width;
        var height = this.layoutBounds.height;

        var modelViewTransform = ModelViewTransform2.createOffsetScaleMapping(new Vector2(0, 0), 1);
        this.addChild(new CircuitNode(electrolysisModel.circuitModel, modelViewTransform));
        this.addChild(new CallOutNode(electrolysisModel.callOutModel, modelViewTransform));
        this.addChild(new RackNode(electrolysisModel.rack, modelViewTransform));

        var resetAllButton = new ResetAllButton({
            listener: function() {
                electrolysisModel.reset();
            },
            right: this.layoutBounds.maxX - 10,
            bottom: this.layoutBounds.maxY - 10
        });
    }

    return inherit(ScreenView, ElectrolysisScreenView, {
        step: function(dt) {
        }
    });
});
