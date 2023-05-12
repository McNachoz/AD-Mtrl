// $(function() {
//     $("body").click(function(e){
//         if(e.target.getAttribute("class")==="navbar-collapse"||$(e.target).parents(".navbar-collapse").length>0)
//         {

//         }
//      else
//      {
//          if($(".navbar-collapse").hasClass("in")==true)
//             {
//               $(".navbar-toggler")[0].click();
//             }

//      }


//     });
// });


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
    if ($(this).scrollTop() > 90) {
        $('.back-to-top').fadeIn('default');
    } else {
        $('.back-to-top').fadeOut('default');
    }
});
$('.back-to-top').click(function () {
    $('html, body').animate({scrollTop: 0},0, 'easeInOutExpo');
    return false;
});
// $(window).scroll(function() {
//     if ($(this).scrollTop() > 100) {
//       $('.back-to-top').fadeIn('default');
//     } else {
//       $('.back-to-top').fadeOut('default');
//     }
//   });
//   $('.back-to-top').click(function(){
//     $('html, body').animate({scrollTop : 0},500, 'easeInOutExpo');
//     return false;
//   });


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

});









