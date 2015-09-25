define(function(require) {

    var Node = require('SCENERY/nodes/Node');
    var inherit = require('PHET_CORE/inherit');
    var Image = require('SCENERY/nodes/Image');
    var Rectangle = require('SCENERY/nodes/Rectangle');
    var Circle = require('SCENERY/nodes/Circle');
    var DownUpListener = require('SCENERY/input/DownUpListener');
    var RadialGradient = require('SCENERY/util/RadialGradient');
    var BeakerModel = require('ELECTROLYSIS/electrolysis/model/Beaker');
    var BeakerNode = require('ELECTROLYSIS/electrolysis/view/BeakerNode');
    var ElectrodeSlotNode = require('ELECTROLYSIS/electrolysis/view/Electroplating/ElectrodeSlotNode');

    var circuitImage = require('image!ELECTROLYSIS/Electroplating_circuitv2.png');

    function CircuitNode(model, modelViewTransform, environment) {
        Node.call(this, {
            x: 0,
            y: 5
        });

        var beakerNode = new BeakerNode(model.beaker, modelViewTransform, environment);
        this.addChild(beakerNode);

        var anodeSlotNode = new ElectrodeSlotNode(model.anodeSlot, environment);
        var cathodeSlotNode = new ElectrodeSlotNode(model.cathodeSlot, environment);
        this.addChild(anodeSlotNode);
        this.addChild(cathodeSlotNode);

        this.liquidFill = new Rectangle(
            model.beakerLocation.x,
            model.beakerLocation.y,
            model.beakerSize.width,
            model.beakerSize.height,
             0, 0, {
            fill: '#000',
            lineWidth: 0
        });

        var key = new Circle(12, {
            x: 456,
            y: 177,
            fill: '#000',
            cursor: 'pointer',
            stroke: '#fff',
            lineWidth: 15
        });

        var image = new Image(circuitImage, {
            x: 0,
            y: 0
        });

        var glow = new Circle(40, {
            x: 100,
            y: 27,
            visible: false
        });


        glow.fill = new RadialGradient(0, 0, 0, 0, 0, 40)
            .addColorStop(0, 'rgba( 255, 255, 0, 1 )')
            .addColorStop(0.9, 'rgba( 255, 255, 0, 0 )');

        this.addChild(glow);
        this.addChild(key);
        this.addChild(image);

        model.openProperty.link(function(open) {
            key.fill = open ? '#fff' : '#000';
        });

        key.addInputListener(new DownUpListener({
            up: function() {
                model.openProperty.set(!model.open);
                if (model.switchedOn) {
                    model.switchedOnProperty.set(false);
                } else {
                    model.switchedOnProperty.set(true);
                }
            }
        }));

        environment.addDroppable(this.liquidFill);
    }

    return inherit(Node, CircuitNode);
});
