$(document).ready(function(){
	$(window).load(function(){
		$('.slide1').addClass('active');
		var interval = setInterval(function() {
			$('section.active').removeClass('active').next('section').addClass('active');
			if(!$('section.active').next('section').size()) {
				clearInterval(interval);
			}
		}, 3400);
	});

	//timer
	var counter = 20;
	var interval = setInterval(function() {
	    counter--;
	    $('#timerSeconds').html(counter);
	    if (counter < 10) {
	    	$('#timerSeconds').html('0'+counter);
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