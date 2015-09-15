// Copyright 2002-2015, University of Colorado Boulder

/**
 *
 * @author prateek
 */
define( function( require ) {
  'use strict';

  // modules
  var ElectrolysisModel = require( 'ELECTROLYSIS/electrolysis/model/ElectrolysisModel' );
  var ElectrolysisScreenView = require( 'ELECTROLYSIS/electrolysis/view/ElectrolysisScreenView' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Screen = require( 'JOIST/Screen' );

  // strings
  var electrolysisSimString = require( 'string!ELECTROLYSIS/electrolysis.name' );

  /**
   * @constructor
   */
  function ElectrolysisScreen() {

    //If this is a single-screen sim, then no icon is necessary.
    //If there are multiple screens, then the icon must be provided here.
    var icon = null;

    Screen.call( this, electrolysisSimString, icon,
      function() { return new ElectrolysisModel(); },
      function( model ) { return new ElectrolysisScreenView( model ); },
      { backgroundColor: 'white' }
    );
  }

  return inherit( Screen, ElectrolysisScreen );
} );