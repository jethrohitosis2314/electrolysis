// Copyright 2002-2015, University of Colorado Boulder

/**
 *
 * @author prateek
 */
define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var ScreenView = require( 'JOIST/ScreenView' );
  var ResetAllButton = require( 'SCENERY_PHET/buttons/ResetAllButton' );
  var Rectangle = require('SCENERY/nodes/Rectangle');
  var ElectrolysisLayoutBound = require('ELECTROLYSIS/electrolysis/view/ElectrolysisLayoutBound');
  var LinearGradient = require( 'SCENERY/util/LinearGradient' );

  /**
   * @param {ElectrolysisModel} electrolysisModel
   * @constructor
   */
  function ElectrolysisScreenView( electrolysisModel ) {

    ScreenView.call( this );


    ScreenView.call( this, {
      layoutBounds: ElectrolysisLayoutBound
    } );

    //Fit to the window and render the initial scene
    var width = this.layoutBounds.width;
    var height = this.layoutBounds.height;

    this.model = electrolysisModel;

    //Create the sky and ground.  Allow the sky and ground to go off the screen in case the window is larger than the sim aspect ratio
    var arenaHeight = 376;
    var divisionY = 368;
    var rackHeight = height - arenaHeight;
    this.addChild( new Rectangle( -width, -arenaHeight, width * 3, arenaHeight * 2, {
      fill: new LinearGradient( 0, 0, 0, arenaHeight ).addColorStop( 0, '#02ace4' ).addColorStop( 1, '#cfecfc' )
    } ) );
    this.addChild( new Rectangle( -width, arenaHeight, width * 3, rackHeight * 3, {
      fill: '#c59a5b'
    } ) );

    // Reset All button
    var resetAllButton = new ResetAllButton( {
      listener: function() {
        electrolysisModel.reset();
      },
      right:  this.layoutBounds.maxX - 10,
      bottom: this.layoutBounds.maxY - 10
    } );

  }

  return inherit( ScreenView, ElectrolysisScreenView, {

    //TODO Called by the animation loop. Optional, so if your view has no animation, please delete this.
    step: function( dt ) {
      //TODO Handle view animation here.
    }
  } );
} );