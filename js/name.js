$(window).on('load', function() {
    $("#cover").fadeOut(1000);
});

$(function() {


    $("#liu").css({
        'left': $("#mi").width(),
        'top': $("#mi").width()
    });
    $(window).mousemove(function(){
        $("#liu").animate({
            top: 0
        }, 400);
        $("#chael").animate({
            opacity: 0
        }, 400, function() {
            $(this).css('display', 'none');
        });
    });
});
