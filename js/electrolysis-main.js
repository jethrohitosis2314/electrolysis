// Copyright 2002-2015, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author prateek
 */
define(function(require) {
    'use strict';

    // modules
    var ElectrolysisScreen = require('ELECTROLYSIS/electrolysis/ElectrolysisScreen');
    var ElectroplatingScreen = require('ELECTROLYSIS/electrolysis/ElectroplatingScreen');
    var Sim = require('JOIST/Sim');
    var SimLauncher = require('JOIST/SimLauncher');

    // strings
    var simTitle = require('string!ELECTROLYSIS/electrolysis.title');

    var simOptions = {
        credits: {
            //TODO fill in proper credits, all of these fields are optional, see joist.AboutDialog
            leadDesign: '',
            softwareDevelopment: '',
            team: '',
            qualityAssurance: '',
            graphicArts: '',
            thanks: ''
        }
    };

    // Appending '?dev' to the URL will enable developer-only features.
    if (phet.chipper.getQueryParameter('dev')) {
        simOptions = _.extend({
            // add dev-specific options here
        }, simOptions);
    }

    SimLauncher.launch(function() {
        var sim = new Sim(simTitle, [ new ElectrolysisScreen(), new ElectroplatingScreen()], simOptions);
        sim.start();
    });
});
