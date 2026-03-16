import main from "./main.scss";
import fonts from "./fonts.scss";
import {
  summonPopUp,
  removePopUp,
} from '../components/popUp/popUp';
import {
  validateForm, maskNumber, maskSimplePhone, maskPhone, maskInternationalPhone,
  initPasswordEye, initAgreeCheckbox, initFileLoadInput, focusFirstInput,
  initSelectValidation, initChoicesValidation,
} from '../components/validator/validator';

const phoneRegExp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){11,14}(\s*)?$/;

// Находим ширину скролбара и узнаем на сколько добавлять отступ справа у body.
const body = document.querySelector('body');
const header = document.querySelector('.header__fixed');
// const dropdown = document.querySelector('.header__dropdown');
const promoFixed = document.querySelector('.promo__fixed');
const getScrollbarWidth = () => window.innerWidth - document.documentElement.clientWidth;
let checker = false;

// Функция чтобы блочить экран и давать отступ.
const getPaddingOnBody = () => {
  document.addEventListener('resize', () => {
    getScrollbarWidth();
  });
  if (!checker) {
    body.style.paddingRight = `${getScrollbarWidth()}px`;
    if (header) {
      header.style.paddingRight = `${getScrollbarWidth()}px`;
    }
    // if (dropdown) {
    //   dropdown.style.paddingRight = `${getScrollbarWidth()}px`;
    // }
    if (promoFixed) {
      promoFixed.style.paddingRight = `${getScrollbarWidth()}px`;
    }
    body.classList.add('static');
    checker = true;
  }
};

// Функция чтобы снимать блокировку экрана и убирать отступ.
const getPaddingFromBody = () => {
  if (checker) {
    body.style.paddingRight = '';
    body.style.paddingRight = `${getScrollbarWidth()}px`;
    if (header) {
      header.style.paddingRight = '';
    }
    // if (dropdown) {
    //   dropdown.style.paddingRight = '';
    // }
    if (promoFixed) {
      promoFixed.style.paddingRight = '';
    }
    body.classList.remove('static');
    checker = false;
  }
};

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const numberSplitter = (num) => {
  const n = num.toString();
  return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1' + ' ');
};

// автоматическая высота для textarea
function OnInput() {
  this.style.height = 'auto';
  this.style.height = `${this.scrollHeight}px`;
}

const setTextareaAutoHeight = (area) => {
  const textareas = document.querySelectorAll(`${area}`);
  textareas.forEach((element) => {
    element.setAttribute('style', `height:${element.scrollHeight}px; overflow-y: hidden;`);
    element.addEventListener('input', OnInput);
  });
};

const isObject = (object) => {
  const type = typeof object;
  return type === 'function' || type === 'object';
};

const createFormData = (values) => {
  const data = new FormData();

  // eslint-disable-next-line no-restricted-syntax
  for (const key in values) {
    if (isObject(values[key])) {
      values[key].forEach((file, index) => {
        data.append(`${key}-${index}`, file);
      });
    } else {
      data.append(key, values[key]);
    }
  }
  return data;
};

const debounce = (cb, delay = 500) => {
  let timeoutId;

  return function (...args) {
    const context = this;
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      cb.apply(context, args);
    }, delay);
  };
};



// // Функция чтобы навешивать вызов модального окна заявки по кнопке.
// const activateRequestButtons = () => {
//   const buttons = document.querySelectorAll('.button-request:not(.button-request--js)');

//   buttons.forEach((button) => {
//     if (!button.classList.contains('button-request--js')) {
//       button.classList.add('button-request--js');
//       const { type } = button.dataset;
//       const { id } = button.dataset;

//       button.addEventListener('click', (evt) => {
//         evt.preventDefault();
//         window.RequestModalProvider.setType(type);
//         window.RequestModalProvider.setId(id);
//         window.RequestModalProvider.setShow(true);
//       });
//     }
//   });
// };

// Функция чтобы навешивать вызов модального окна заявки по кнопке.
const activateRequestButtons = ({
  submitForm
} = {}) => {
  const buttons = document.querySelectorAll('.button-request:not(.button-request--js)');

  buttons.forEach((button) => {
    button.classList.add('button-request--js');

    button.addEventListener('click', (evt) => {
      evt.preventDefault();
      const { type } = button.dataset;
      const info = button.dataset;

      if (!type) {
        console.warn('У кнопки не указан data-type, модалка не может быть вызвана');
        return;
      }

      const modalSelector = `#modal--${type}`;
      const modalClass = `.modal--${type}`;

      summonPopUp({
        template: modalSelector,
        blockScroll: true,
        overlay: {
          use: true,
          closeOnClick: true,
        },
        esc: {
          closeOnEsc: true,
        },
      });

      const modal = document.querySelector(modalClass);

      if (!modal) {
        console.log(`Модальное окно ${modalSelector} не найдено`);

        return;
      }

      const form = modal.querySelector('form');

      if (form) {
        for (const key in info) {
          form.insertAdjacentHTML('beforeend', `<input type="hidden" name="${key}" value="${info[key]}">`);
        }

        const validatedForm = validateForm(`${modalClass} form`);
        maskPhone(`${modalClass} form`);
        setTextareaAutoHeight(`${modalClass} textarea`);

        const fetch = async () => {
          const answer = await submitForm(form);
          if (answer) {
            if (answer.status === 'success') {
              validatedForm.destroy();
              removePopUp(modalClass, true);
            }
          }
        };

        form.addEventListener('bouncerFormValid', debounce(() => {
          if (submitForm) {
            fetch();
          }
        }));
      }
    });
  });
};

export {
  getPaddingOnBody,
  getPaddingFromBody,
  getScrollbarWidth,
  phoneRegExp,
  shuffle,
  numberSplitter,
  activateRequestButtons,
  isObject,
  createFormData,
};
