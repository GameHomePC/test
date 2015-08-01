"use strict";
var arrayOne = [1,2,3,4,5,6,7,8,9,10];
var s = Snap("#svg");

function Graph(svg, lengthX, lengthY) {
    this.svg = svg;
    this.lengthX = lengthX || 10;
    this.lengthY = lengthY || 10;
    this.widthSvg = this.svg.node.clientWidth;
    this.heightSvg = this.svg.node.clientHeight;
    this.padding = 20;

    this.groupSvg = this.svg.g;
}

Graph.prototype.getDrawLine = function() {
    var arrayLine = [];

    for(var i = 0; i <= this.lengthY; i+=1) {
        var widthLine = i * (this.heightSvg / this.lengthY);
        var lineX = this.svg.line(0, widthLine, this.widthSvg, widthLine);

        lineX.attr({
            stroke: "#000000",
            strokeWidth: 2
        });

        arrayLine.push(lineX);
    }

    for(var i = 0; i <= this.lengthX; i+=1) {
        var widthLine = i * (this.widthSvg / this.lengthX);
        var lineX = this.svg.line(widthLine, 0, widthLine, this.heightSvg);

        lineX.attr({
            stroke: "#000000",
            strokeWidth: 2
        });

        arrayLine.push(lineX);
    }


    this.groupSvg.apply(this.svg, arrayLine);
};

Graph.prototype.getDrawMarker = function() {
    var marker = [];

    for(var i = 0; i <= this.lengthX; i+=1) {
        var x = i * (this.widthSvg / this.lengthX);

        for(var t = 0; t <= this.lengthY; t+=1) {
            var y = t * (this.heightSvg / this.lengthY);

            marker.push(this.svg.circle(x, y, 10));
        }
    }

    this.svg.g.apply(this.svg, marker);
};

Graph.prototype.init = function() {
    /* Рисуем линии графика разметки */
    this.getDrawLine();
    /* Рисуем маркеры */
    this.getDrawMarker();
};

var graph = new Graph(s);

graph.init();

