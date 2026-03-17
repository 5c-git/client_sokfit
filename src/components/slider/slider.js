import './slider.scss';

import Swiper from 'swiper';
import {
  Navigation,
  EffectFade,
  Scrollbar,
  Autoplay,
} from 'swiper/modules';


const sliderInit = (container) => {
  if (!container) return;

  const slider = container;

  const swiper = slider.querySelector('.swiper');
  if (!swiper) return;

  if (swiper.swiperInstance) return;

  const buttonPrev = slider.querySelector('.slider__button--prev');
  const buttonNext = slider.querySelector('.slider__button--next');
  const scrollbar = slider.querySelector('.slider__scrollbar');

  const type = slider.dataset.slider;
  const autoplayAttr = slider.dataset.autoplay;

  const isCarousel = type === 'carousel';
  const modeConfig = isCarousel
    ? {
      slidesPerView: 'auto',
      spaceBetween: 0,
    }
    : {
      slidesPerView: 1,
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
    };

  const autoplayConfig = autoplayAttr
    ? {
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
    }
    : {};

  const swiperNolint = new Swiper(swiper, {
    modules: [Navigation, Scrollbar, EffectFade, Autoplay],
    slidesPerView: 'auto',
    spaceBetween: 0,
    loop: false,

    ...modeConfig,
    ...autoplayConfig,

    // touchEventsTarget: 'container',

    scrollbar: {
      el: scrollbar,
      dragClass: 'slider__scrollbar-drag',
      draggable: true,
    },

    navigation: {
      prevEl: buttonPrev,
      nextEl: buttonNext,
      disabledClass: 'slider__button--disabled',
    },

    breakpoints: {},
  });

  // Сохраняем ссылку на слайдер.
  swiper.swiperInstance = swiperNolint;
};

const sliders = document.querySelectorAll('.slider');
sliders.forEach((el) => {
  sliderInit(el);
});
