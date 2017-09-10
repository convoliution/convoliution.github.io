$(function() {
    updateLogo(); // set Logo position on document ready
    updateUnderline(); // set Underline position on document ready
    $('#mi').css('opacity', 1);
    $('#liu').css('opacity', 1);

    $(window).scroll(function(){
        updateLogo();
        updateUnderline();
    });

    $('#navbar a').click(function(event) {
        event.preventDefault();
        var posCurrent = $(window).scrollTop();
        var posTarget = $($(this).attr('href')).offset().top - $('#navbar').outerHeight();
        $('html, body').animate({
            scrollTop: posTarget
        }, 250 + Math.abs(posTarget - posCurrent)/3);
    });

    $(window).resize(function() {
        updateLogo();
        updateUnderline();
    });

    function updateLogo() {
        isCompactNavbar = $('#logo').css('align-items') === 'normal';

        if (isCompactNavbar) {
            var minLiuLeft = -$('#chael').outerWidth()/2;
            var maxMiLeft = $('#chael').outerWidth()/2;
            var miLeft = maxMiLeft*$(window).scrollTop()/$('#landing').outerHeight();
        } else {
            var minLiuLeft = -$('#chael').outerWidth();
        }
        var liuLeft = minLiuLeft*$(window).scrollTop()/$('#landing').outerHeight(); // relate 'mi liu' distance to scroll distance

        // #liu position and #chael opacity
        if (liuLeft >= 0) {
            $('#liu').css('left', 0);
            $('#chael').css('opacity', 1);
            $('#chael').css('display', 'inline-block');
        } else if (liuLeft > minLiuLeft) {
            $('#liu').css('left', liuLeft);
            $('#chael').css('opacity', 1 - liuLeft/minLiuLeft);
            $('#chael').css('display', 'inline-block');
        } else {
            $('#liu').css('left', 0); // back to 0 because .chael is display: none
            $('#chael').css('opacity', 0);
            $('#chael').css('display', 'none');
        }

        // #mi and #chael positions
        if (isCompactNavbar) {
            if (liuLeft >= 0) {
                $('#mi').css('left', 0);
                $('#chael').css('left', 0);
            } else if (liuLeft > minLiuLeft) {
                $('#mi').css('left', miLeft);
                $('#chael').css('left', miLeft);
            } else {
                $('#mi').css('left', 0); // back to 0 because .chael is display: none
            }
        } else {
            $('#mi').css('left', 0); // reset in case of window resize
            $('#chael').css('left', 0); // reset in case of window resize
        }
    }

    function updateUnderline() {
        var actionDistance = 8*$('#navbar').outerHeight();
        var aboutTop = $('#about').position().top - $('#navbar').outerHeight();
        var aboutLeft = $('#menu-about').position().left;
        var aboutWidth = $('#menu-about').outerWidth(true);
        var projectsTop = $('#projects').position().top - $('#navbar').outerHeight();
        var projectsLeft = $('#menu-projects').position().left;
        var projectsWidth = $('#menu-projects').outerWidth(true);
        var contactTop = $('#contact').position().top - $('#navbar').outerHeight();
        var contactLeft = $('#menu-contact').position().left;
        var contactWidth = $('#menu-contact').outerWidth(true);
        var posCurrent = $(window).scrollTop();
        if (posCurrent < aboutTop - actionDistance) {
            $('#underline').css('left', aboutLeft);
            $('#underline').css('width', 0);
        } else if (posCurrent < aboutTop) {
            var relPosCurrent = posCurrent - aboutTop + actionDistance;
            $('#underline').css('left', aboutLeft);
            $('#underline').css('width', relPosCurrent*aboutWidth/actionDistance);
        } else if (posCurrent < projectsTop - actionDistance) {
            $('#underline').css('left', aboutLeft);
            $('#underline').css('width', aboutWidth);
        } else if (posCurrent < projectsTop) {
            var relPosCurrent = posCurrent - projectsTop + actionDistance;
            $('#underline').css('left', (relPosCurrent*(projectsLeft-aboutLeft)/actionDistance)+aboutLeft);
            $('#underline').css('width', (relPosCurrent*(projectsWidth-aboutWidth)/actionDistance)+aboutWidth);
        } else if (posCurrent < contactTop - actionDistance) {
            $('#underline').css('left', projectsLeft);
            $('#underline').css('width', projectsWidth);
        } else if (posCurrent < contactTop) {
            var relPosCurrent = posCurrent - contactTop + actionDistance;
            $('#underline').css('left', (relPosCurrent*(contactLeft-projectsLeft)/actionDistance)+projectsLeft);
            $('#underline').css('width', (relPosCurrent*(contactWidth-projectsWidth)/actionDistance)+projectsWidth);
        } else {
            $('#underline').css('left', contactLeft);
            $('#underline').css('width', contactWidth);
        }
    }
});
