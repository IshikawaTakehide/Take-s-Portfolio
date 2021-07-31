document.addEventListener('DOMContentLoaded', function() {
  const hero = new Slider();

});

class Slider {
  constructor() {
    this.swiper = new Swiper('.swiper-container', {
      // Optional parameters
      // direction: 'vertical',
      loop: true,
      grabCursor: true,
      // effect: 'cube',
      effect: 'coverflow',
      centeredSlides: true,
      slidesPerView:1,
      speed:800,
      breakpoints: {
        960: {
          slidesPerView:2,
        }
      },
      autoplay: {
        delay:3500,
        disableOnInteraction:false
      }
    });
  }
}


// const swiper = new Swiper('.swiper-container', {

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });