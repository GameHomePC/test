$(function() {
    function getUrlVar(name) {
        name = name.replace(/[[]/,"[").replace(/[]]/,"]");
        var regexS = "[?&]"+name+"=([^&#]*)";
        var regex = new RegExp( regexS );
        var results = regex.exec( window.location.href );
        if(results == null) return "";
        else return results[1];
    }

    if (navigator.userAgent.indexOf('Opera Mini') == -1) {

        var dropAnim = new TweenMax('#drop', 1.4, { bottom: '10%' });
        var effectAnim = new TweenMax('#effect', 0.5, { top: '10%', delay: 0.5 });

        $('#bottle1').delay(1000).hide( 0, function(){
            $('#drop').hide();
            $('#bottle2, #vulcano').show();
        });

        var bgAnim = new TweenMax('#bg2', 0.5, { bottom: 0, delay: 1.5, onComplete: function() {
            $('#bg1').css({ 'top': '100%', 'z-index': 70 });
            $('#drop, #bottle1, #bottle2, #vulcano').remove();
        } });
        var helicopterAnim = new TweenMax('#helicopter', 1.5, { right: '45%', delay: 1.5 });

        var infoAnim = new TweenMax('#info', 0.5, { bottom: '0', delay: 3 });

        var helicopterAnim = new TweenMax('#helicopter', 0.5, { right: '52%', top: '27%', delay: 3 });

        var helicopterAnim = new TweenMax('#helicopter', 0.5, { right: '50%', top: '25%', delay: 3.5 });

        var bgAnim2 = new TweenMax('#bg1', 0.5, { top: 0, delay: 4, onComplete: function() {
            $('#helicopter, #info, #effect').remove();
            $('#bg2').hide();
        } });

        var handAnim = new TweenMax('#hand', 0.5, { bottom: 0, delay: 4.5 });
        var handAnimActive = new TweenMax('#hand_active', 0.5, { bottom: 0, delay: 4.5 });

        var handFlashAnim = new TimelineMax({ repeat: -1, delay: 5 });
        handFlashAnim.to('#hand_active', 0, {
            css: {
                opacity: 0
            }
        }).to('#hand_active', .35, {
            css: {
                opacity: 1
            }
        }).to('#hand_active', .35, {
            css: {
                opacity: 0
            }
        });

        var lineLeftAnim = new TweenMax('#lineLeft', 0.5, { left: 0, delay: 5.5 });
        var lineRightAnim = new TweenMax('#lineRight', 0.5, { right: 0, delay: 6 });

        var bgAnim3 = new TweenMax('#bg3', 0.5, { bottom: 0, delay: 6.5, onComplete: function() {
            handFlashAnim.pause();
            $('#bg1').css({ 'top': '100%', 'z-index': 130 });
            $('#lineLeft, #hand_active, #hand').remove();
            $('#lineRight').hide();
        } });

        var roundManAnim = new TweenMax('#roundMan', 0, { display: 'block', delay: 7 });
        var audienceAnim = new TweenMax('#audience', 0, { display: 'block', delay: 7 });

        if( window.innerHeight > window.innerWidth ){
            var roundManAnimGo = new TweenMax('#roundMan', 1, { left: '-25%', delay: 7 });
        }

        var i=300;
        var j=300;
        $('#audience').css({ 'left': Math.cos(i * 0.02) * 120 + '%', 'top': Math.sin(j * 0.02) * 80 + '%' });
        var audienceRoundAnim;
        setInterval(function(){
            ++i;
            ++j;
            audienceRoundAnim = new TweenMax('#audience', 0.05, {
                'left': Math.cos(i * 0.02) * 120 + '%',
                'top': Math.sin(j * 0.02) * 80 + '%',
                delay: 7
            });
        }, 50);

        var bgAnim4 = new TweenMax('#bg1', 0.5, { top: 0, delay: 9.5, onComplete: function() {
            $('#audience, #roundMan, #bg3').remove();
        } });

        var womanAnim = new TweenMax('#woman', 0.5, { left: '20%', delay: 10, onComplete: function() {
            $('#bg2').css({ 'bottom': '100%', 'z-index': 160 }).show();
            $('#lineRight').css({ 'right': '-32%', 'z-index': 170 }).show();
        } });

        var na1Anim = new TweenMax('#na1', 0.5, { top: '5%', delay: 10.5 });
        var cpokupAnim = new TweenMax('#cpokup', 0.25, { top: '17%', delay: 10.75 });

        var bgAnim5 = new TweenMax('#bg2', 0.5, { bottom: 0, delay: 12.5, onComplete: function() {
            $('#bg1, #woman, #na1, #cpokup').remove();
        } });

        var lineLeftYellowAnim = new TweenMax('#lineLeftYellow', 0.5, { left: 0, delay: 12.5 });
        var lineRightAnim = new TweenMax('#lineRight', 0.5, { right: 0, delay: 12.5 });

        var helicopterWAnim = new TweenMax('#helicopterW', 0.7, { top: '15%', delay: 12.5, onComplete: function() {
            helicopterWAnim = new TweenMax('#helicopterW', 0.7, { top: '20%', onComplete: function() {
                helicopterWAnim = new TweenMax('#helicopterW', 0.7, { top: '15%', onComplete: function() {
                    location=unescape(getUrlVar('advertiserUrl'));
                } });
            } });
        } });

        var time = 15, seconds;
        setInterval(function(){
            time -= 1;
            if ( time < 10 && time > 1 ) {
                seconds = '0' + time;
            }
            else if ( time <= 1 ) {
                seconds = '01';
            }
            else {
                seconds = time;
            }
            $('#timerSeconds').html(seconds);
        }, 1000);

    }

    else {
        location=unescape(getUrlVar('advertiserUrl'));
    }
	
});