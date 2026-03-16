import './main-trainers.scss';

import Swiper from 'swiper';
import {
  Navigation,
  Pagination,
  Scrollbar,
} from 'swiper/modules';

const mainTrainers = document.querySelector('.main-trainers');
if (mainTrainers) {
  const slider = mainTrainers.querySelector('.swiper');

  const layoutNolint = new Swiper(slider, {
    modules: [Navigation, Pagination, Scrollbar],
    // Optional parameters
    slidesPerView: 'auto',
    spaceBetween: 20,
    loop: false,
    touchEventsTarget: 'container',
    // Scrollbar
    scrollbar: {
      el: '.main-trainers__scrollbar',
      dragClass: 'main-trainers__scrollbar-drag',
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
}
