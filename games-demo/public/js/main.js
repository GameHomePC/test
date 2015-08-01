"use strict";

// Rect
function Rect(ctx, index, x, y, w, h) {
    this.ctx = ctx;
    this.index = index;
    this.w = w || 100;
    this.h = h || 100;
    this.x = x * this.w;
    this.y = y * this.h;
    this.player = undefined;

    this.ctx.beginPath();
    this.ctx.rect(this.x, this.y, this.w, this.h);
    this.ctx.stroke();
    this.ctx.closePath();
}
Rect.prototype.cross = function() {
    var x = this.x + (this.w / 5.5),
        y = this.y + (this.h / 5.5),
        w = this.w / 1.5,
        h = this.h / 1.5;

    this.ctx.beginPath();
    this.ctx.strokeStyle = 'red';
    this.ctx.lineWidth = 3;
    this.ctx.moveTo(x, y);
    this.ctx.lineTo(x + w, y + h);
    this.ctx.stroke();
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.moveTo(x + w, y);
    this.ctx.lineTo(x, y + h);
    this.ctx.stroke();
    this.ctx.closePath();
};
Rect.prototype.toe = function() {
    var x = this.x + (this.w / 2),
        y = this.y + (this.h / 2);

    this.ctx.beginPath();
    this.ctx.arc(x, y, this.w / 2.5, 0, Math.PI * 2);
    this.ctx.lineWidth = 3;
    this.ctx.strokeStyle = 'green';
    this.ctx.stroke();
    this.ctx.closePath();
};

// Games
function Games (canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.width = 800;
    this.height = 600;
    this.toggle = true;

    this.lengthX = 3;
    this.lengthY = 3;
}

Games.prototype.player = function(element) {
    var _this = this;

    var status = function(status) {
        _this.toggle = status;

        if(_this.toggle) {
            element.player = 'cross';
            element.cross();
        } else {
            element.player = 'toe';
            element.toe();
        }
    };

    switch (this.toggle) {
        case true: status(false); break;
        case false: status(true); break;
    }
};

Games.prototype.message = function(elements) {
    var result = (elements.player === "toe") ? "Нолик" : "Крестик";
    alert("Игра окончена, победил " + result);
};

Games.prototype.draw = function() {
    var _this = this, array = [], index = 0;

    for(var y = 0; y < this.lengthY; y+=1) {
        for(var x = 0; x < this.lengthX; x+=1) {
            array.push(new Rect(this.ctx, index++, x, y));
        }
    }

    this.canvas.addEventListener('click', function(e) {
        var pageX = e.pageX,
            pageY = e.pageY;

        for(var i = 0, length = array.length; i < length; i++) {

            if(array[i].x <= pageX && array[i].x + array[i].w >= pageX && array[i].y <= pageY && array[i].y + array[i].h >= pageY) {
                if(!array[i].player) {
                    _this.player(array[i]);
                }

                if(array[0].player == 'cross' && array[1].player == 'cross' && array[2].player == 'cross' || array[0].player == 'toe' && array[1].player == 'toe' && array[2].player == 'toe') _this.message(array[i]);
                if(array[3].player == 'cross' && array[4].player == 'cross' && array[5].player == 'cross' || array[3].player == 'toe' && array[4].player == 'toe' && array[5].player == 'toe') _this.message(array[i]);
                if(array[6].player == 'cross' && array[7].player == 'cross' && array[8].player == 'cross' || array[6].player == 'toe' && array[7].player == 'toe' && array[8].player == 'toe') _this.message(array[i]);
                if(array[0].player == 'cross' && array[3].player == 'cross' && array[6].player == 'cross' || array[0].player == 'toe' && array[3].player == 'toe' && array[6].player == 'toe') _this.message(array[i]);
                if(array[1].player == 'cross' && array[4].player == 'cross' && array[7].player == 'cross' || array[1].player == 'toe' && array[4].player == 'toe' && array[7].player == 'toe') _this.message(array[i]);
                if(array[2].player == 'cross' && array[5].player == 'cross' && array[8].player == 'cross' || array[2].player == 'toe' && array[5].player == 'toe' && array[8].player == 'toe') _this.message(array[i]);
                if(array[0].player == 'cross' && array[4].player == 'cross' && array[8].player == 'cross' || array[0].player == 'toe' && array[4].player == 'toe' && array[8].player == 'toe') _this.message(array[i]);
                if(array[2].player == 'cross' && array[4].player == 'cross' && array[6].player == 'cross' || array[2].player == 'toe' && array[4].player == 'toe' && array[6].player == 'toe') _this.message(array[i]);
            }
        }
    });
};

Games.prototype.getInit = function() {
    this.canvas.width = this.width;
    this.canvas.height = this.height;

    this.draw();
};

var games = new Games('games');
games.getInit();


