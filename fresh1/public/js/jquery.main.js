var url = 'http://tut.by';
function getUrlVar(name)
{

 if (name == 'url')
 {
  var i = window.location.href.indexOf(name + '=');
  if (i >= 0) 
  {
   var url = window.location.href.substr(i + name.length + 1);
   //console.log(url);
   //console.log(encodeURIComponent(url));
   //console.log(decodeURIComponent(url));
   return url;
  }
 }

 name = name.replace(/[[]/,"[").replace(/[]]/,"]");
 var regexS = "[?&]"+name+"=([^&#]*)";
 var regex = new RegExp( regexS );
 var results = regex.exec( document.location.href );
 if(results == null) return "";
 else return results[1];

}

$(document).ready(function(){
	$(window).load(function(){
		$('.slide1').addClass('active');
		var interval = setInterval(function() {
			$('section.active').removeClass('active').next('section').addClass('active');
			if(!$('section.active').next('section').size()) {
				clearInterval(interval);
			}
		}, 3000);
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
	       document.location.href = unescape(getUrlVar('url'));
	    }
	}, 1000);
});
