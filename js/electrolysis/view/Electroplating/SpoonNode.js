define(function (require) {

    var Node = require('SCENERY/nodes/Node');
    var inherit = require('PHET_CORE/inherit');
    var Image = require('SCENERY/nodes/Image');
    var SimpleDragHandler = require('SCENERY/input/SimpleDragHandler');
    var Shape = require('KITE/Shape');
    var Path = require('SCENERY/nodes/Path');
    
    var PhetFont = require( 'SCENERY_PHET/PhetFont' );
    var Text = require( 'SCENERY/nodes/Text' );

    var flaskImage = require('image!ELECTROLYSIS/spoon.svg');

    function SpoonNode(model, modelViewTransform, environment) {
        Node.call(this, {
            x: 0,
            y: 0
        });

        var x1 = 7; var x2 = 16; var y1 = 1; var y2 = 10; var x3 = 8; var y3 = 20; var x4 = 15;
        var x5 = 13; var x6 = 9; var y4 = 30; var y5 = 37; var x7 = 10; var x8 = 13; var y6 = 42;
        var x9 = 21; var x10 = 2; var y7 = 49; var y8 = 57; var x11 = 15;

        var fillShape = new Shape()
                .moveTo(x1, y1).lineTo(x2, y1).lineTo(x2, y2).lineTo(x4, y3).lineTo(x5, y4).lineTo(x8, y5)
                .lineTo(x9, y6).lineTo(x9, y7).lineTo(x8, y8).lineTo(x7, y8).lineTo(x10, y7).lineTo(x10, y6)
                .lineTo(x7, y5).lineTo(x6, y4).lineTo(x3, y3).lineTo(x1, y2).lineTo(x1, y1);
                
        var fillPath = new Path(fillShape, {
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

        var name = new Node({x:-6, y: -2});
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

    return inherit(Node, SpoonNode);
});
