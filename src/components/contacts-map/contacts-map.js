import './contacts-map.scss';
import { summonAlert } from '../alert/alert';

const copy = document.querySelector('.contacts-map__copy');
if (copy) {
  // Логика для считывания адресса ссылки
  copy.addEventListener('click', (evt) => {
    evt.preventDefault();
    // const { link } = copy.dataset;
    const link = window.location.href;
    const textarea = document.createElement('textarea');
    textarea.value = link;
    copy.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    summonAlert('#alert--copy');
  });
}
