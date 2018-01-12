// navbar
$(function() {
    var logoSection = '#landing';

    navbar.initNavbar();
    navbar.enableNav();

    navbar.updateLogo(logoSection); // set Logo position on document ready
    navbar.updateUnderline(); // set Underline position on document ready

    $(window).scroll(function(){
        navbar.updateLogo(logoSection);
        navbar.updateUnderline();
    });

    $(window).resize(function() {
        navbar.updateLogo(logoSection);
        navbar.updateUnderline();
    });

    $('#logo').click(function(event) {
        event.preventDefault();
        var posCurrent = $(window).scrollTop();
        var posTarget = $($(this).attr('href')).offset().top - $('#navbar').outerHeight();
        $('html, body').animate({
            scrollTop: posTarget
        }, 250 + Math.abs(posTarget - posCurrent)/3);
    });
});

// contact section
$(function() {
    // Obfuscate email address
    $('#email').attr('href', "mailto:"+String.fromCharCode(((!+[]+[])[+[]]+(![]+[])[+!+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[!+[]+!+[]]).charCodeAt(2)+1)+([![]]+[][[]])[+!+[]+[+[]]]+String.fromCharCode((([][[]]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(+[![]]+[+(+!+[]+(!+[]+[])[!+[]+!+[]+!+[]]+(+!+[])+(+[])+(+[])+(+[]))])[+!+[]+[+[]]]).charCodeAt(1)+2)+String.fromCharCode((([![]]+[][[]])[+!+[]+[+[]]]).charCodeAt(0)-1)+(![]+[])[+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(![]+[])[!+[]+!+[]]+String.fromCharCode((([][[]]+[])[+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!+[]+[])[+!+[]]+(+[![]]+[])[+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!+[]+[])[+[]]).charCodeAt(3)-14)+String.fromCharCode(((![]+[])[!+[]+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(![]+[])[+!+[]]+([][[]]+[])[+!+[]]).charCodeAt(3)-1)+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+([![]]+[][[]])[+!+[]+[+[]]]+([][[]]+[])[+[]]+(+(+!+[]+[+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]+[!+[]+!+[]]+[+[]])+[])[+!+[]]+String.fromCharCode(((![]+[])[!+[]+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(![]+[])[!+[]+!+[]+!+[]]).charCodeAt(2)-6)+(!![]+[])[!+[]+!+[]+!+[]]);

    // disable email link when user is trying to highlight address
    function dist(loc1, loc2) {
        return Math.sqrt(Math.pow(loc2.x - loc1.x, 2) + Math.pow(loc2.y - loc1.y, 2))
    }
    var dragDist = 75;
    var isDrag = false;
    var mouseStartLoc = {
        'x': 0,
        'y': 0
    };
    $('#email').mousedown(function(event) {
        mouseStartLoc = {
            'x': event.pageX,
            'y': event.pageY
        };
    });
    $('#email').mouseup(function(event) {
        mouseEndLoc = {
            'x': event.pageX,
            'y': event.pageY
        };
        if (dist(mouseStartLoc, mouseEndLoc) >= dragDist) {
            isDrag = true;
        }
    });
    $('#email').click(function(event) {
        if (isDrag) {
            event.preventDefault();
            isDrag = false;
        }
    });
});
