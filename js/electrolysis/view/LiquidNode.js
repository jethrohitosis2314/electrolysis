define(function(require){

    var Node = require('SCENERY/nodes/Node');
    var inherit = require('PHET_CORE/inherit');
    var Image = require('SCENERY/nodes/Image');

    var flaskImage = require('image!ELECTROLYSIS/flask.svg');

    function LiquidNode(liquidModel, modelViewTransform) {
        Node.call(this, {x: 50, y: 100});

        var image = new Image(flaskImage, {x: 0, y: 0});
        this.addChild(image);
    }

    return inherit(Node, LiquidNode);
});
