define(function(require) {
    function Environment() {
        this.droppables = [];
        this.addDroppable = function(node) {
            this.droppables.push(node);
        };

        this.onDrop = function(eventObject) {
            this.droppables.forEach(function(droppable) {
                if(typeof droppable.collidesWith == "function" && droppable.collidesWith(eventObject.bounds)) {
                    droppable.onReceiveDrop(eventObject.model);
                }
            });
        }
    }
    return Environment;
});
