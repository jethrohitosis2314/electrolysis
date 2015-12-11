// Copyright 2002-2015, University of Colorado Boulder
define(function(require) {
    'use strict';
    var Node = require('SCENERY/nodes/Node');
    var inherit = require('PHET_CORE/inherit');
    var Circle = require('SCENERY/nodes/Circle');
    var Rectangle = require('SCENERY/nodes/Rectangle');
    var Vector2 = require('DOT/Vector2');
    var spoonImage = require('image!ELECTROLYSIS/spoon.svg');
    var Shape = require('KITE/Shape');
    var Path = require('SCENERY/nodes/Path');
    var Image = require('SCENERY/nodes/Image');

    function ElectrodeSlotNode(model, environment){
        Node.call(this, {
            x: model.location.x,
            y: model.location.y,
            visible: true
        });


        var key = new Circle(25, {
            x: 0,
            y: 0,
            fill: '',
            cursor: 'pointer',
            stroke: ''
        });

        this.addChild(key);

        var rectangle = new Rectangle(-4,7,10,65,0,0,{
            fill: '#fff',
            lineWidth: 0
        });

        var x0 = -3;

        var x1 = x0; var x2 = x0+9; var y1 = 1; var y2 = 10; var x3 = x0+1; var y3 = 20; var x4 = x0+9;
        var x5 = x0+6; var x6 = x0+2; var y4 = 30; var y5 = 37; var x7 = x0+3; var x8 = x0+6; var y6 = 42;
        var x9 = x0+14; var x10 = x0-5; var y7 = 49; var y8 = 57;

        var fillShape = new Shape()
                .moveTo(x1, y1).lineTo(x2, y1).lineTo(x2, y2).lineTo(x4, y3).lineTo(x5, y4).lineTo(x8, y5)
                .lineTo(x9, y6).lineTo(x9, y7).lineTo(x8, y8).lineTo(x7, y8).lineTo(x10, y7).lineTo(x10, y6)
                .lineTo(x7, y5).lineTo(x6, y4).lineTo(x3, y3).lineTo(x1, y2).lineTo(x1, y1);
                
        var fillPath = new Path(fillShape, {
            fill: '',
            stroke: '',
            lineWidth: 0
        });
        this.addChild(fillPath);

        var image = new Image(spoonImage, {
            x: -10,
            y: 0,
            visible: false
        });
        this.addChild(image);

        model.colorProperty.link(function(color) {
            fillPath.fill = color;
            rectangle.fill = color;
        }.bind(this));

        var toggleSpoon = function(show) {
            image.visible = show;
            fillPath.visible = show;
        };

        this.displayElectrode = function(){
            toggleSpoon(false);
            rectangle.visible = false;
            if(model.electrode) {
                if(model.electrode.type === 'SpoonModel') {
                    toggleSpoon(true);
                } else {
                    rectangle.visible = true;
                }
            }
        };
        this.addChild(rectangle);

        model.electrodeProperty.link(function(electrode){
            this.displayElectrode();
        }.bind(this));

        this.onReceiveDrop = function(metalStrip){
            model.onReceiveDrop(metalStrip);
        }.bind(this);


        this.collidesWith = function(childBounds) {
            var within = function(position, bounds) {
                var inRange = function(value, lowerBound, upperBound) {
                    return lowerBound < value && value < upperBound;
                };
                return inRange(position.x, bounds.minX, bounds.maxX) && inRange(position.y, bounds.minY, bounds.maxY);
            };

            var bounds = this.getGlobalBounds();
            return within(new Vector2(childBounds.minX, childBounds.minY), bounds);
        }.bind(this);

        this.accepts = model.accepts;

        environment.addDroppable(this);
    }

    return inherit(Node, ElectrodeSlotNode);
});
