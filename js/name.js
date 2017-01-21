$(function() {
    $("#name > .liu").css({
        'left': $("#name > .mi").width(),
        'top': $("#name > .mi").width()
    });
    $(window).mousemove(function(){
        $("#name > .liu").animate({
            top: 0
        }, 500);
        $("#name > .chael").animate({
            opacity: 0
        }, 400, function() {
            $(this).css('display', 'none');
        });
    });
});
