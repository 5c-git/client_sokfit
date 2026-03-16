import './validator.scss';
import 'choices.js/src/styles/choices.scss';
import Inputmask from 'inputmask';
import Bouncer from 'formbouncerjs';
import Choices from 'choices.js';


// Тексты ошибок для Bouncer (fallback и стандартные кейсы).
const validationMessages = {
  missingValue: {
    default: 'Поле обязательно для заполнения!',
    file: 'Необходимо загрузить хотя бы один файл!',
    tel: 'Введите номер телефона!',
  },

  patternMismatch: {
    default: 'Значение поля не удовлетворяет требованиям!',
    email: 'Укажите корректный email.',
  },

  wrongLength: {
    over: 'Превышена максимальная длина.',
    under: 'Недостаточная длина.',
  },

  outOfRange: {
    over: 'Значение слишком большое.',
    under: 'Значение слишком маленькое.',
  },

  text: 'Некорректное значение.',
  textarea: 'Некорректное значение.',
  number: 'Допускаются только цифры.',
  ruPhone: 'Введите корректный номер телефона.',
  intPhone: 'Введите международный номер полностью.',
  password: 'Минимум 6 символов.',
  passwordMatch: 'Пароли не совпадают.',
  required: 'Необходимо заполнить поле.',
  fallback: 'Необходимо заполнить поле.',
};


// Получаем элемент с описанием ошибки для поля.
const getDescription = (field) => {
  if (!field || !field.parentElement) return null;
  return field.parentElement.querySelector('.validator__description');
};


// Универсально выставляет валидное / невалидное состояние поля.
const setState = (field, isValid) => {
  const description = getDescription(field);

  field.classList.toggle('validator__input--valid', isValid);
  field.classList.toggle('validator__input--error', !isValid);
  field.setAttribute('aria-invalid', String(!isValid));

  if (!description) return;

  description.classList.toggle('validator__description--valid', isValid);
  description.classList.toggle('validator__description--error', !isValid);
};

// Проверка значения поля по регулярному выражению и длине.
const validateByRegexp = (field, regexp, min = 0, max = 225) => {
  const value = field.value;

  const isValid =
    regexp.test(value) &&
    value.length >= min &&
    value.length <= max;

  setState(field, isValid);
  return !isValid; // Bouncer ожидает true при ошибке
};


