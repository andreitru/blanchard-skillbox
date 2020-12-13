import Swiper from "../vendor/swiper-bundle.min";

var gallerySlider = new Swiper('.gallery-slider', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerColumn: 1,
  spaceBetween: 10,
  pagination: {
    el: '.pagination-block__pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.pagination-block__button-next',
    prevEl: '.pagination-block__button-prev',
  },
  breakpoints: {
    1501: {
      slidesPerView: 3,
      slidesPerColumn: 2,
      spaceBetween: 50,
      slidesPerGroup: 3,
    },
    1201: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
    },
    577: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
    },
    500: {
      slidesPerView: 2,
      slidesPerColumn: 1,
      spaceBetween: 20,
      slidesPerGroup: 2,
    },
  }
})

var editionsSlider = new Swiper('.editions-slider', {
  init: false,
  slidesPerView: 2,
  spaceBetween: 34,
  slidesPerGroup: 2,
  pagination: {
    el: '.pagination-block__pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.pagination-block__button-next',
    prevEl: '.pagination-block__button-prev',
  },
  breakpoints: {
    1201: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
      slidesPerGroup: 2,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
    }
  }
});

var projectsSlider = new Swiper('.projects-slider', {
  slidesPerView: 1,
  // spaceBetween: 50,
  slidesPerGroup: 1,
  navigation: {
    nextEl: '.pagination-block__button-next',
    prevEl: '.pagination-block__button-prev',
  },
  breakpoints: {
    1025: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
    },
    769: {
      slidesPerView: 2,
      spaceBetween: 50,
      slidesPerGroup: 2,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
      slidesPerGroup: 1,
    }
  },
})

if (document.body.clientWidth < 577) {
  var eventsSlider = new Swiper('.events-slider', {
    slidesPerView: 1,
    setWrapperSize: true,
    pagination: {
      el: '.events-slider__pagination',
      type: 'bullets',
      clickable: true
    }
  })
}

if (document.body.clientWidth > 576) {
  editionsSlider.init();
}

if (document.body.clientWidth <= 576) {
  try {
    editionsSlider.destroy();
  } catch (error) {
    console.log(error.message)
  }
}
