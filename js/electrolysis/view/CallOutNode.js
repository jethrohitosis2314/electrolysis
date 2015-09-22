define(function(require) {

    var Node = require('SCENERY/nodes/Node');
    var inherit = require('PHET_CORE/inherit');
    var Rectangle = require('SCENERY/nodes/Rectangle');
    var PhetFont = require('SCENERY_PHET/PhetFont');
    var Text = require('SCENERY/nodes/Text');

    function CallOutNode(model, modelViewTransform) {
        Node.call(this, {
            x: model.location.x,
            y: model.location.y
        });

        this.addChild(new Rectangle(0, 0, model.size.width, model.size.height, model.arcRadius, model.arcRadius, {
            fill: model.fillColor,
            lineWidth: model.lineWidth,
            stroke: model.stroke,
            visible: model.visible
        }));

        this.addChild(new Text(model.text, {
            font: new PhetFont(model.fontSize),
            fill: model.fontColor,
            x: 10,
            y: model.size.height - 23
        }));
    }

    return inherit(Node, CallOutNode);
});
