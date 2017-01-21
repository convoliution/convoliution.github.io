$(function() {
    var maxLiuLeft = $("#logo > .chael").width() + 6.18;
    $("#logo > .liu").css({
        'left': maxLiuLeft
    });
    var liuLeft;
    $(window).scroll(function(){

        liuLeft = maxLiuLeft + 0 - $(window).scrollTop()/4; // relate scroll distance to "mi liu" distance
        if (liuLeft >= maxLiuLeft) {
            $("#logo").css('cursor', 'default')
            $("#logo > .liu").css('left', maxLiuLeft);
            $("#logo > .chael").css('opacity', 1);
        } else if (liuLeft >= 0) {
            $("#logo").css('cursor', 'default')
            $("#logo > .liu").css('left', liuLeft);
            $("#logo > .chael").css('opacity', liuLeft/maxLiuLeft);
        } else {
            $("#logo").css('cursor', 'pointer');
            $("#logo > .liu").css('left', 0);
            $("#logo > .chael").css('opacity', 0);
        }
    });
    $("#logo").click(function() {
        if (liuLeft <= 0) {
            $("body").animate({
                scrollTop: 0
            }, 500);
        }
    });
});
