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
    $('.js-scroll-trigger').click(function (event) {
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

// const sections = document.querySelectorAll("section");
// const navLi = document.querySelectorAll(".nav li");
// window.addEventListener("scroll", () => {
//   let current = "";
//   sections.forEach((section) => {
//     const sectionTop = section.offsetTop;
//     const sectionHeight = section.clientHeight;
//     if (pageYOffset >= sectionTop - sectionHeight / 3) {
//       current = section.getAttribute("id");
//     }
//   });

//   navLi.forEach((li) => {
//     li.classList.remove("active-link");
//     if (li.classList.contains(current)) {
//       li.classList.add("active-link");
//     }
//   });
// });
