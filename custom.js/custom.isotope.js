// $(window).load(function(){

//     var teamIsotope = $('.team-container').isotope({
//         itemSelector: 'team-thumbnail',
//         layoutMode: 'fitRows'
//     });

// $('#team-filters li').on('click', function(){
//     $("team-filters li").removeClass('filter-active');
//     $(this).addClass('filter-active');

//     teamIsotope.isotope({ filter: $(this).data('filter')});
// })
// })


// debounce so filtering doesn't happen every millisecond
// function debounce( fn, threshold ) {
//     var timeout;
//     threshold = threshold || 100;
//     return function debounced() {
//         clearTimeout( timeout );
//         var args = arguments;
//         var _this = this;
//         function delayed() {
//             fn.apply( _this, args );
//         }
//         timeout = setTimeout( delayed, threshold );
//     };
// }


//  $(document).ready(function() {
  // $(window).on('load', function() {
  // var $container = $('.team-container');


  //   $grid = $(".grid").imagesLoaded(function() {
  //     $grid.isotope({
  //       filter: "*",
  //       itemSelector: ".grid-item",
  //       layoutMode: "masonry",
  //       percentPosition: true
  //     });
  //   });

  //   $filters = $(".list");
  //   $filters.click(function() {
  //     $value = $(this).attr("data-filter");
  //     if ($value == "all") {
  //       $grid.imagesLoaded(function() {
  //         $grid.isotope({ filter: "*" });
  //       });
  //     } else {
  //       $grid.imagesLoaded(function() {
  //         $grid.isotope({ filter: "." + $value });
  //       });
  //     }
  //   });
  // });

