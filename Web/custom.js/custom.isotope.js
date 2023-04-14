$(window).load(function(){

    var teamIsotope = $('.team-container').isotope({
        itemSelector: 'team-thumbnail',
        layoutMode: 'fitRows'
    });

$('#team-filters li').on('click', function(){
    $("team-filters li").removeClass('filter-active');
    $(this).addClass('filter-active');
    
    teamIsotope.isotope({ filter: $(this).data('filter')});
})
})