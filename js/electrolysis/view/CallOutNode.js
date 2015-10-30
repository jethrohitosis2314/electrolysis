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

        var textContainer = new Rectangle(0, 0, model.size.width, model.size.height, model.arcRadius, model.arcRadius, {
            fill: model.fillColor,
            lineWidth: model.lineWidth,
            stroke: model.stroke,
            visible: true
        });

        model.visibleProperty.link(function(visible) {
            this.visible = visible;
        }.bind(this));

        this.addChild(textContainer);

        var text = null;

        this.updateText = function() {
            if (text) {
                this.removeChild(text);
            }

            text = new Text(model.liquidName + " is" + (!model.conductor ? " not" : "") + " a conductor", {
                font: new PhetFont(model.fontSize),
                fill: model.fontColor,
                x: 10,
                y: model.size.height - 23
            });

            this.addChild(text);
        }.bind(this);

        model.conductorProperty.link(function() {
            this.updateText();
        }.bind(this));

        model.liquidNameProperty.link(function() {
            this.updateText();
        }.bind(this));
    }

    return inherit(Node, CallOutNode);
});
