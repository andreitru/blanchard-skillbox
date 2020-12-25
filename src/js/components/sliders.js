import Swiper from "../vendor/swiper-bundle.min";
import vars from "../_vars";

var gallerySlider = new Swiper('.gallery-slider', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerColumn: 1,
  spaceBetween: 10,
  setWrapperSize: true,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
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
      setWrapperSize: true,
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
    400: {
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

var eventsSlider = new Swiper('.events-slider', {
  init: false,
  slidesPerView: 1,
  setWrapperSize: true,
  pagination: {
    el: '.events-slider__pagination',
    type: 'bullets',
    clickable: true
  }
})

// включение и выключение слайдеров в блоках "События" и "Издания" в зависимости от ширины экрана
export function sliders(width) {
  if (width < 576) {
    if (editionsSlider.initialized === true) {
      editionsSlider.destroy(false);
    }
    vars.$events.forEach(item => {
      item.classList.remove('event--hidden');
    })
    eventsSlider.init();
  } else if (width >= 576) {
    if (eventsSlider.initialized === true) {
      eventsSlider.destroy(false);
    }
    editionsSlider.init();
  }
}
// end
