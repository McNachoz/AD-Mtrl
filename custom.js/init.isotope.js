// init Isotope
var $grid = $('#team-area').isotope({
    // options
  });
  // filter items on button click


  $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });


<<<<<<< HEAD

=======
>>>>>>> 7bd57c86afcd5f3a040158f7d70a67540e7021f5
