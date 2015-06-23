var circle = [], canvas, ctx;

// Circle
function Circle(ctx) {
    this.ctx = ctx;
    this.x = 40;
    this.y = 40;
    this.width = 30;
}

Circle.prototype.drawArc = function() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.width, 0, Math.PI*2);
    this.ctx.fill();
    this.ctx.closePath();
};

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    circle.forEach(function(e) {
        e.drawArc();
    });

    if(control.isDown("d")) {
        circle[0].x += 10;
    } else if(control.isDown("a")) {
        circle[0].x -= 10;
    }

    if(control.isDown("w")) {
        circle[0].y -= 10;
    } else if(control.isDown("s")) {
        circle[0].y += 10;
    }

    window.requestAnimationFrame(update);
}

window.onload = function() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    canvas.width = 512;
    canvas.height = 480;

    circle.push(new Circle(ctx));

    update();
};


