define(function(require) {

    var Node = require('SCENERY/nodes/Node');
    var inherit = require('PHET_CORE/inherit');
    var Circle = require('SCENERY/nodes/Circle');
    var Rectangle = require('SCENERY/nodes/Rectangle');
    var Vector2 = require('DOT/Vector2');

    function ElectrodeSlotNode(model, environment){
    	Node.call(this, {
            x: model.location.x,
            y: model.location.y,
            visible: true
        });


        var key = new Circle(25, {
            x: 0,
            y: 0,
            fill: '',
            cursor: 'pointer',
            stroke: '',
        });

        this.addChild(key);

        var rectangle = new Rectangle(-4,7,10,65,0,0,{
            fill: '#fff',
            lineWidth: 0
        });

        var displayElectrode = function(){
            rectangle.fill = model.electrode ? model.electrode.color : '';
        }
        this.addChild(rectangle);

        model.electrodeProperty.link(function(electrode){
            displayElectrode();
        }.bind(this));

        this.onReceiveDrop = function(metalStrip){
            model.onReceiveDrop(metalStrip);
        }.bind(this);


        this.collidesWith = function(childBounds) {
            var within = function(position, bounds) {
                var inRange = function(value, lowerBound, upperBound) {
                    return lowerBound < value && value < upperBound;
                };
                return inRange(position.x, bounds.minX, bounds.maxX) && inRange(position.y, bounds.minY, bounds.maxY);
            };

            var bounds = this.getGlobalBounds();
            return within(new Vector2(childBounds.minX, childBounds.minY), bounds);
        }.bind(this);

        this.accepts = model.accepts;

        environment.addDroppable(this);
    }

    return inherit(Node, ElectrodeSlotNode);
});