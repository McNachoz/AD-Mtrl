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
function debounce( fn, threshold ) {
    var timeout;
    threshold = threshold || 100;
    return function debounced() {
        clearTimeout( timeout );
        var args = arguments;
        var _this = this;
        function delayed() {
            fn.apply( _this, args );
        }
        timeout = setTimeout( delayed, threshold );
    };
}



 // trigger isotope again after images have loaded
//  $container.imagesLoaded( function(){
//    $(window).smartresize();
//  });

// $(window).resize(function(){
//     $("#isotope").masonry().masonry("reloadItems");
//  });




