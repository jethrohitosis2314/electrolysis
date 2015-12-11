// Copyright 2002-2015, University of Colorado Boulder
define(function(require) {
    'use strict';
    var Node = require('SCENERY/nodes/Node');
    var inherit = require('PHET_CORE/inherit');
    var Image = require('SCENERY/nodes/Image');
    var Circle = require('SCENERY/nodes/Circle');
    var DownUpListener = require('SCENERY/input/DownUpListener');
    var RadialGradient = require('SCENERY/util/RadialGradient');
    var BeakerNode = require('ELECTROLYSIS/electrolysis/view/BeakerNode');

    var ElectronNode = require('ELECTROLYSIS/electrolysis/view/ElectronNode');
    var circuitImage = require('image!ELECTROLYSIS/circuit.svg');

    function CircuitNode(model, modelViewTransform, environment) {
        Node.call(this, {
            x: 50,
            y: 100
        });

        this.electronNodes = [];

        model.electrons.forEach(function (electron){
            var electronNode = new ElectronNode(electron.location, electron.direction);
            this.addChild(electronNode);
            this.electronNodes.push(electronNode);
        }.bind(this));

        var beakerNode = new BeakerNode(model.beaker, modelViewTransform, environment);
        this.addChild(beakerNode);

        var key = new Circle(8, {
            x: 464,
            y: 177,
            fill: '#000',
            cursor: 'pointer',
            stroke: '#fff',
            lineWidth: 9
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
        this.addChild(key);

        model.openProperty.link(function(open) {
            key.fill = open ? '#fff' : '#000';
        });

        var glow = new Circle(40, {
            x: 65,
            y: 22
        });
        glow.fill = new RadialGradient(0, 0, 0, 0, 0, 40)
            .addColorStop(0, 'rgba( 255, 255, 0, 1 )')
            .addColorStop(0.9, 'rgba( 255, 255, 0, 0 )');
        this.addChild(glow);

        model.bulbGlowsProperty.linkAttribute(glow, 'visible');
        model.bulbGlowsProperty.link(function(glow){
            this.electronNodes.forEach(function(ele){ 
                ele.visible = glow;
            }.bind(this));
        }.bind(this));

        var image = new Image(circuitImage, {
            x: 0,
            y: 0
        });
        this.addChild(image);
    }

    return inherit(Node, CircuitNode);
});
