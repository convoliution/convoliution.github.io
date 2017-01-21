$(function() {
    $(window).mousemove(function(){
        $("#logo").css('visibility', 'visible');
        $("#logo").animate({
            opacity: 1
        }, 500);
    });
});
