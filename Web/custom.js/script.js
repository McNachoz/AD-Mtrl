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

    // window.setTimeout(function () {
    //     var height = document.body.scrollHeight.toString();
    //     window.external.notify("ContentHeight:" + height);
    // }, 100);


})(jQuery);


// smooth scroll
// $(function(){

// }
// )
// if($(".modal").length>0) {
//     $(".modal").each(function() {
//         $(".modal").prependTo( "body" );
//     });
// }

// const onChange = e => {
//     const pr = window.devicePixelRatio;
//     const media = `(resolution: ${pr}dppx)`;
//     const mql = matchMedia(media);

//     const prString = (pr * 100).toFixed(0);
//     const textContent = `${prString}% (${pr.toFixed(2)})`;

//     console.log(textContent);
//     document.getElementById('out').append(
//       Object.assign(document.createElement('li'), {textContent})
//     )

//     mql.addEventListener('change', onChange, {once: true});
//   };

//   document.getElementById('checkZoom').addEventListener('click', e => onChange());

//   onChange();


