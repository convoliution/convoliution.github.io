var navbar = {
    initNavbar: () => {
        $('#mi').css('opacity', 1); // initial opacity was 0 while document was loading
        $('#liu').css('opacity', 1); // initial opacity was 0 while document was loading
    },
    enableNav: navID => {
        $(navID + ' a').click(function(event) {
            event.preventDefault();
            var posCurrent = $(window).scrollTop();
            var posTarget = $($(this).attr('href')).offset().top - $('#navbar').outerHeight();
            $('html, body').animate({
                scrollTop: posTarget
            }, 250 + Math.abs(posTarget - posCurrent)/3);
        });
    },
    updateLogo: sectionID => { // works with any page
        isCompactNavbar = $('#logo').css('align-items') === 'normal';

        if (isCompactNavbar) {
            var minLiuLeft = -$('#chael').outerWidth()/2;
            var maxMiLeft = $('#chael').outerWidth()/2;
            var miLeft = maxMiLeft*$(window).scrollTop()/($(sectionID).offset().top + $(sectionID).height() - $('#navbar').outerHeight());
        } else {
            var minLiuLeft = -$('#chael').outerWidth();
        }
        var liuLeft = minLiuLeft*$(window).scrollTop()/($(sectionID).offset().top + $(sectionID).height() - $('#navbar').outerHeight()); // relate 'mi liu' distance to scroll distance

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
    },
    updateUnderline: () => { // works only with home page
        var posCurrent = $(window).scrollTop();

        // store the top positions of each section
        var secTops = {}
        secTops["about"] = $('#about').position().top - $('#navbar').outerHeight();
        secTops["projects"] = $('#projects').position().top - $('#navbar').outerHeight();
        secTops["contact"] = $('#contact').position().top - $('#navbar').outerHeight();

        // identify the previous and next sections
        if (posCurrent < secTops["about"]) {
            var secPrev = "landing";
            var secNext = "about";
        } else if (posCurrent < secTops["projects"]) {
            var secPrev = "about";
            var secNext = "projects";
        } else if (posCurrent < secTops["contact"]) {
            var secPrev = "projects";
            var secNext = "contact";
        } else {
            var secPrev = "contact";
            var secNext = "contact";
        }

        // distance over which underline transitions
        var actionDistance = 0.2 * $('#'+secPrev).outerHeight(); // 20% of previous section's height

        // left position and width of nav button corresponding to next section
        var navNextLeft = $('#menu-'+secNext).position().left;
        var navNextWidth = $('#menu-'+secNext).outerWidth(true);

        if (posCurrent < secTops["about"]) { // first section is animated differently from the rest
            if (posCurrent < secTops[secNext] - actionDistance) { // in section
                $('#underline').css('left', navNextLeft);
                $('#underline').css('width', 0);
            } else { // transition
                var relPosCurrent = posCurrent - secTops[secNext] + actionDistance; // start at value of 0 when transition startss
                $('#underline').css('left', navNextLeft);
                $('#underline').css('width', relPosCurrent*navNextWidth/actionDistance);
            }
        } else {
            // left position and width of nav button corresponding to previous section
            var navPrevLeft = $('#menu-'+secPrev).position().left;
            var navPrevWidth = $('#menu-'+secPrev).outerWidth(true);

            if (posCurrent < secTops[secNext] - actionDistance) { // in section
                $('#underline').css('left', navPrevLeft);
                $('#underline').css('width', navPrevWidth);
            } else { // transition
                var relPosCurrent = posCurrent - secTops[secNext] + actionDistance; // start at value of 0 when transition starts
                $('#underline').css('left', (relPosCurrent*(navNextLeft-navPrevLeft)/actionDistance)+navPrevLeft);
                $('#underline').css('width', (relPosCurrent*(navNextWidth-navPrevWidth)/actionDistance)+navPrevWidth);
            }
        }
    }
}
