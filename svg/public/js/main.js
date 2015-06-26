"use strict";

var s = Snap("#svg");

function Clock(svg) {
    this.svg = svg;
    this.x = 220;
    this.y = 220;
    this.r = 200;

    this.widthHour = 90;
    this.widthMin = 70;
    this.widthSec = 80;

    this.getX = function (degrees, r, adjust, x) {
        var x = x || r,
            adj = (adjust)/100 || 1;
        return x + r * adj * Math.cos(this.getRad(degrees));
    };
    this.getY = function (degrees, r, adjust, y) {
        var y = y || r,
            adj = (adjust)/100 || 1;
        return y + r * adj * Math.sin(this.getRad(degrees));
    };
    this.getRad = function(degrees) {
        var adjust = Math.PI / 2;
        return (degrees * Math.PI / 180) - adjust;
    };
    this.getDesing = function() {
        var lineDesing = this.svg.line();
    };
    this.getRender = function() {
        /* Time */
        var self = this,
            currentDate = new Date();

        drawHand(this.lineSec.node, currentDate.getSeconds(), this.widthSec, 6);
        drawHand(this.lineMin.node, currentDate.getMinutes(), this.widthMin, 6);
        drawHand(this.lineHour.node, currentDate.getHours(), this.widthHour, 30);

        function drawHand(hand, value, size, degrees) {
            var deg = degrees * value,
                x2 = self.getX(deg, self.r, size, self.x),
                y2 = self.getY(deg, self.r, size, self.y);

            hand.setAttribute('x1', self.x);
            hand.setAttribute('y1', self.y);
            hand.setAttribute('x2', x2);
            hand.setAttribute('y2', y2);
        }
    };
    this.getCircle = function() {
        var bigCircle = this.svg.circle(this.x, this.y, this.r);
        bigCircle.attr({
            fill: "#fff",
            stroke: "#000",
            strokeWidth: 2
        });

        var CenterCircle = this.svg.circle(this.x, this.y, 5);
        CenterCircle.attr({
            fill: "#000"
        });

        this.svg.g(bigCircle, CenterCircle);
    };
    this.getLine = function() {
        var lineHour = this.lineHour = this.svg.line(this.x, this.y, this.x, this.y - this.widthHour);
        lineHour.attr({
            stroke: "#000000",
            strokeWidth: 6
        });

        var lineMin = this.lineMin = this.svg.line(this.x, this.y, this.x, this.y - this.widthMin);
        lineMin.attr({
            stroke: "#000000",
            strokeWidth: 4
        });

        var lineSec = this.lineSec = this.svg.line(this.x, this.y, this.x, this.y - this.widthSec);
        lineSec.attr({
            stroke: "#000000",
            strokeWidth: 2
        });

        this.svg.g(lineHour, lineMin, lineSec);
    }
}

Clock.prototype.getClock = function() {
    this.getCircle();
    this.getLine();
};

var clock = new Clock(s);
clock.getClock();

setInterval(function() {
    clock.getRender();
}, 1000/60);
