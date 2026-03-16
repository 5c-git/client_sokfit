import './move-card.scss';
import VanillaTilt from 'vanilla-tilt';

// const items = document.querySelectorAll('.move-card');

// const SPEED = 0.02;

// const onCardMove = (evt) => {
//   const box = evt.currentTarget.querySelector('.move-card__box');

//   const a = -(evt.offsetY - box.offsetHeight / 2) * SPEED;
//   const b = (evt.offsetX - box.offsetWidth / 2) * SPEED;

//   box.setAttribute('style', `transform: rotateX(${a}deg) rotateY(${b}deg)`);
// };

// const onCardOut = (evt) => {
//   const box = evt.currentTarget.querySelector('.move-card__box');
//   box.removeAttribute('style');
// };

// items.forEach((item) => {
//   item.addEventListener('mousemove', onCardMove);
//   item.addEventListener('mouseout', onCardOut);
// });

const items = document.querySelectorAll('.move-card');
items.forEach((item) => {
  let checker;

  const tiltInit = () => {
    VanillaTilt.init(item, {
      reverse: true,
      max: 5,
      speed: 300,
      glare: true,
      'max-glare': '0.3',
    });

    checker = true;
  };

  if (window.innerWidth > 991) {
    tiltInit();
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth <= 991 && checker) {
      item.vanillaTilt.destroy();
      checker = undefined;
    } else if (window.innerWidth > 991 && !checker) {
      tiltInit();
    }
  });
});