// Инициализация кастомной валидации формы через Bouncer.
const validateForm = (form) => {
  const formEl = document.querySelector(form);

  let validator = new Bouncer(form, {
    fieldClass: 'validator__input--error',
    errorClass: 'validator__error',
    disableSubmit: true,
    emitEvents: true,

    customValidations: {

      // Проверка обязательного поля.
      required(field) {
        if (!field.classList.contains('validator__required')) return false;

        const isValid = Boolean(field.value);
        setState(field, isValid);
        return !isValid;
      },

      // Валидация текстового поля (ФИО, название и т.п.).
      text(field) {
        if (!field.classList.contains('validator__text')) return false;

        return validateByRegexp(
          field,
          /^([a-zA-ZА-Яа-яЁё.-]+\s?)*$/,
          2,
          225
        );
      },

      // Валидация textarea с расширенным набором символов.
      textarea(field) {
        if (!field.classList.contains('validator__textarea')) return false;

        return validateByRegexp(
          field,
          /^([a-zA-ZА-Яа-яЁё0-9\-!$%^&*()_+|~=`{}\[\]:;'",.@#№«»“”‘’…\/\\\s]*)$/,
          4,
          225
        );
      },

      // Проверка числового значения (без проверки диапазона).
      number(field) {
        if (!field.classList.contains('validator__number')) return false;

        const isValid = field.value.length >= 1 && field.value.length <= 225;
        setState(field, isValid);
        return !isValid;
      },

      // Проверка длины значения по minlength / maxlength.
      minmax(field) {
        if (!field.classList.contains('validator__minmax')) return false;

        const min = Number(field.getAttribute('minlength')) || 0;
        const max = Number(field.getAttribute('maxlength')) || 225;

        const isValid = field.value.length >= min && field.value.length <= max;
        setState(field, isValid);
        return !isValid;
      },

      // Валидация email.
      email(field) {
        if (!field.classList.contains('validator__mail')) return false;

        return validateByRegexp(
          field,
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        );
      },

      // Валидация российского телефона (10–11 цифр).
      ruPhone(field) {
        if (!field.classList.contains('validator__phone')) return false;

        const raw = field.inputmask
          ? field.inputmask.unmaskedvalue()
          : field.value.replace(/\D/g, '');

        const isValid = raw.length === 10 || raw.length === 11;
        setState(field, isValid);
        return !isValid;
      },

      // Валидация международного телефона по длине маски.
      intPhone(field) {
        if (!field.classList.contains('validator__country-phone')) return false;

        const maskLength = field.getAttribute('data-mask')?.length || 0;
        const isValid = field.value.length === maskLength;

        setState(field, isValid);
        return !isValid;
      },

      // Базовая проверка пароля по длине.
      password(field) {
        if (!field.classList.contains('validator__password')) return false;

        const isValid = field.value.length >= 6 && field.value.length <= 225;
        setState(field, isValid);
        return !isValid;
      },

      // Проверка совпадения паролей.
      passwordMatch(field) {
        const selector = field.getAttribute('data-bouncer-match');
        if (!selector) return false;

        const other = field.form.querySelector(selector);
        if (!other) return false;

        const isValid = field.value === other.value;
        setState(field, isValid);
        return !isValid;
      },

      // Проверка стандартного select.
      select(field) {
        if (!field.classList.contains('validator__select')) return false;

        const isValid = field.options[field.selectedIndex].value !== '';
        field.parentElement.classList.toggle('validator__input--error', !isValid);
        return !isValid;
      },

      // Проверка кастомного select (Choices.js).
      choices(field) {
        if (!field.classList.contains('validator__choices')) return false;

        const isValid = field.hasAttribute('multiple')
          ? field.selectedIndex !== -1
          : field.value !== '';

        const container = field.parentElement;
        const description = container
          .closest('.validator__field')
          ?.querySelector('.validator__description');

        container.classList.toggle('validator__input--error', !isValid);
        description?.classList.toggle('validator__description--error', !isValid);
        description?.classList.toggle('validator__description--valid', isValid);

        return !isValid;
      },
    },

    // Кастомные сообщения ошибок.
    messages: validationMessages,
  });

  // Полный сброс состояния валидации при reset формы.
  formEl.addEventListener('reset', () => {
    validator.destroy();
    validator = validateForm(form);

    formEl
      .querySelectorAll(
        '.validator__input--valid, .validator__input--error, .validator__description--valid, .validator__description--error'
      )
      .forEach((el) =>
        el.classList.remove(
          'validator__input--valid',
          'validator__input--error',
          'validator__description--valid',
          'validator__description--error'
        )
      );
  });

  return validator;
};


// Маска для российского номера телефона.
const maskPhone = (form) => {
  const mask = new Inputmask('+7 [(999) 999-99-99]', {
    autoUnmask: true,
    showMaskOnHover: false,
    showMaskOnFocus: false,
    placeholder: '',
  });

  document
    .querySelector(form)
    .querySelectorAll('.validator__phone')
    .forEach((field) => mask.mask(field));
};

// Маска для иноземного номера телефона.
const maskInternationalPhone = (form) => {
  const hashContainer = document.querySelector(`${form}`);
  const countryPhone = hashContainer.querySelector('.validator__country-phone');
  const firstPhoneMask = hashContainer.querySelector('.validator__country-mask').getAttribute('data-mask');

  countryPhone.setAttribute('data-mask', firstPhoneMask.replace(/[^9]/g, ''));

  let phoneMask = new Inputmask(firstPhoneMask, {
    autoUnmask: true,
  });

  phoneMask.mask(countryPhone);

  const options = [];

  const optionsData = hashContainer.querySelectorAll('.validator__country-mask');

  optionsData.forEach((option, index) => {
    options.push({
      value: option.getAttribute('data-value'),
      label: option.getAttribute('data-country'),
      id: index + 1,
      customProperties: {
        mask: option.getAttribute('data-mask'),
        flag: option.getAttribute('data-flag'),
      },
    });
  });

  const choicesSelect = hashContainer.querySelector('.validator__country-select');

  const choicesNolint = new Choices(choicesSelect, {
    searchEnabled: false,
    itemSelectText: '',
    shouldSort: false,
    choices: options,
    // searchEnabled: true,
    classNames: {
      containerOuter: 'choices validator__countries',
    },
    callbackOnCreateTemplates(template) {
      return {
        item(classNames, data) {
          return template(`
            <div class="${classNames.item} ${data.highlighted ? classNames.highlightedState : classNames.itemSelectable} 
            ${data.placeholder ? classNames.placeholder : ''}" 
            data-item data-id="${data.id}" data-value="${data.value}" ${data.active ? 'aria-selected="true"' : ''} 
            ${data.disabled ? 'aria-disabled="true"' : ''}> 
            <p class='choices__flag' style='background-image: url(${options[(data.choiceId - 1)].customProperties.flag})'></p>
            ${data.label}
            </div>
          `);
        },
        choice(classNames, data) {
          return template(`
            <div class="${classNames.item} ${classNames.itemChoice} 
            ${data.disabled ? classNames.itemDisabled : classNames.itemSelectable}"
            data-select-text="${this.config.itemSelectText}" data-choice 
            ${data.disabled ? 'data-choice-disabled aria-disabled="true"' : 'data-choice-selectable'} 
            data-id="${data.id}" data-value="${data.value}" 
            ${data.groupId > 0 ? 'role="treeitem"' : 'role="option"'}>
            <p class='choices__flag' style='background-image: url(${options[(data.id - 1)].customProperties.flag})'></p>
            ${data.label}
            </div>
          `);
        },
      };
    },
  });

  choicesSelect.addEventListener('choice', (evt) => {
    countryPhone.setAttribute('data-mask', evt.detail.choice.customProperties.mask.replace(/[^9]/g, ''));
    countryPhone.inputmask.remove();
    countryPhone.value = '';
    countryPhone.focus();
    countryPhone.blur();
    phoneMask = new Inputmask(evt.detail.choice.customProperties.mask, {
      autoUnmask: true,
    });
    phoneMask.mask(countryPhone);
  });
};

// Инициализация переключателя показа/скрытия пароля внутри формы.
const initPasswordEye = (formSelector) => {
  const form = document.querySelector(formSelector);
  if (!form) return;

  // Находим все кнопки "глаз".
  const eyes = form.querySelectorAll('.validator__eye');

  eyes.forEach((eye) => {
    // Родительский контейнер, в котором лежат input и eye.
    const container = eye.parentElement;
    if (!container) return;

    // Ищем связанное поле пароля внутри этого контейнера.
    const input = container.querySelector('.validator__password');
    if (!input) return;

    // Обработчик клика по "глазу".
    eye.addEventListener('click', () => {
      const isPassword = input.type === 'password';

      // Переключаем тип поля.
      input.type = isPassword ? 'text' : 'password';

      // Переключаем визуальное состояние кнопки.
      eye.classList.toggle('validator__eye--open', isPassword);
    });
  });
};

export {
  validateForm,
  maskPhone,
  maskInternationalPhone,
  initPasswordEye,
};
