import './review-card.scss';
import {
  summonPopUp,
  removePopUp,
} from '../popUp/popUp';

const cards = document.querySelectorAll('.review-card');
cards.forEach((card) => {
  const toggle = card.querySelector('.review-card__more');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const template = card.cloneNode(true);

      summonPopUp({
        template: '#modal--more',
        blockScroll: true,
        overlay: {
          use: true,
          closeOnClick: true,
        },
        esc: {
          closeOnEsc: true,
        },
      });

      const modal = document.querySelector('.modal');
      if (!modal) return;

      const wrapper = modal.querySelector('.modal__wrapper');
      wrapper.appendChild(template);
    });
  }
});
