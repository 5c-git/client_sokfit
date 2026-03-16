import './gallery.scss';
import Viewer from 'viewerjs/dist/viewer';
import { getPaddingOnBody, getPaddingFromBody } from '../../utils/utils';

const gallery = document.querySelector('.gallery');
if (gallery) {
  const viewer = new Viewer(gallery, {
    url: 'data-original',
    className: 'viewerjs__zoom',
    toolbar: {
      zoomIn: {
        show: true,
        size: 'large',
      },
      zoomOut: {
        show: true,
        size: 'large',
      },
      oneToOne: false,
      reset: false,
      prev: {
        show: true,
        size: 'large',
      },
      play: false,
      next: {
        show: true,
        size: 'large',
      },
      rotateLeft: {
        show: true,
        size: 'large',
      },
      rotateRight: {
        show: true,
        size: 'large',
      },
      flipHorizontal: false,
      flipVertical: false,
    },
    navbar: false,
    // movable: false,
    keyboard: false,
    title() {
      return `(${this.index + 1}/${this.length})`;
    },
    // slideOnTouch: false,
    transition: false,
    show() {
      getPaddingOnBody();
    },
    hide() {
      getPaddingFromBody();
    },
  });
}
