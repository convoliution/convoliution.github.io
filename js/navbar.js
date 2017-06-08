$(function() {
    var maxLiuLeft = $('#chael').outerWidth();
    $('#liu').css('left', maxLiuLeft);
    var liuLeft;
    function updateLiu() {
        liuLeft = maxLiuLeft + 0 - $(window).scrollTop()/4; // relate scroll distance to 'mi liu' distance
        if (liuLeft >= maxLiuLeft) {
            $('#logo').removeClass('nav');
            $('#logo').css('cursor', 'default')
            $('#liu').css('left', maxLiuLeft);
            $('#chael').css('opacity', 1);
            $('#chael').css('display', 'inline-block');
        } else if (liuLeft >= 0) {
            $('#logo').removeClass('nav');
            $('#logo').css('cursor', 'default')
            $('#liu').css('left', liuLeft);
            $('#chael').css('opacity', liuLeft/maxLiuLeft);
            $('#chael').css('display', 'inline-block');
        } else {
            $('#logo').addClass('nav');
            $('#logo').css('cursor', 'pointer');
            $('#liu').css('left', 0);
            $('#chael').css('opacity', 0);
            $('#chael').css('display', 'none');
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
        }, 500);
    });
});
