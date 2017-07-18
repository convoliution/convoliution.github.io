$(function() {
    $('#content').css('padding-top', $('#navbar').height());
    $('.section').height($('.section').height() - $('#navbar').height())
});
