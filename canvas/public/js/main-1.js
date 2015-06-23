var circle = [], canvas, ctx, control;

function Circle(ctx) {
    this.ctx = ctx;
    this.x = 40;
    this.y = 40;
    this.width = 30;
}

Circle.prototype.drawArc = function() {
    this.ctx.arc(this.x, this.y, this.width, 0, Math.PI*2);
    this.ctx.fill();
};

function Control() {
    this.status = false,
    this.castomKey = 0;
    this.codeNative = 0;
}

Control.prototype.isKeyDown = function(castomKey) {
    document.addEventListener('keydown', function(e) {
        var code = e.which || e.keyCode;

        if(code !== castomKey) {
            this.status = false;
            return false;
        }

    }.bind(this), false);

    document.addEventListener('keyup', function(e) {
        this.status = false;
    }.bind(this), false);

    return this.status;
};

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if(control.isKeyDown(68)) {
        console.log("Right");
    } else if(control.isKeyDown(65)) {
        console.log("Left");
    }

    if(control.isKeyDown(87)) {
        console.log("Top");
    } else if(control.isKeyDown(83)) {
        console.log("Bottom");
    }

    circle.forEach(function(e) {
        e.drawArc();
    });

    window.requestAnimationFrame(update);
}

window.onload = function() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    canvas.width = 512;
    canvas.height = 480;

    control = new Control();
    circle.push(new Circle(ctx));

    update();
};


