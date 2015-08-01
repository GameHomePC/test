"use strict";

var canvas, ctx, circle = [], lineArray = [], LineArrowArray = [];

function Clock(ctx) {
    console.log(ctx);

    this.create = {
        Circle: function(ctx, x, y, r) {
            this.type = 'Circle';
            this.ctx = ctx;
            this.x = x;
            this.y = y;
            this.r = r;
            this.draw = function(callback) {
                this.callback = callback;
            };
        },
        Line: function(ctx, x, y, r) {
            this.type = 'Line';
            this.ctx = ctx;
            this.x = x;
            this.y = y;
            this.r = r;
            this.draw = function(callback) {
                this.callback = callback;
            };
        },
        LineArrow: function(ctx, x, y, r) {
            this.type = 'LineArrow';
            this.ctx = ctx;
            this.x = x;
            this.y = y;
            this.r = r;
            this.draw = function(callback) {
                this.callback = callback;
            };
            this.getLine = function(cosX1, sinY1, cosX2, sinY2, color, sWidth) {
                var ctx = this.ctx;

                ctx.beginPath();
                ctx.lineWidth = sWidth;
                ctx.strokeStyle = color;
                ctx.moveTo(cosX1, sinY1);
                ctx.lineTo(cosX2, sinY2);
                ctx.stroke();
            }
        }
    };

    this.ctx = ctx;
    this.x = 200;
    this.y = 200;
    this.r = 150;

    this.lengthHour = 50;
    this.lengthMin = 70;
    this.lengthSec = 100;

    this.setObject = function() {
        var _this = this;
        var arc = new this.create.Circle(this.ctx, this.x, this.y, this.r);
        arc.draw(function() {
            var ctx = this.ctx;

            ctx.beginPath();
            ctx.fillStyle = '#fff';
            ctx.arc(this.x, this.y, this.r, 0, Math.PI*2);
            ctx.fill();
            ctx.lineWidth = 2;
            ctx.strokeStyle = '#000';
            ctx.stroke();
            ctx.closePath();
        });
        circle.push(arc);

        for(var i = 1; i <= 60; i += 1) {
            (function(i) {
                var line = new _this.create.Line(_this.ctx, _this.x, _this.y, _this.r);

                var deg = i * 6;
                var lengthLine = (i % 5 === 0) ? 10 : 5;

                line.draw(function() {
                    var ctx = this.ctx;

                    var cosX1 = this.cosX1 = this.x + this.r * Math.cos(_this.getRad(deg)),
                        sinY1 = this.sinY1 = this.y + this.r * Math.sin(_this.getRad(deg)),
                        cosX2 = this.cosX2 = this.x + (this.r - lengthLine) * Math.cos(_this.getRad(deg)),
                        sinY2 = this.sinY2 = this.y + (this.r - lengthLine) * Math.sin(_this.getRad(deg));

                    ctx.beginPath();
                    ctx.lineWidth = 2;
                    ctx.strokeStyle = "#000";
                    ctx.moveTo(cosX1, sinY1);
                    ctx.lineTo(cosX2, sinY2);
                    ctx.stroke();
                });

                lineArray.push(line);
            })(i);
        }

        var LineArrowHour = new this.create.LineArrow(this.ctx, this.x, this.y, this.r);
        LineArrowHour.draw(function() {
            this.getLine(this.x, this.y, this.x + _this.lengthHour, this.y + _this.lengthHour, '#000', 6);
        });

        var LineArrowMin = new this.create.LineArrow(this.ctx, this.x, this.y, this.r);
        LineArrowMin.draw(function() {
            this.getLine(this.x, this.y, this.x + _this.lengthMin, this.y + _this.lengthMin, '#000', 4);
        });

        var LineArrowSec = new this.create.LineArrow(this.ctx, this.x, this.y, this.r);
        LineArrowSec.draw(function() {
            this.getLine(this.x, this.y, this.x + _this.lengthSec, this.y + _this.lengthSec, '#000', 2);
        });

        LineArrowArray.push(LineArrowHour,LineArrowMin,LineArrowSec);
    };

    this.getRad = function(degrees) {
        var adjust = Math.PI / 2;
        return (degrees * Math.PI / 180) - adjust;
    };

    this.drawElements = function() {
        circle.forEach(function(e) {
            if(e.callback) {
                e.callback();
            }
        });

        lineArray.forEach(function(e) {
            if(e.callback) {
                e.callback();
            }
        });

        LineArrowArray.forEach(function(e) {
            if(e.callback) {
                e.callback();
            }
        });
    };
}

Clock.prototype.update = function() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);

    this.drawElements();

    window.requestAnimationFrame(this.update.bind(this));
};

window.onload = function() {
    canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var clock = new Clock(ctx);
    clock.setObject();
    clock.update();
};
