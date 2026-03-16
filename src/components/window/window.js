import {
  validateForm,
  maskPhone,
  maskInternationalPhone,
  initPasswordEye,
} from '../validator/validator';
import { summonPopUp, removePopUp } from '../popUp/popUp';
import findVideos from '../video/video';
import { summonAlert, removeAlert } from '../alert/alert';
import { addLoading, removeLoading } from '../loading/loading';
import {
  getPaddingOnBody,
  getPaddingFromBody,
  getScrollbarWidth,
  activateRequestButtons,
  isObject,
} from '../../utils/utils';

window.Corners5ProjectLayout = {
  findVideos,
  summonAlert,
  removeAlert,
  getPaddingOnBody,
  getPaddingFromBody,
  getScrollbarWidth,
  activateRequestButtons,
  isObject,
  validation: {
    validateForm,
    maskPhone,
    maskInternationalPhone,
    initPasswordEye,
  },
  summonPopUp,
  removePopUp,
  addLoading,
  removeLoading,
};
