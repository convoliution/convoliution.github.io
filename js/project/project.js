// navbar
$(function() {
    var logoSection = '#table-of-contents';

    navbar.initNavbar();
    navbar.enableNav();

    navbar.updateLogo(logoSection); // set Logo position on document ready

    $(window).scroll(function(){
        navbar.updateLogo(logoSection);
    });

    $(window).resize(function() {
        navbar.updateLogo(logoSection);
    });
});
