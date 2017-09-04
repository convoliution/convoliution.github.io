$(function() {
    function updateLiu() {
        isCompactNavbar = $('#logo').css('align-items') === 'normal';
        if (isCompactNavbar) {
            var minLiuLeft = -$('#chael').outerWidth()/2;
            var maxMiLeft = $('#chael').outerWidth()/2;
            var miLeft = maxMiLeft*$(window).scrollTop()/$('#landing').outerHeight();
        } else {
            var minLiuLeft = -$('#chael').outerWidth();
        }
        var liuLeft = minLiuLeft*$(window).scrollTop()/$('#landing').outerHeight(); // relate 'mi liu' distance to scroll distance

        // #liu position and #chael opacity
        if (liuLeft >= 0) {
            $('#liu').css('left', 0);
            $('#chael').css('opacity', 1);
            $('#chael').css('display', 'inline-block');
        } else if (liuLeft > minLiuLeft) {
            $('#liu').css('left', liuLeft);
            $('#chael').css('opacity', 1 - liuLeft/minLiuLeft);
            $('#chael').css('display', 'inline-block');
        } else {
            $('#liu').css('left', 0); // back to 0 because .chael is display: none
            $('#chael').css('opacity', 0);
            $('#chael').css('display', 'none');
        }

        // #mi and #chael positions
        if (isCompactNavbar) {
            if (liuLeft >= 0) {
                $('#mi').css('left', 0);
                $('#chael').css('left', 0);
            } else if (liuLeft > minLiuLeft) {
                $('#mi').css('left', miLeft);
                $('#chael').css('left', miLeft);
            } else {
                $('#mi').css('left', 0); // back to 0 because .chael is display: none
            }
        } else {
            $('#mi').css('left', 0); // reset in case of window resize
            $('#chael').css('left', 0); // reset in case of window resize
        }
    }

    updateLiu(); // set Liu position on document ready
    $('#mi').css('opacity', 1);
    $('#liu').css('opacity', 1);

    $(window).scroll(function(){
        updateLiu();
    });

    $('#navbar a').click(function(event) {
        event.preventDefault(); // prevent default behavior
    });

    $('#navbar').on('click', '.nav', function(event) {
        var posCurrent = $(window).scrollTop()
        var posTarget = $($(this).attr('href')).offset().top - $('#navbar').outerHeight()
        $('html, body').animate({
            scrollTop: posTarget
        }, Math.abs(posTarget - posCurrent)/2);
    });
});
