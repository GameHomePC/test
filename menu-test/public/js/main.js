function Timer(elemet, time, href) {
    this.elemets = elemet;
    this.time = time;
    this.link = href;
}

Timer.prototype.setCook = function(name, status) {
    document.cookie = name + "=" + status;
};

Timer.prototype.getCook = function(name) {
    var cookie = document.cookie.split('; '),
        str = false;

    cookie.forEach(function(element) {
        str = element.split('=');

        if(str[0] === name) {
            str = str[1];
        }
    });

    return (str === 'false') ? false : true;
};

Timer.prototype.getReload = function() {
    //window.open(this.link, '_blank');
    location.assign(this.link);
};

Timer.prototype.getTimer = function() {
    var i = 0,
        timer = this.time.split(':'),
        date = new Date(),
        _this = this;

    date.setHours(timer[0]);
    date.setMinutes(timer[1]);
    date.setSeconds(timer[2]);

    var sum = date.getTime(),
        newDate = new Date();

    var interval = this.interval = setInterval(function() {
        sum -= 1000;
        newDate = new Date(sum);

        _this.elemets.innerText = newDate.getHours() + ':' + newDate.getMinutes() + ':' + newDate.getSeconds();

        if(newDate.getHours() === 0 && newDate.getMinutes() === 0 && newDate.getSeconds() === 0) {
            _this.elemets.innerText = 'Нажать';
            _this.setCook('status', false);
            clearInterval(interval);
        }
    }, 1000);
};

Timer.prototype.getInit = function() {
    var _this = this;

    if(this.getCook('status')) {
        this.getTimer();
    }

    this.elemets.addEventListener('click', function(e) {
        if(_this.getCook('status') === false) {
            _this.setCook('status', true);
            _this.getReload();
        }

        return false;
    }, false);
};

var timer = new Timer(document.getElementsByClassName('info')[0], '00:00:10', 'http://javascript.ru/');
timer.getInit();