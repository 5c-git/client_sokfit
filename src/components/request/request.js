import './request.scss';
import {
  validateForm,
  maskPhone,
} from '../validator/validator';

const form = document.querySelector('.request__form');
if (form) {
  validateForm('.request__form');
  maskPhone(form);
}
