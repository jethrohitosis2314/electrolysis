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
    var CircuitNode = require('ELECTROLYSIS/electrolysis/view/Electroplating/CircuitNode');
    var RackNode = require('ELECTROLYSIS/electrolysis/view/RackNode');

    function ElectroplatingScreenView(electroplatingModel) {
        ScreenView.call(this, {
            layoutBounds: ElectrolysisLayoutBound
        });

        var width = this.layoutBounds.width;
        var height = this.layoutBounds.height;

        var modelViewTransform = ModelViewTransform2.createOffsetScaleMapping(new Vector2(0, 0), 1);
        this.addChild(new CircuitNode(electroplatingModel.circuitModel, modelViewTransform));
        this.addChild(new RackNode(electroplatingModel.rackModel, modelViewTransform));

        var resetAllButton = new ResetAllButton({
            listener: function() {
                electroplatingModel.reset();
            },
            right: this.layoutBounds.maxX - 10,
            bottom: this.layoutBounds.maxY - 10
        });
    }

    return inherit(ScreenView, ElectroplatingScreenView, {
        step: function(dt) {
        }
    });
});
