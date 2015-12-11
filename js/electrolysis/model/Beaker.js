// Copyright 2002-2015, University of Colorado Boulder
define(function(require) {
    'use strict';
    var PropertySet = require('AXON/PropertySet');
    var inherit = require('PHET_CORE/inherit');

    function Beaker(options) {
        PropertySet.call(this, {
            electrolyte: null
        });
        this.location = options.location;
        this.liquidFillLocation = options.liquidFillLocation;
        this.liquidFillSize = options.liquidFillSize;
        this.accepts = ['LiquidModel'];
        this.type = 'Beaker';

        this.onReceiveDrop = function(liquid) {
            this.electrolyteProperty.set(liquid);
        }.bind(this);

        this.setParent = function(parent) {
            this.parent = parent;
        }.bind(this);
    }

    return inherit(PropertySet, Beaker);
});
