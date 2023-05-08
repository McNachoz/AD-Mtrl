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

$(function() {
    $('.js-scroll-trigger').click(function (event) {
      $('.navbar-collapse').collapse('hide');
    });
  });

// back to top button
//   jquery(document).ready(function)

  $(window).scroll(function () {
    if ($(this).scrollTop() > 90) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
});
$('.back-to-top').click(function () {
    $('html, body').animate({scrollTop: 0}, 0, 'easeInOutExpo');
    return false;
});










