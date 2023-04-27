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

$(function() {
    $(document).click(function (event) {
      $('.navbar-collapse').collapse('hide');
    });
  });

//   $(document).on('click', 'someyourContainer .dropdown-menu', function (e) {
//     e.stopPropagation();
//   });


// $("dropdown-menu").click(function(e){
//     e.stopPropagation();
//  })

// $('.dropdown-menu').on('click', function(event){
//     var events = $._data(document, 'events') || {};
//     events = events.click || [];
//     for(var i = 0; i < events.length; i++) {
//         if(events[i].selector) {

//             //Check if the clicked element matches the event selector
//             if($(event.target).is(events[i].selector)) {
//                 events[i].handler.call(event.target, event);
//             }

//             // Check if any of the clicked element parents matches the 
//             // delegated event selector (Emulating propagation)
//             $(event.target).parents(events[i].selector).each(function(){
//                 events[i].handler.call(this, event);
//             });
//         }
//     }
//     event.stopPropagation(); //Always stop propagation
// });
