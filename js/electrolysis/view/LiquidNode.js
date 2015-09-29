define(function (require) {

    var Node = require('SCENERY/nodes/Node');
    var inherit = require('PHET_CORE/inherit');
    var Image = require('SCENERY/nodes/Image');
    var SimpleDragHandler = require('SCENERY/input/SimpleDragHandler');
    var Shape = require('KITE/Shape');
    var Path = require('SCENERY/nodes/Path');
    var PhetFont = require( 'SCENERY_PHET/PhetFont' );
    var Text = require( 'SCENERY/nodes/Text' );

    var flaskImage = require('image!ELECTROLYSIS/flask.svg');

    function LiquidNode(model, modelViewTransform, environment) {
        Node.call(this, {
            x: 0,
            y: 0
        });

        var fillShape = new Shape()
                .moveTo(10, 20)
                .lineTo(0, 37)
                .lineTo(28, 37)
                .lineTo(20, 20);
        var fillPath = new Path(fillShape, {
            top: 10,
            left: 0,
            fill: model.color,
            stroke: model.color,
            lineWidth: 0
        });
        this.addChild(fillPath);

        var image = new Image(flaskImage, {
            x: 0,
            y: 0
        });
        this.addChild(image);

        var name = new Node({x:-10, y: -2});
        this.addChild(name);
        name.addChild(new Text( model.name, { font: new PhetFont(9), fill: 'black' }));

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

    return inherit(Node, LiquidNode);
});
