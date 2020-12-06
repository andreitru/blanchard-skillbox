import Swiper from "../vendor/swiper-bundle.min";

var mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  slidesPerColumn: 2,
  spaceBetween: 50,
  slidesPerGroup: 3,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

var editionsSlider = new Swiper('.editions-slider', {
  slidesPerView: 3,
  spaceBetween: 50,
  slidesPerGroup: 3,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var editionsSlider = new Swiper('.projects-slider', {
  slidesPerView: 3,
  spaceBetween: 50,
  slidesPerGroup: 3,
  // pagination: {
  //   el: '.swiper-pagination',
  //   type: 'fraction',
  // },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})
