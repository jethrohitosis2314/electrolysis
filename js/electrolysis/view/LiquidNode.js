define(function(require) {

    var Node = require('SCENERY/nodes/Node');
    var inherit = require('PHET_CORE/inherit');
    var Image = require('SCENERY/nodes/Image');
    var SimpleDragHandler = require('SCENERY/input/SimpleDragHandler');
    var Shape = require('KITE/Shape');
    var Path = require('SCENERY/nodes/Path');

    var flaskImage = require('image!ELECTROLYSIS/flask.svg');

    function LiquidNode(model, modelViewTransform) {
        Node.call(this, {
            x: 0,
            y: 0
        });

        var fillShape = new Shape()
            .moveTo(modelViewTransform.modelToViewX(10), modelViewTransform.modelToViewY(20))
            .lineTo(modelViewTransform.modelToViewX(0), modelViewTransform.modelToViewY(37))
            .lineTo(modelViewTransform.modelToViewX(28), modelViewTransform.modelToViewY(37))
            .lineTo(modelViewTransform.modelToViewX(20), modelViewTransform.modelToViewY(20));
        var fillPath = new Path(fillShape, {
            top: 10,
            left: 0,
            fill: model.color,
            stroke: model.color,
            lineWidth: 0
        });
        this.addChild(fillPath);

        var image = new Image(flaskImage, {
            x: 0,
            y: 0
        });
        this.addChild(image);

        model.locationProperty.link(function(location) {
            this.translation = modelViewTransform.modelToViewPosition(location);
        }.bind(this));

        this.addInputListener(new SimpleDragHandler({
            allowTouchSnag: true,

            translate: function(args) {
                model.location = modelViewTransform.viewToModelPosition(args.position);
                this.translation = modelViewTransform.modelToViewPosition(location);
            }.bind(this),

            end: function() {
                ES.model.tryPourLiquid(model);
                model.reset();
            }.bind(this)
        }));
    }

    return inherit(Node, LiquidNode);
});
