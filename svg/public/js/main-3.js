"use strict";

var s = Snap("#svg");

function SpinnerTime(svg) {
    this.svg = svg;
    this.x = 120;
    this.y = 120;
    this.r = 100;
    this.time = 20;

    this.getStart = function() {
        this.drawCircle();
        this.drawCircleTime();
    };

    this.getRad = function(deg) {
        var adjust = Math.PI / 2;
        return (deg * Math.PI / 180) - adjust;
    }
}

SpinnerTime.prototype.drawCircle = function() {
    var circle = this.svg.circle(this.x, this.y, this.r);

    circle.attr({
        strokeWidth: 2,
        stroke: '#000',
        fill: '#fff'
    });
};

SpinnerTime.prototype.drawCircleTime = function() {
    var lineArray = [];
    var _this = this;
    var line  = this.svg.polyline();

    var counter = (function() {
        var i = 0;

        return function() {
            var x1 = _this.x + (_this.r) * Math.cos(_this.getRad(i)),
                y1 = _this.y + (_this.r) * Math.sin(_this.getRad(i));

            lineArray.push([x1, y1]);

            line.attr({
                points: lineArray.join(' '),
                fill: 'transparent',
                strokeWidth: 4,
                stroke: 'red'
            });

            return i++;
        };
    })();

    var i = 0;
    var interval = setInterval(function() {
        i++;

        (i > 361) ? clearInterval(interval) : counter();
    }, 1000/250);
};

var spinnerTime = new SpinnerTime(s);

spinnerTime.getStart();