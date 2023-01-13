// JavaScript Document
// jQuery('#custom-owl').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:1
//         },
//         1000:{
//             items:1
//         }
//     }
// });

  
  
jQuery('.count-number').each(function () {
    jQuery(this).prop('Counter',0).animate({
        Counter: jQuery(this).text()
    }, {
      
      //chnage count up speed here
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            jQuery(this).text(Math.ceil(now));
        }
    });
});


$(document).ready(function(){
    var owl = $('.main-slider');
      owl.owlCarousel({
          autoplay: true,
          autoplayTimeout: 4000,
          loop: true,
          items: 1,
          center: true,
          nav: true,
          thumbs: true,
          thumbImage: false,
          thumbsPrerendered: true,
          thumbContainerClass: 'owl-thumbs',
          thumbItemClass: 'owl-thumb-item',
          navText: ['<span class="prev">＜</span>','<span class="next">＞</span>'],
      });
  });
  
  
  