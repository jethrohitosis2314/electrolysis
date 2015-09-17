define(function(require){

    var Node = require('SCENERY/nodes/Node');
    var inherit = require('PHET_CORE/inherit');
    var Image = require('SCENERY/nodes/Image');
    var Rectangle = require('SCENERY/nodes/Rectangle');

    var circuitImage = require('image!ELECTROLYSIS/circuit.svg');

    function CircuitNode(model, modelViewTransform) {
        Node.call(this, {x: 50, y: 100});

        var rectangleNode = new Rectangle(200,300,150,100,0,0,{fill: '#000', lineWidth: 0});
        this.addChild(rectangleNode);
        model.electrolyteProperty.link(function(liquid) {
            rectangleNode.fill = liquid ? liquid.color : 'red';
        }.bind(this));

        var image = new Image(circuitImage, {x: 0, y: 0});
        this.addChild(image);
    }

    return inherit(Node, CircuitNode);
});
