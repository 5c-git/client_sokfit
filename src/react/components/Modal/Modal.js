import './Modal.scss';
import { useState, useEffect } from 'react';

const Modal = ({ children, show, closeModal }) => {
  const [active, setActive] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);

  const check = () => {
    if (animateIn) {
      return 'Modal__container--in';
    }
    if (animateOut) {
      return 'Modal__container--out';
    }

    return '';
  };

  useEffect(() => {
    if (show) {
      setActive(true);
      setAnimateIn(true);
    } else {
      setActive(false);
    }
  }, [show]);

  const onModalEscPress = (evt) => {
    if (evt.code === 'Escape') {
      evt.preventDefault();
      setAnimateOut(true);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', onModalEscPress);

    return () => {
      document.removeEventListener('keydown', onModalEscPress);
    };
  }, []);

  return (
    <section className={`Modal ${active ? 'Modal--active' : ''}`}>
      <div
        className="Modal__overlay"
        onClick={() => {
          setAnimateOut(true);
        }}
      >
      </div>

      <section
        className={`Modal__container ${check()}`}
        onAnimationEnd={() => {
          if (animateIn) {
            setAnimateIn(false);
          }
          if (animateOut) {
            setAnimateOut(false);
            closeModal();
          }
        }}
      >
        <button
          className="Modal__close"
          onClick={() => {
            setAnimateOut(true);
          }}
        >
          <span></span>
        </button>

        {children}
      </section>
    </section>
  );
};

export default Modal;
