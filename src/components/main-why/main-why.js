import './main-why.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const markers = document.querySelectorAll('.main-why__item');
markers.forEach((marker) => {
  ScrollTrigger.create({
    trigger: marker,
    start: 'top 80%',
    end: 'bottom top',
    duration: 2,
    onEnter: () => {
      marker.classList.add('main-why__item--show');
    },
  });
});
