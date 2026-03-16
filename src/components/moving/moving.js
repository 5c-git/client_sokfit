import './moving.scss';

// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);
// const movings = document.querySelectorAll('.moving');

// movings.forEach((moving) => {
//   const rows = moving.querySelectorAll('.moving__block');
//   const translateX = [
//     {
//       start: -30,
//       end: 30,
//     },
//     {
//       start: 30,
//       end: -30,
//     },
//     {
//       start: -40,
//       end: 40,
//     },
//   ];

//   rows.forEach((row, i) => {
//     const { start } = translateX[i];
//     const { end } = translateX[i];

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: row,
//         scrub: 2,
//       },
//     });

//     ScrollTrigger.saveStyles(row);
//     ScrollTrigger.matchMedia({
//       // desktop
//       '(min-width: 768px)': function () {
//         tl.from(row, {
//           xPercent: start,
//           ease: 'none',
//         })
//           .to(row, {
//             xPercent: end,
//             ease: 'none',
//           });
//       },

//       // mobile
//       '(max-width: 767px)': function () {
//         // Any ScrollTriggers created inside these functions are segregated and get
//         // reverted/killed when the media query doesn't match anymore.
//         tl.from(row, {
//           xPercent: start,
//           ease: 'none',
//         })
//           .to(row, {
//             xPercent: end,
//             ease: 'none',
//           });
//       },

//       // all
//       all() {
//         // ScrollTriggers created here aren't associated with a particular media query,
//         // so they persist.
//       },
//     });
//   });
// });
