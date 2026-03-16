import { createRoot } from "react-dom/client";
import { useState, useEffect } from 'react';
import Modal from '../../../components/Modal/Modal';
import RequestModal from '../../../components/RequestModal/RequestModal';
import { sendRequestModal } from '../../../../api/RequestModalApi';
import { getPaddingOnBody, getPaddingFromBody } from '../../../../utils/utils';

const RequestModalProvider = () => {
  const [show, setShow] = useState(false);
  const [type, setType] = useState('');
  const [id, setId] = useState('');

  useEffect(() => {
    if (show) {
      getPaddingOnBody();
    } else {
      getPaddingFromBody();
    }
  }, [show]);

  window.RequestModalProvider = { setShow, setType, setId };

  return (
    <>
      {show && (
        <Modal
          show={show}
          closeModal={() => {
            setShow(false);
            setType('');
            setId('');
          }}
        >
          <RequestModal submitHandler={sendRequestModal} type={type} id={id} />
        </Modal>
      )}
    </>
  );
};

const requestModalProviderContainer = document.querySelector('#RequestModalProvider');

if (RequestModalProvider) {
  createRoot(requestModalProviderContainer).render(<RequestModalProvider />);
}
