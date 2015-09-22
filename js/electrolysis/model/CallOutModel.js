define(function(require) {
    var inherit = require('PHET_CORE/inherit');
    var PropertySet = require('AXON/PropertySet');
    var Dimension2 = require('DOT/Dimension2');
    var Vector2 = require('DOT/Vector2');

    function CallOutModel() {
        PropertySet.call(this, {
            liquidName: '',
            visible: false,
            conductor: false
        });

        this.size = new Dimension2(320, 60);
        this.location = new Vector2(200, 30);
        this.arcRadius = 5;
        this.fillColor = '#FFFFCE';
        this.stroke = '#000';
        this.lineWidth = 2;
        this.fontSize = 20;
        this.fontColor = 'black';
    }

    return inherit(PropertySet, CallOutModel);
});
