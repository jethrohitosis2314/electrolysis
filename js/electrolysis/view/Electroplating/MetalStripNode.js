define(function (require) {

    var Node = require('SCENERY/nodes/Node');
    var inherit = require('PHET_CORE/inherit');
    var Rectangle = require('SCENERY/nodes/Rectangle');
    var SimpleDragHandler = require('SCENERY/input/SimpleDragHandler');

    function MetalStripNode(model, modelViewTransform, environment){
    	Node.call(this, {
            x: model.location.x,
            y: model.location.y
        });

        var rectangleNode = new Rectangle(
            0,
            0,
            10,
            28, 
            0, 0, {
            fill: model.color,
            lineWidth: 0
        });
        this.addChild(rectangleNode);

        model.locationProperty.link(function (location) {
            this.translation = modelViewTransform.modelToViewPosition(location);
        }.bind(this));

        this.addInputListener(new SimpleDragHandler({
            allowTouchSnag: true,

            translate: function (args) {
                model.location = modelViewTransform.viewToModelPosition(args.position);
                this.translation = modelViewTransform.modelToViewPosition(location);
            }.bind(this),

            end: function () {
                environment.onDrop({model: model, bounds: this.getGlobalBounds()});
                model.reset();
            }.bind(this)
        }));
    }

    return inherit(Node, MetalStripNode);
});