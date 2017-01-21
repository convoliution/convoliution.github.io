$(function() {
    $("#landing > .liu").css({
        'left': $("#landing > .mi").width(),
        'top': $("#landing > .mi").width()
    });
    $(window).scroll(function(){
        $("#landing > .liu").animate({
            top: 0
        }, 500);
        $("#landing > .chael").animate({
            opacity: 0
        }, 400, function() {
            $(this).css('display', 'none');
        });
    });
});
