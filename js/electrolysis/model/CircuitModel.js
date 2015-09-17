define( function(require) {
    var PropertySet = require('AXON/PropertySet');
    var inherit = require('PHET_CORE/inherit');

    function CircuitModel () {
        PropertySet.call(this, {open: true, electrolyte: null, bulbGlows: false});

        var checkCurrentFlow = function() {
            if( this.open && this.electrolyte && this.electrolyte.conductor) {
                this.bulbGlowsProperty.set(true);
            } else {
                this.bulbGlowsProperty.set(false);
            }
        }.bind(this);

        this.openProperty.link(function() {checkCurrentFlow();});
        this.electrolyteProperty.link(function() {checkCurrentFlow();});
    }

    return inherit(PropertySet, CircuitModel);
});
