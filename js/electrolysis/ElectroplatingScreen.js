define(function(require) {
    'use strict';

    var ElectrolysisModel = require('ELECTROLYSIS/electrolysis/model/ElectrolysisModel');
    var ElectrolysisScreenView = require('ELECTROLYSIS/electrolysis/view/ElectrolysisScreenView');
    var inherit = require('PHET_CORE/inherit');
    var Screen = require('JOIST/Screen');
    var Image = require('SCENERY/nodes/Image');
    var epImage = require("image!ELECTROLYSIS/ep.png");

    var electrolysisSimString = require('string!ELECTROLYSIS/electroplating.name');

    function ElectrolysisScreen() {
        var icon = new Image(epImage);

        window.ES = {};
        ES.model = new ElectrolysisModel();
        Screen.call(this, electrolysisSimString, icon,
            function() {
                return ES.model;
            },
            function(model) {
                return new ElectrolysisScreenView(model);
            }, {
                backgroundColor: 'white'
            }
        );
    }

    return inherit(Screen, ElectrolysisScreen);
});
