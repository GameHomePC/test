$(function() {
    $(window).on('mousewheel mousedown DOMMouseScroll MozMousePixelScroll', function(e) {
        if(e.which == 1) {
            return false;
        }

        if(e.which == 2) {
            return false;
        }

        if(e.which == 3) {
            return false;
        }

        return false;
    });
});