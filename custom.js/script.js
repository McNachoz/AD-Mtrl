(function(){

    'use strict';

    var $team = $('.team');

    $team.isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows'
    });

    $('ul.filters > li').on('click', function(e){

    e.preventDefault();

    var filter =$(this).attr('data-filter')

    $('ul.filters > li').removeClass('active');
    $(this).addClass('active');

    $team.isotope({filter: filter});

    });

    if($(".modal").length>0) {
        $(".modal").each(function() {
            $(".modal").prependTo( "body" );
        });
    }


})(jQuery);




