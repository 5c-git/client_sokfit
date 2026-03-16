import axios from 'axios';
import {
  addLoading, removeLoading,
} from '../components/loading/loading';
import {
  summonAlert,
} from '../components/alert/alert';
import { createFormData } from '../utils/utils';

// https://run.mocky.io/v3/59531f4b-6f78-43cb-9acc-766963fe2512 - Успех.
// https://run.mocky.io/v3/93676f0a-11bd-4fb4-a418-3e1116a345dc - Ошибка.

const requestVacancieApi = axios.create({
  baseURL: '/local/ajax',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});

const setStatus = (status) => {
  switch (status) {
    case 'success':
      return 'alert--green';

    case 'error':
      return 'alert--red';

    default:
      return '';
  }
};

// eslint-disable-next-line import/prefer-default-export
export const sendRequestVacancie = (values, reset, requestVacancieDecorator) => {
  const data = createFormData(values);

  addLoading('#RequestVacancieProvider');

  return requestVacancieApi
    .post('/vacancy.php', data)
    .then((response) => {
      if (response.status === 200) {
        const alert = document.querySelector('#alert--request').content.querySelector('.alert');
        alert.classList.add(setStatus(response.data.status));

        const container = document.querySelector('#alert--request').content.querySelector('.alert__container');
        container.innerHTML = response.data.text;

        removeLoading();
        summonAlert('#alert--request');

        reset();
        requestVacancieDecorator();
      }
    })
    .catch((error) => {
      console.log(error);
      removeLoading();
      summonAlert('#alert--error');
    });
};
