$(function() {
    $("#liu").css('left', $("#mi").css('width'));
    $("#liu").css('top', $("#mi").css('height'));

    $("#name").hover(function(){
        $("#liu").animate({
            top: 0
        }, 400);
        $("#chael").animate({
            opacity: 0
        }, 400);
    }, function(){
        $("#liu").animate({
            top: $("#mi").css('height')
        }, 400);
        $("#chael").animate({
            opacity: 1
        }, 400);
    });
});
