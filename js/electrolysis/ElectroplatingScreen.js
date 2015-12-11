// Copyright 2002-2015, University of Colorado Boulder
define(function(require) {
    'use strict';

    var ElectroplatingModel = require('ELECTROLYSIS/electrolysis/model/Electroplating/ElectroplatingModel');
    var ElectroplatingScreenView = require('ELECTROLYSIS/electrolysis/view/Electroplating/ElectroplatingScreenView');
    var inherit = require('PHET_CORE/inherit');
    var Screen = require('JOIST/Screen');
    var Image = require('SCENERY/nodes/Image');
    var epImage = require('image!ELECTROLYSIS/ep.png');
    var Environment = require('ELECTROLYSIS/electrolysis/Environment');

    var electroplatingTitleString = require('string!ELECTROLYSIS/electroplating.title');

    function ElectroplatingScreen() {
        var icon = new Image(epImage);

        var environment = new Environment();

        Screen.call(this, electroplatingTitleString, icon,
            function() {
                return new ElectroplatingModel(environment);
            },
            function(model) {
                return new ElectroplatingScreenView(model);
            }, {
                backgroundColor: 'white'
            }
        );
    }

    return inherit(Screen, ElectroplatingScreen);
});
