define(function(require){

    var Node = require('SCENERY/nodes/Node');
    var inherit = require('PHET_CORE/inherit');
    var Image = require('SCENERY/nodes/Image');
    var LiquidNode = require('ELECTROLYSIS/electrolysis/view/LiquidNode');

    var rackImage = require('image!ELECTROLYSIS/rack.svg');

    function RackNode(model, modelViewTransform, environment) {
        Node.call(this, {x: model.location.x, y: model.location.y});

        var image = new Image(rackImage, {x: 0, y: 0});
        this.addChild(image);

        model.liquids.forEach(function(liquid) {
            var liquidNode = new LiquidNode(liquid, modelViewTransform, environment);
            this.addChild(liquidNode);
        }.bind(this));
    }

    return inherit(Node, RackNode);
});
