define(function(require) {

    var Node = require('SCENERY/nodes/Node');
    var inherit = require('PHET_CORE/inherit');
    var Circle = require('SCENERY/nodes/Circle');

    function ElectrodeSlotNode(model){
    	Node.call(this, {
            x: model.location.x,
            y: model.location.y
        });

        var key = new Circle(8, {
            x: 464,
            y: 177,
            fill: 'red',
            cursor: 'pointer',
            stroke: '#fff',
            lineWidth: 9
        });

        this.addChild(key);
    }

    return inherit(Node, ElectrodeSlotNode);
}