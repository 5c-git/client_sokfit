import './header.scss';
import { getPaddingOnBody, getPaddingFromBody } from '../../utils/utils';

const header = document.querySelector('header');
if (header) {
  const headerDropdown = header.querySelector('.header-dropdown');
  const burger = header.querySelector('.header__burger');
  const burger2 = header.querySelector('.header-dropdown__burger');
  const overlay = header.querySelector('.header__overlay');

  const animateIn = () => {
    console.log('animateIn');

    headerDropdown.classList.remove('header-dropdown--in');
    headerDropdown.removeEventListener('animationend', animateIn);
  };

  const animateOut = () => {
    console.log('animateOut');

    getPaddingFromBody();
    header.classList.remove('header--dropdown');
    headerDropdown.classList.remove('header-dropdown--out');

    headerDropdown.removeEventListener('animationend', animateOut);
  };

  burger.addEventListener('click', () => {
    getPaddingOnBody();
    headerDropdown.addEventListener('animationend', animateIn);

    header.classList.add('header--dropdown');
    headerDropdown.classList.add('header-dropdown--in');
  });

  burger2.addEventListener('click', () => {
    headerDropdown.addEventListener('animationend', animateOut);

    headerDropdown.classList.add('header-dropdown--out');
  });

  overlay.addEventListener('click', () => {
    headerDropdown.addEventListener('animationend', animateOut);

    headerDropdown.classList.add('header-dropdown--out');
  });

  const onModalEscPress = (evt) => {
    if (evt.code === 'Escape') {
      evt.preventDefault();
      headerDropdown.addEventListener('animationend', animateOut);

      headerDropdown.classList.add('header-dropdown--out');
    }
  };

  document.addEventListener('keydown', onModalEscPress);

  // Скрывает шапку при скроле вниз
  const hideHeaderOnMove = () => {
    let scrollPosition = 0;
    let hideChecker = 0;
    let showChecker = 0;
    window.addEventListener('scroll', () => {
      if (window.pageYOffset >= scrollPosition && window.pageYOffset >= header.offsetHeight) {
        showChecker = 0;
        hideChecker += (window.pageYOffset - scrollPosition);
        scrollPosition = window.pageYOffset;
      } else {
        showChecker += (scrollPosition - window.pageYOffset);
        hideChecker = 0;
        scrollPosition = window.pageYOffset;
      }

      if (showChecker >= 300) {
        header.classList.remove('header--hidden');
        hideChecker = 0;
      } else if (hideChecker >= 300) {
        header.classList.add('header--hidden');
      }
    });
  };

  hideHeaderOnMove();

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 0 && !header.classList.contains('header--fixed')) {
      header.classList.add('header--fixed');
    } else if (window.pageYOffset === 0) {
      header.classList.remove('header--fixed');
    }
  });
}
