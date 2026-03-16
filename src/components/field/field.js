import './field.scss';
import Choices from 'choices.js';


const initFieldSelect = (func) => {
  const selects = document.querySelectorAll('.field__input--select');
  if (selects.length > 0) {
    selects.forEach((select) => {
      const field = select.closest('.field');
      const description = field.querySelector('.validator__description');

      const choicesNolint = new Choices(select, {
        searchEnabled: 'search' in select.dataset,
        shouldSort: false,
        classNames: {
          containerOuter: 'choices field__choices',
          input: 'field__input',
        },
        noResultsText: 'Ничего не найдено',
        noChoicesText: 'Ничего не выбрано',
        itemSelectText: '',
      });

      const customSelect = field.querySelector('.choices__inner');

      // Убирает подсвеченный пункты при закрытии выпадающего списка.
      select.addEventListener('hideDropdown', () => {
        document
          .querySelector('.field__choices')
          .querySelectorAll('.is-highlighted')
          .forEach((el) => {
            el.classList.remove('is-highlighted');
          });
      });

      select.addEventListener('addItem', (event) => {
        if (customSelect.classList.contains('validator__input--error')) {
          customSelect.classList.remove('validator__input--error');
          description.classList.remove('validator__description--error');
          description.classList.add('validator__description--valid');
        }

        if (func) {
          func(event);
        }
      });

      select.choicesInstance = choicesNolint;
    });
  }
};

initFieldSelect();
