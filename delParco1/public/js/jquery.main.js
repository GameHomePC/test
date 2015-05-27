$(document).ready(function(){
    var arrayTime = [4,2,4,3,6,4]; // init time
    var sum = 0;
    var newArray = [];

    for(var i = 0, length = arrayTime.length; i < length; i+=1) {
        sum += arrayTime[i];
        newArray.push(arrayTime[i] * 1000);
    }

	$(window).load(function() {
        $('.slide1').addClass('active');

        var getSectionActive = function(time, number) {
            var xx = time[number];
            var next = time[number+1];

            setTimeout(function () {
                $('section.active').removeClass('active').next('section').addClass('active');
                if(next) getSectionActive(time, number+1);
            }, xx);
        };
        getSectionActive(newArray, 0);
	});

	//timer
    var timerSeconds = $('#timerSeconds');
	var counter = sum;

    timerSeconds.html(counter);

	var interval = setInterval(function() {
	    counter--;
        timerSeconds.html(counter);
	    if (counter < 10) {
            timerSeconds.html('0'+counter);
	    }
	    if (counter < 1) {
	       document.location=unescape(getUrlVar('url'));
           clearInterval(interval);
	    }
	}, 1000);
});

function getUrlVar(name) {

	if (name == 'url') {
		var i = window.location.href.indexOf(name + '=');
		if (i >= 0) {
			var url = window.location.href.substr(i + name.length + 1);
			return url;
		}
	}

	name = name.replace(/[[]/, "[").replace(/[]]/, "]");
	var regexS = "[?&]" + name + "=([^&#]*)";
	var regex = new RegExp(regexS);
	var results = regex.exec(window.location.href);
	if (results == null) return "";
	else return results[1];
}