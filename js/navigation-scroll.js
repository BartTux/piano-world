$(document).ready(function(){
    var stickyNav = function(){
        var scrollY = $(window).scrollTop();
        if (scrollY > 90) {
            $('.navigation').addClass('sticky-navigation');
            $('.logo').addClass('sticky-logo');
            $('.nav-items').addClass('sticky-nav-items');
            $('.nav-social').addClass('sticky-nav-social');
        } else {
            $('.navigation').removeClass('sticky-navigation');
            $('.logo').removeClass('sticky-logo');
            $('.nav-items').removeClass('sticky-nav-items');
            $('.nav-social').removeClass('sticky-nav-social');
        }
    };
    stickyNav();
    $(window).scroll(function(){
        stickyNav();
    });
});
