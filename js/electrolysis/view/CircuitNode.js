define(function(require){

    var Node = require('SCENERY/nodes/Node');
    var inherit = require('PHET_CORE/inherit');
    var Image = require('SCENERY/nodes/Image');

    var circuitImage = require('image!ELECTROLYSIS/circuit.svg');

    function CircuitNode(circuitModel, modelViewTransform) {
        Node.call(this, {x: 50, y: 100});

        var image = new Image(circuitImage, {x: 0, y: 0});
        this.addChild(image);
    }

    return inherit(Node, CircuitNode);
});
