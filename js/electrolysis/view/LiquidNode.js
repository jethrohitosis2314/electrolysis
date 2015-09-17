define(function (require) {

    var Node = require('SCENERY/nodes/Node');
    var inherit = require('PHET_CORE/inherit');
    var Image = require('SCENERY/nodes/Image');
    var SimpleDragHandler = require('SCENERY/input/SimpleDragHandler');

    var flaskImage = require('image!ELECTROLYSIS/flask.svg');

    function LiquidNode(model, modelViewTransform) {
        Node.call(this, {x: 0, y: 0});

        var image = new Image(flaskImage, {x: 0, y: 0});
        this.addChild(image);

        model.locationProperty.link(function (location) {
            this.translation = modelViewTransform.modelToViewPosition(location);
        }.bind(this));

        this.addInputListener(new SimpleDragHandler({
            allowTouchSnag: true,

            translate: function(args) {
                model.location = modelViewTransform.viewToModelPosition(args.position);
                this.translation = modelViewTransform.modelToViewPosition(location);
            }.bind(this),

            end: function() {
                model.reset();
            }.bind(this)
        }));
    }

    return inherit(Node, LiquidNode);
});
