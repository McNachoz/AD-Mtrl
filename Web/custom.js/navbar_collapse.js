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


// document.body.style.zoom="80%"

  // Smooth scroll for the menu and links with .scrollto classes
  // $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function() {
  //   if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
  //     var target = $(this.hash);
  //     if (target.length) {
  //       var top_space = 0;

  //       if ($('#header').length) {
  //         top_space = $('#header').outerHeight();

  //         if( ! $('#header').hasClass('header-fixed') ) {
  //           top_space = top_space - 20;
  //         }
  //       }

  //       $('html, body').animate({
  //         scrollTop: target.offset().top - top_space
  //       }, 500, 'easeInOutExpo');

  //       if ($(this).parents('.nav-menu').length) {
  //         $('.nav-menu .menu-active').removeClass('menu-active');
  //         $(this).closest('li').addClass('menu-active');
  //       }

  //       if ($('body').hasClass('mobile-nav-active')) {
  //         $('body').removeClass('mobile-nav-active');
  //         $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
  //         $('#mobile-body-overly').fadeOut();
  //       }
  //       return false;
  //     }
  //   }
  // });

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


// $("#myModal").modal("show");
// $("#myModal").css("z-index", "1500");


// var element = document.getElementById("body");
// element.innerHTML += "<iframe src='http://www.google.com' height='200' width='" + document.body.clientWidth * 0.8 + "'/>";

// window.onload = function(){
//   let ifElem = document.getElementById("iframe-id");
//   ifElem.contentWindow.document.documentElement.style.fontSize="80%";
// }

});



// jQuery(document).ready(function( $ ) {

//   // Stick the header at top on scroll
//   $("#header").sticky({topSpacing:0, zIndex: '50'});


// });








