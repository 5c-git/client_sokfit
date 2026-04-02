import './popUp.scss';
/* eslint-disable */
import {
  getPaddingOnBody,
  getPaddingFromBody,
} from '../../utils/utils';
/* eslint-enable */

// Классы попапов, которые не должны влиять на разблокировку скролла.
const POPUP_IGNORE_CLASSES = ['cookie', 'modal-zone-info'];

const body = document.querySelector('body');

// Создаём строку вида ":not(.cookie):not(.modal-zone-info)".
const buildPopupSelector = () => {
  const exclude = POPUP_IGNORE_CLASSES.map((cls) => `:not(.${cls})`).join('');
  return `.popUp${exclude}`;
};

// Есть ли ещё открытые попапы, влияющие на scroll lock.
const hasOpenedBlockingPopups = () => document.querySelector(buildPopupSelector());

// Финальное закрытие попапа без анимации.
const finalizeClosePopup = ({
  popup,
  blockScroll = true,
  redirect,
  onPopupEscPress,
}) => {
  if (!popup) return;

  popup.remove();

  // Разблокируем скролл только если больше нет открытых попапов (кроме исключений)
  if (blockScroll && !hasOpenedBlockingPopups()) {
    getPaddingFromBody();
  }

  if (onPopupEscPress) {
    document.removeEventListener('keydown', onPopupEscPress);
  }

  if (redirect) {
    setTimeout(() => {
      window.location.href = redirect;
    }, 300);
  }
};

// Проигрывание входной анимации.
const animatePopupIn = (popup) => {
  const container = popup.querySelector('.popUp__container');
  if (!container) return;

  popup.classList.add('popUp--active');
  container.classList.add('popUp__container--in');

  container.addEventListener(
    'animationend',
    (evt) => {
      if (evt.target !== container) return;
      container.classList.remove('popUp__container--in');
    },
    { once: true }
  );
};

// Проигрывание выходной анимации с последующим удалением.
const animatePopupOut = ({
  popup,
  blockScroll = true,
  redirect,
  onPopupEscPress,
}) => {
  if (!popup) return;

  if (popup.dataset.popupClosing === 'true') return;
  popup.dataset.popupClosing = 'true';

  const container = popup.querySelector('.popUp__container');

  if (!container) {
    finalizeClosePopup({
      popup,
      blockScroll,
      redirect,
      onPopupEscPress,
    });
    return;
  }
  container.classList.remove('popUp__container--in');
  container.classList.add('popUp__container--out');

  let isFinished = false;

  const done = () => {
    if (isFinished) return;
    isFinished = true;

    container.classList.remove('popUp__container--out');

    finalizeClosePopup({
      popup,
      blockScroll,
      redirect,
      onPopupEscPress,
    });
  };

  container.addEventListener(
    'animationend',
    (evt) => {
      if (evt.target !== container) return;
      done();
    },
    { once: true }
  );

  // fallback: если animation не задана или не стартовала
  requestAnimationFrame(() => {
    const styles = window.getComputedStyle(container);

    const durations = styles.animationDuration.split(',').map(parseFloat);
    const delays = styles.animationDelay.split(',').map(parseFloat);

    const maxDuration = Math.max(...durations, 0);
    const maxDelay = Math.max(...delays, 0);
    const totalTime = (maxDuration + maxDelay) * 1000;

    if (totalTime === 0) {
      done();
    } else {
      setTimeout(done, totalTime + 50);
    }
  });
};

// Общая функция открытия модалки
const openPopup = (options) => {
  const {
    template,
    blockScroll = true,
    redirect,
    overlay = {
      use: true,
      closeOnClick: true,
    },
    esc = {
      closeOnEsc: true,
    },
  } = options;

  const popUpName = template.replace(/^[#.]/, '');
  const templateElement = document.querySelector(`#${popUpName}`);

  if (!templateElement) {
    console.warn(`#${popUpName} модального окна не существует.`);
    return;
  }

  if (document.querySelector(`.${popUpName}`)) {
    console.warn(`Модалка ${popUpName} уже открыта.`);
    return;
  }

  const templateContent = templateElement.content.cloneNode(true);
  const popup = templateContent.querySelector(`.${popUpName}`);

  if (!popup) {
    console.error(`В шаблоне #${popUpName} нет элемента с классом .${popUpName}`);
    return;
  }

  body.append(popup);

  if (blockScroll) {
    getPaddingOnBody();
  }

  requestAnimationFrame(() => {
    animatePopupIn(popup);
  });

  const overlayEl = popup.querySelector('.popUp__overlay');
  const closes = popup.querySelectorAll('.popUp__close');

  function closePopup() {
    animatePopupOut({
      popup,
      blockScroll,
      redirect,
      onPopupEscPress,
    });
  }

  function onPopupEscPress(evt) {
    if (!esc.closeOnEsc) return;
    if (evt.code !== 'Escape') return;

    evt.preventDefault();
    closePopup();
  }

  if (overlayEl) {
    if (overlay.use && overlay.closeOnClick) {
      overlayEl.addEventListener('click', closePopup);
    } else if (!overlay.use) {
      overlayEl.remove();
    }
  }

  closes.forEach((close) => close.addEventListener('click', closePopup));

  if (esc.closeOnEsc) {
    document.addEventListener('keydown', onPopupEscPress);
  }

  // сохраняем meta для removePopUp
  popup._popupMeta = {
    blockScroll,
    redirect,
    onPopupEscPress,
  };

  return popup;
};

// Основная функция summonPopUp с поддержкой старого и нового вызова
const summonPopUp = (arg1, arg2, arg3) => {
  if (typeof arg1 === 'object' && arg1 !== null) {
    const {
      template,
      blockScroll = true,
      redirect,
      overlay = {
        use: true,
        closeOnClick: true,
      },
      esc = {
        closeOnEsc: true,
      },
    } = arg1;

    if (!template) {
      console.warn('Не передан template для модалки');
      return;
    }

    return openPopup({
      template,
      blockScroll,
      redirect,
      overlay,
      esc,
    });
  }

  if (typeof arg1 === 'string') {
    const template = arg1;
    const blockScroll = arg2 !== undefined ? arg2 : true;
    const redirect = arg3;

    return openPopup({
      template,
      blockScroll,
      redirect,
      overlay: {
        use: true,
        closeOnClick: true,
      },
      esc: {
        closeOnEsc: true,
      },
    });
  }

  console.warn('Неверные аргументы для summonPopUp');
};

// Функция removePopUp с анимированным закрытием
const removePopUp = (arg, forceBlockScroll = true) => {
  if (!arg) return;

  let popup = null;
  let blockScroll = forceBlockScroll;
  let redirect;

  if (typeof arg === 'string') {
    const popUpName = arg.replace(/^[#.]/, '');
    popup = document.querySelector(`.${popUpName}`);
  } else if (typeof arg === 'object' && arg !== null) {
    if (arg.template) {
      const popUpName = arg.template.replace(/^[#.]/, '');
      popup = document.querySelector(`.${popUpName}`);
    } else if (arg instanceof Element) {
      popup = arg.closest('.popUp') || arg;
    }

    if (arg.blockScroll !== undefined) blockScroll = arg.blockScroll;
    if (arg.redirect) redirect = arg.redirect;
  }

  if (!popup) return;

  const meta = popup._popupMeta || {};

  animatePopupOut({
    popup,
    blockScroll: meta.blockScroll ?? blockScroll,
    redirect: meta.redirect ?? redirect,
    onPopupEscPress: meta.onPopupEscPress,
  });
};

export {
  summonPopUp,
  removePopUp,
};