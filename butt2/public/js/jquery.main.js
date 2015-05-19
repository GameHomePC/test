$(document).ready(function(){
    $(window).load(function(){
        $('.slide6').addClass('active');
        var interval = setInterval(function() {
            $('section.active').removeClass('active').next('section').addClass('active');
            if(!$('section.active').next('section').size()) {
                clearInterval(interval);
            }
        }, 2600);
    });
    //timer
    var counter = 20;
    var interval = setInterval(function() {
        counter--;
        $('#timerSeconds').html(counter);
        if (counter < 10) {
            $('#timerSeconds').html('0'+counter);
        }
        if (counter == 1) {
            clearInterval(interval);
        }
    }, 1000);
});

function getUrlVar(name, url)
{
    if (!url) url = window.location.href;
    name = name.replace(/[[]/, "[").replace(/[]]/, "]");
    var regexS = "[?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(url);
    if (results == null) return "";
    else return results[1];
}