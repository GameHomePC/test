function MyTimer(){
    this.list = {};
}

MyTimer.prototype = {
    constructor: MyTimer,
    type: function(value){
        return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
    },
    isObject: function(value){
        return this.type(value) === 'object';
    },
    setListProperty: function(id, attr){
        var list = this.list;
        for (var p in attr){
            if (attr.hasOwnProperty(p)){
                var item;
                if (!(id in list)) item = list[id] = {};
                else item = list[id];

                item[p] = attr[p]
            }
        }

        return this;
    },
    save: function(){
        var storage = window.localStorage;
        var list = this.list;
        storage.setItem('timers', JSON.stringify(list));
        return this;
    },
    add: function(btnId, seconds, url){
        if (window.localStorage){
            var self = this;
            var list = this.list;

            var storage = window.localStorage;
            var timers = storage.getItem('timers');

            try {
                timers = JSON.parse(timers);
            } catch(err){}

            if (this.isObject(timers)){
                for (var p in timers){
                    if (timers.hasOwnProperty(p)){
                        list[p] = timers[p];
                    }
                }
            }

            if (!(btnId in list)){
                this.setListProperty(btnId, {
                    t: document.getElementById(btnId).innerHTML,
                    s: seconds * 1000
                }).save();
            }

            var addEvent = function(){

                var btn = document.getElementById(btnId);

                var fnClick = function(){
                    self.setListProperty(btnId, {
                        c: Date.now()
                    }).save();

                    window.location = url;

                    btn.removeEventListener('click', fnClick, false);
                };

                btn.addEventListener('click', fnClick, false);

            };

            if (btnId in list){
                if (!('c' in list[btnId])){
                    addEvent();
                }
            }

        }

        var draw = function(){
            var format = function(time){
                var seconds = time / 1000;
                return {
                    seconds: ((seconds % 60) + '').split('.')[0],
                    minutes: (((seconds / 60) % 60) + '').split('.')[0],
                    hours: (((seconds / 60 / 60) % 24) + '').split('.')[0],
                    days: ((seconds / 60 / 60 / 24) + '').split('.')[0]
                };
            };

            var dataFormat = function(value){
                var len = value.length;
                if (len === 1){
                    value = '0' + value;
                }

                return value;
            };

            var currentTimer = btnId in list && 'c' in list[btnId];
            if (currentTimer){
                var btn = document.getElementById(btnId);
                var timer = list[btnId];
                var c = timer.c;
                var s = timer.s;
                var e = c + s;
                var ct = e - Date.now();

                if (ct >= 0){

                    var formatTime = format(ct < 0 ? 0 : ct);
                    btn.innerText = dataFormat(formatTime.hours) + ':' + dataFormat(formatTime.minutes) + ':' + dataFormat(formatTime.seconds);

                    self.setListProperty(btnId, {
                        e: e,
                        ct: ct
                    }).save();

                } else {
                    btn.innerHTML = timer.t;
                    delete timer['c'];
                    delete timer['e'];
                    delete timer['ct'];
                    self.save();
                    addEvent();
                }
            }

            setTimeout(draw, 1000 / 60);
        };

        draw();

        return this;
    }
};

var myTimer = new MyTimer();

myTimer.add('btn', 60, 'http://javascript.ru');
myTimer.add('btn2', 120, 'http://javascript.ru');
myTimer.add('btn3', 200, 'http://javascript.ru');
myTimer.add('btn4', 1000, 'http://javascript.ru');