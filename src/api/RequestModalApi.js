import axios from 'axios';
import {
  addLoading, removeLoading,
} from '../components/loading/loading';
import {
  summonAlert,
} from '../components/alert/alert';

// https://run.mocky.io/v3/0486a8f1-9350-45dd-8792-2dda4e192a8b - Успех.
// https://run.mocky.io/v3/fddbf7a2-9dd6-4c77-86a0-83cd61286f39 - Ошибка.

const requestModalApi = axios.create({
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
export const sendRequestModal = (values) => {
  addLoading('.Modal__container');

  return requestModalApi
    .post('/form.php', values)
    .then((response) => {
      if (response.status === 200) {
        const alert = document.querySelector('#alert--request').content.querySelector('.alert');
        alert.classList.add(setStatus(response.data.status));

        const container = document.querySelector('#alert--request').content.querySelector('.alert__container');
        container.innerHTML = response.data.text;

        removeLoading();
        summonAlert('#alert--request');

        window.RequestModalProvider.setShow(false);
        window.RequestModalProvider.setType('');
        window.RequestModalProvider.setId('');
      }
    })
    .catch((error) => {
      console.log(error);
      removeLoading();
      summonAlert('#alert--error');
    });
};
