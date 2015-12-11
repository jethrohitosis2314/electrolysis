// Copyright 2002-2015, University of Colorado Boulder
define(function(require) {
    'use strict';
    var Node = require('SCENERY/nodes/Node');
    var inherit = require('PHET_CORE/inherit');
    var Image = require('SCENERY/nodes/Image');
    var PhetFont = require( 'SCENERY_PHET/PhetFont' );
    var Text = require( 'SCENERY/nodes/Text' );
    var Circle = require('SCENERY/nodes/Circle');

    var rightArrow = require('image!ELECTROLYSIS/arrow.svg');
    var leftArrow = require('image!ELECTROLYSIS/arrow-left.svg');
    var upArrow = require('image!ELECTROLYSIS/arrow-up.svg');
    var downArrow = require('image!ELECTROLYSIS/arrow-down.svg');

    function ElectronNode(location, direction) {
        Node.call(this, {
            x: location.x,
            y: location.y
        });

        var electronImage = null;

        switch(direction){
            case 'UP':
            electronImage = upArrow;
            break;
            case 'DOWN':
            electronImage = downArrow;
            break;
            case 'RIGHT':
            electronImage = rightArrow;
            break;
            case 'LEFT':
            electronImage = leftArrow;
            break;

        }

        var image = new Image(electronImage, {
            x: 10,
            y: 0
        });
        this.addChild(image);

        this.setMaxWidth(30);
        this.setMaxHeight(30);

        var key = new Circle(150, {
            x: 10,
            y: 10,
            fill: 'black',
            cursor: 'pointer',
            lineWidth: 9
        });
        this.addChild(key);

        var name = new Node({x:-100, y: 70});
        this.addChild(name);
        name.addChild(new Text( '-e', { font: new PhetFont(220), fill: 'white' }));
    }

    return inherit(Node, ElectronNode   );
});
