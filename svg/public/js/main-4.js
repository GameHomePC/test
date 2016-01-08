"use strict";

var paper = Snap(800, 400);

function LineMain(svg) {
    this.svg = svg;
    this.r = 10;
    this.styleCircle = {
        fill: "#387",
        stroke: "#fff",
        strokeWidth: 4
    };

    this.stylePath = {
        fill: "transparent",
        stroke: "#387",
        strokeWidth: 3
    };

    this.getInit = function() {
        this.getEventsClick();
    }
}

LineMain.prototype.getEventsClick = function() {
    var self = this;

    var path = this.svg
        .path()
        .attr(this.stylePath);

    var pathArray = [];

    this.updatePath = function() {
        var first = pathArray[0],
            pathString = "M" + first.x + "," + first.y;

        for(var node in pathArray) {
            pathString += "T" + pathArray[node].x + "," + pathArray[node].y;
        }

        path.attr({
            d: pathString
        });
    };

    this.svg.click(function(e) {
        if(e.target.tagName !== "svg") return;

        self.svg
            .circle(e.pageX, e.pageY, self.r)
            .attr(self.styleCircle)
            .data("i", pathArray.length)
            .mouseover(function() {
                this.stop().animate({r:25}, 1000, mina.elastic);
            })
            .mouseout(function() {
                this.stop().animate({r:15}, 300, mina.easeinout);
            })
            .drag(function(dx, dy, x, y, elements) {

                this.attr({
                    cx: x,
                    cy: y
                });

                var currentNode = pathArray[this.data("i")];
                currentNode.x = x;
                currentNode.y = y;

                self.updatePath();
            },function() {
                path.stop().animate({opacity: 0.2}, 200, mina.easeinout);
            },function() {
                path.stop().animate({opacity: 1}, 1000, mina.easeinout);
            });

        pathArray.push({
            x: e.pageX,
            y: e.pageY
        });

        self.updatePath();
    })
};

var lineMain = new LineMain(paper);
lineMain.getInit();