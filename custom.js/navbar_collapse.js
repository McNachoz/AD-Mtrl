// document.body.style.zoom="80%"

// The nav menu will close when clicked outside
jQuery(document).ready(function( $ ) {

$(function() {
    $('.js-scroll-trigger').click(function (event) {
      $('.navbar-collapse').collapse('hide');
    });
  });

// back to top button
//   jquery(document).ready(function)

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('default');
    } else {
        $('.back-to-top').fadeOut('default');
    }
});
$('.back-to-top').click(function () {
    $('html, body').animate({scrollTop: 0},0, 'easeInOutExpo');
    return false;

});

$("#header").sticky({topSpacing:0, zIndex: '50'});




function isElementInViewport (el) {
  if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
  }
  var position = el.getBoundingClientRect();
  if(position.top >= 0 && position.bottom <= window.innerHeight) {
    return true;
  }
  if(position.top < window.innerHeight && position.bottom >= 0) {
    return true;
  }
  return false;
}
$("[data-aos]").each(function() {
  if (isElementInViewport($(this))) {
    $(this).removeAttr("data-aos");
  }
});




});












