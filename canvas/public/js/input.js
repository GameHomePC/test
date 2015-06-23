function Control() {
    this.pressedKeys = {};
    this.setKey = function(event, status) {
        var code = event.keyCode || event.which;
        var key;

        console.log(code);

        key = String.fromCharCode(code);

        this.pressedKeys[key] = status;
    }
}

Control.prototype.isDown = function(key) {
    document.addEventListener('keydown', function(e) {
        this.setKey(e, true);
    }.bind(this));

    document.addEventListener('keyup', function(e) {
        this.setKey(e, false);
    }.bind(this));

    window.addEventListener('blur', function() {
        this.pressedKeys = {};
    }.bind(this));

    return this.pressedKeys[key.toUpperCase()];
};

var control = new Control();