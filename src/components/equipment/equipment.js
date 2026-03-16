import './equipment.scss';
import Viewer from 'viewerjs';

import Swiper from 'swiper';
import {
  Navigation,
  EffectFade,
  Scrollbar,
} from 'swiper/modules';
import {
  getPaddingOnBody,
  getPaddingFromBody,
} from '../../utils/utils';

const slider = document.querySelector('.equipment__gallery');
if (slider) {
  const layoutNolint = new Swiper(slider, {
    modules: [Navigation, Scrollbar, EffectFade],
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 20,
    loop: false,
    effect: 'fade',

    // If we need effect
    fadeEffect: {
      crossFade: true,
    },
    touchEventsTarget: 'container',

    // If we need scrollbar
    scrollbar: {
      el: '.equipment__scrollbar',
      dragClass: 'equipment__scrollbar-drag',
      draggable: true,
    },

    // If we need navigation
    navigation: {
      nextEl: '.equipment__button--next',
      prevEl: '.equipment__button--prev',
    },

    // If we need events
    on: {
      slideChange: () => {
        console.log(layoutNolint.activeIndex);
      },
    },
  });

  const viewer = new Viewer(slider, {
    url: 'data-original',
    className: 'viewerjs__zoom',
    loop: false,
    toolbar: {
      zoomIn: {
        show: true,
        size: 'large',
      },
      zoomOut: {
        show: true,
        size: 'large',
      },
      oneToOne: false,
      reset: false,
      prev: {
        show: true,
        size: 'large',
      },
      play: false,
      next: {
        show: true,
        size: 'large',
      },
      rotateLeft: {
        show: true,
        size: 'large',
      },
      rotateRight: {
        show: true,
        size: 'large',
      },
      flipHorizontal: false,
      flipVertical: false,
    },
    navbar: false,
    // movable: false,
    keyboard: false,
    title() {
      return `(${this.index + 1}/${this.length})`;
    },
    // slideOnTouch: false,
    transition: false,
    show() {
      getPaddingOnBody();
    },
    hide() {
      getPaddingFromBody();
    },
    view(event) {
      console.log(event.detail.index);
      layoutNolint.slideTo(event.detail.index, 0, false);
    },
  });
}
