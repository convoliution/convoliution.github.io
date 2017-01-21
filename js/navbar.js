$(function() {
    var minLiuLeft = parseFloat($(".navbar > .container-fluid").css('padding-left')) + $("#logo > .mi").width();
    var maxLiuLeft = minLiuLeft + $("#logo > .chael").width() + 6.18;
    $("#logo > .liu").css('left', maxLiuLeft);

    $(window).scroll(function(){
        var liuLeft = maxLiuLeft - $(window).scrollTop()/4;
        if (liuLeft > minLiuLeft) {
            $("#logo > .liu").css('left', liuLeft);
            $("#logo > .chael").css('opacity', (liuLeft - minLiuLeft)/(maxLiuLeft - minLiuLeft));
        } else {
            $("#logo > .liu").css('left', minLiuLeft);
            $("#logo > .chael").css('opacity', 0);
        }
    })

    $(window).mousemove(function(){
        $("#logo").css('visibility', 'visible');
        $("#logo").animate({
            opacity: 1
        }, 500);
    });
});
