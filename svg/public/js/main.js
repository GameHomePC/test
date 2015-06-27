"use strict";

var s = Snap("#svg");

function Clock(svg) {
    this.svg = svg;
    this.x = 250;
    this.y = 250;
    this.r = 200;

    this.lengthHour = 50;
    this.lengthMin = 70;
    this.lengthSec = 80;

    this.getX = function (degrees, r, adjust, x) {
        var x = x || r,
            adj = (adjust)/(this.r/2) || 1;
        return x + r * adj * Math.cos(this.getRad(degrees));
    };
    this.getY = function (degrees, r, adjust, y) {
        var y = y || r,
            adj = (adjust)/(this.r/2) || 1;
        return y + r * adj * Math.sin(this.getRad(degrees));
    };
    this.getRad = function(degrees) {
        var adjust = Math.PI / 2;
        return (degrees * Math.PI / 180) - adjust;
    };
    this.getDesing = function() {
        var lineDesing = [],
            lineCountre = [],
            lineText = [],
            _this = this;

        var t = 0;

        for(var i = 1; i <= 60; i+=1) {
            var deg = 6 * i;

            (function() {
                var lineWidth = (i % 5 === 0) ? 10 : 5;

                var cosX1 = _this.x + (_this.r - lineWidth) * Math.cos(_this.getRad(deg)),
                    sinY1 = _this.y + (_this.r - lineWidth) * Math.sin(_this.getRad(deg)),
                    cosX2 = _this.x + (_this.r + lineWidth) * Math.cos(_this.getRad(deg)),
                    sinY2 = _this.y + (_this.r + lineWidth) * Math.sin(_this.getRad(deg));

                lineDesing.push(_this.svg.line(cosX1, sinY1, cosX2, sinY2));
            })();

            (function() {
                var cosX1 = _this.x + (_this.r - 50) * Math.cos(_this.getRad(deg)),
                    sinY1 = _this.y + (_this.r - 50) * Math.sin(_this.getRad(deg)),
                    cosX2 = _this.x + (_this.r) * Math.cos(_this.getRad(deg)),
                    sinY2 = _this.y + (_this.r) * Math.sin(_this.getRad(deg));

                lineCountre.push(_this.svg.line(cosX1, sinY1, cosX2, sinY2));
            })();

            (function() {
                if(i % 5 !== 0) return false;

                t += 1;

                var cosX1 = _this.x + (_this.r + 25) * Math.cos(_this.getRad(deg)),
                    sinY1 = _this.y + (_this.r + 25) * Math.sin(_this.getRad(deg));

                lineText.push(_this.svg.text(cosX1, sinY1, t));
            })();
        }

        lineDesing.forEach(function(element, index, array) {
            element.attr({
                stroke: "#000",
                strokeWidth: 2
            });
        });
        this.svg.g.apply(this.svg, lineDesing);

        lineCountre.forEach(function(element, index, array) {
            element.attr({
                stroke: "#000",
                strokeWidth: 1,
                opacity: 0.1
            });
        });
        this.svg.g.apply(this.svg, lineCountre);

        lineText.forEach(function(element, index, array) {
            var x = (+element.attr('x') - (element.node.clientWidth*0.7));
            var y = (+element.attr('y') + (element.node.clientHeight*0.5));

            element.attr({
                fontSize: "24px",
                fontWeight: "bold",
                x: x,
                y: y
            });
        });
        this.svg.g.apply(this.svg, lineText);
    };
    this.getRender = function() {
        /* Time */
        var currentDate = this.currentDate = new Date();

        this.drawUpdate(this.lineSec, currentDate.getSeconds(), this.lengthSec, 6);
        this.drawUpdate(this.lineMin, currentDate.getMinutes(), this.lengthMin, 6);
        this.drawUpdate(this.lineHour, currentDate.getHours(), this.lengthHour, 30);
    };
    this.getCircle = function() {
        var bigCircle = this.svg.circle(this.x, this.y, this.r);
        bigCircle.attr({
            fill: "#fff",
            stroke: "#000",
            strokeWidth: 2
        });

        var contourCircle = this.svg.circle(this.x, this.y, this.r - 50);
        contourCircle.attr({
            fill: "#000",
            opacity: 0.1
        });

        var centerCircle = this.svg.circle(this.x, this.y, 5);
        centerCircle.attr({
            fill: "#000"
        });

        this.svg.g(bigCircle, centerCircle, contourCircle);
    };
    this.getLine = function() {
        var lineHour = this.lineHour = this.svg.line(this.x, this.y, this.x, this.y - this.lengthHour);
        lineHour.attr({
            stroke: "#000000",
            strokeWidth: 6
        });

        var lineMin = this.lineMin = this.svg.line(this.x, this.y, this.x, this.y - this.lengthMin);
        lineMin.attr({
            stroke: "#000000",
            strokeWidth: 4
        });

        var lineSec = this.lineSec = this.svg.line(this.x, this.y, this.x, this.y - this.lengthSec);
        lineSec.attr({
            stroke: "#000000",
            strokeWidth: 2
        });

        this.svg.g(lineHour, lineMin, lineSec);
    }
}

Clock.prototype.drawUpdate = function (hand, value, size, degrees) {
    var deg = (degrees !== 30) ? degrees * value : degrees * value + (this.currentDate.getMinutes() / 2),
        x2 = this.getX(deg, this.r, size, this.x),
        y2 = this.getY(deg, this.r, size, this.y);

    hand.attr({
        x1: this.x,
        y1: this.y,
        x2: x2,
        y2: y2
    });
};

Clock.prototype.getClock = function() {
    this.getCircle();
    this.getDesing();
    this.getLine();
};

var clock = new Clock(s);
clock.getClock();

setInterval(function() {
    clock.getRender();
}, 1000/60);
