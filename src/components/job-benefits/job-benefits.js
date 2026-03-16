import './job-benefits.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const markers = document.querySelectorAll('.job-benefits__item');
markers.forEach((marker) => {
  ScrollTrigger.create({
    trigger: marker,
    start: 'top 80%',
    end: 'bottom top',
    duration: 2,
    onEnter: () => {
      marker.classList.add('job-benefits__item--show');
    },
  });
});
