$(function() {
    var maxLiuLeft = $("#logo > #chael").width() + 8;
    $("#logo > #liu").css({
        'left': maxLiuLeft
    });
    var liuLeft;
    $(window).scroll(function(){

        liuLeft = maxLiuLeft + 0 - $(window).scrollTop()/4; // relate scroll distance to "mi liu" distance
        if (liuLeft >= maxLiuLeft) {
            $("#logo").css('cursor', 'default')
            $("#logo > #liu").css('left', maxLiuLeft);
            $("#logo > #chael").css('opacity', 1);
            $("#logo > #chael").css('display', 'inline-block');
        } else if (liuLeft >= 0) {
            $("#logo").css('cursor', 'default')
            $("#logo > #liu").css('left', liuLeft);
            $("#logo > #chael").css('opacity', liuLeft/maxLiuLeft);
            $("#logo > #chael").css('display', 'inline-block');
        } else {
            $("#logo").css('cursor', 'pointer');
            $("#logo > #liu").css('left', 0);
            $("#logo > #chael").css('opacity', 0);
            $("#logo > #chael").css('display', 'none');
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
