
  
//   OLD CAROUSEL JS
//   $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:false,
//     autoplay:true,
//     // autoplayTimeout: 1000,
//     loop:true,
//     dots:false,
//     // stagePadding: 50,
//     responsive:{
//         0:{
//             items:1,
//         },
//         600:{
//             items:3,
//         },
//         1000:{
//             items:5,
//         }
//     }
// })

      
// Owlcarousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
      margin:10,
       dots:false,
  
      nav:true,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true,
      center: true,
      navText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>"
      ],
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:3
          }
      }
    });
  });
