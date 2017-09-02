$(function() {
    function updateLiu() {
        if ($('#logo').css('align-items') === 'normal') { // compact navbar
            var minLiuLeft = -$('#chael').outerWidth()/2;
            var maxMiLeft = $('#chael').outerWidth()/2;
            var liuLeft = minLiuLeft*$(window).scrollTop()/$('#landing').outerHeight();
            var miLeft = maxMiLeft*$(window).scrollTop()/$('#landing').outerHeight();
            if (liuLeft >= 0) {
                $('#logo').removeClass('nav');
                $('#logo').css('cursor', 'default');
                $('#mi').css('left', 0);
                $('#chael').css('left', 0);
                $('#liu').css('left', 0);
                $('#chael').css('opacity', 1);
                $('#chael').css('display', 'inline-block');
            } else if (liuLeft > minLiuLeft) {
                $('#logo').removeClass('nav');
                $('#logo').css('cursor', 'default');
                $('#mi').css('left', miLeft);
                $('#chael').css('left', miLeft);
                $('#liu').css('left', liuLeft);
                $('#chael').css('opacity', 1 - liuLeft/minLiuLeft);
                $('#chael').css('display', 'inline-block');
            } else {
                $('#logo').addClass('nav');
                $('#logo').css('cursor', 'pointer');
                $('#mi').css('left', 0); // back to 0 because .chael is display: none
                $('#liu').css('left', 0); // back to 0 because .chael is display: none
                $('#chael').css('opacity', 0);
                $('#chael').css('display', 'none');
            }
        } else { // normal navbar
            var minLiuLeft = -$('#chael').outerWidth();
            var liuLeft = minLiuLeft*$(window).scrollTop()/$('#landing').outerHeight(); // relate scroll distance to 'mi liu' distance
            if (liuLeft >= 0) {
                $('#logo').removeClass('nav');
                $('#logo').css('cursor', 'default');
                $('#liu').css('left', 0);
                $('#chael').css('opacity', 1);
                $('#chael').css('display', 'inline-block');
            } else if (liuLeft > minLiuLeft) {
                $('#logo').removeClass('nav');
                $('#logo').css('cursor', 'default');
                $('#liu').css('left', liuLeft);
                $('#chael').css('opacity', 1 - liuLeft/minLiuLeft);
                $('#chael').css('display', 'inline-block');
            } else {
                $('#logo').addClass('nav');
                $('#logo').css('cursor', 'pointer');
                $('#liu').css('left', 0); // back to 0 because .chael is display: none
                $('#chael').css('opacity', 0);
                $('#chael').css('display', 'none');
            }
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
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - $('#navbar').outerHeight()
        }, 1000);
    });
});
