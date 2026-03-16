import './layout.scss';

import Swiper from 'swiper';
import {
  Navigation,
  Pagination,
  Scrollbar,
} from 'swiper/modules';

const layoutSliders = document.querySelectorAll('.layout--slider');
layoutSliders.forEach((layoutSlider, index) => {
  layoutSlider.id = `layout-${index}`;
  const id = `layout-${index}`;

  const slider = layoutSlider.querySelector('.swiper');

  const layoutNolint = new Swiper(slider, {
    modules: [Navigation, Pagination, Scrollbar],
    // Optional parameters
    slidesPerView: 'auto',
    spaceBetween: 20,
    loop: false,
    touchEventsTarget: 'container',
    // Pagination bullets
    pagination: {
      el: `#${id} .layout__slider-pagination`,
      type: 'bullets',
      clickable: true,
      bulletClass: 'layout__slider-bullet',
      bulletActiveClass: 'layout__slider-bullet--active',
    },
    // Navigation arrows
    navigation: {
      prevEl: `#${id} .layout__slider-button--prev`,
      nextEl: `#${id} .layout__slider-button--next`,
      disabledClass: 'layout__slider-button--disabled',
    },
    // Scrollbar
    scrollbar: {
      el: '.layout__scrollbar',
      dragClass: 'layout__scrollbar-drag',
      draggable: true,
    },
    // Responsive breakpoints
    breakpoints: {
      320: {
        spaceBetween: 12,
      },
      767: {
        spaceBetween: 12,
      },
      768: {
        spaceBetween: 20,
      },
    },
  });
});
