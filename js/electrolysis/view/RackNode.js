define(function(require){

    var Node = require('SCENERY/nodes/Node');
    var inherit = require('PHET_CORE/inherit');
    var Image = require('SCENERY/nodes/Image');

    var rackImage = require('image!ELECTROLYSIS/rack.svg');

    function RackNode(model, modelViewTransform) {
        Node.call(this, {x: model.location.x, y: model.location.y});

        var image = new Image(rackImage, {x: 0, y: 0});
        this.addChild(image);
    }

    return inherit(Node, RackNode);
});
