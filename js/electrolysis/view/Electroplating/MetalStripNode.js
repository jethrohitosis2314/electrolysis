// Copyright 2002-2015, University of Colorado Boulder
define(function (require) {
    'use strict';
    var Node = require('SCENERY/nodes/Node');
    var inherit = require('PHET_CORE/inherit');
    var Rectangle = require('SCENERY/nodes/Rectangle');
    var SimpleDragHandler = require('SCENERY/input/SimpleDragHandler');
    var PhetFont = require( 'SCENERY_PHET/PhetFont' );
    var Text = require( 'SCENERY/nodes/Text' );

    function MetalStripNode(model, modelViewTransform, environment){
        Node.call(this, {
            x: model.location.x,
            y: model.location.y
        });

        this.accepts = model.accepts;

        var name = new Node({x:-6, y: -2});
        this.addChild(name);
        name.addChild(new Text( model.name, { font: new PhetFont(9), fill: 'black' }));


        var rectangleNode = new Rectangle(
            0,
            0,
            model.size.width,
            model.size.height, 
            0, 0, {
            fill: model.color,
            lineWidth: 0
        });
        this.addChild(rectangleNode);

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

    return inherit(Node, MetalStripNode);
});
