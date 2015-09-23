define(function(require) {

    var Node = require('SCENERY/nodes/Node');
    var inherit = require('PHET_CORE/inherit');
    var Image = require('SCENERY/nodes/Image');
    var Rectangle = require('SCENERY/nodes/Rectangle');
    var Circle = require('SCENERY/nodes/Circle');
    var DownUpListener = require('SCENERY/input/DownUpListener');
    var RadialGradient = require('SCENERY/util/RadialGradient');

    var circuitImage = require('image!ELECTROLYSIS/electroplating_circuit.png');

    function CircuitNode(model, modelViewTransform) {
        Node.call(this, {
            x: 50,
            y: 70
        });

        var liquidFill = new Rectangle(
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
            stroke: 'red',
            lineWidth: 15
        });

        var image = new Image(circuitImage, {
            x: 0,
            y: 0
        });

        var glow = new Circle(40, {
            x: 100,
            y: 27,
            visible: true
        });

        glow.fill = new RadialGradient(0, 0, 0, 0, 0, 40)
            .addColorStop(0, 'rgba( 255, 255, 0, 1 )')
            .addColorStop(0.9, 'rgba( 255, 255, 0, 0 )');

        this.addChild(glow);
        this.addChild(liquidFill);
        this.addChild(key);
        this.addChild(image);

        model.electrolyteProperty.link(function(liquid) {
            liquidFill.fill = liquid ? liquid.color : 'red';
        }.bind(this));

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
    }

    return inherit(Node, CircuitNode);
});
