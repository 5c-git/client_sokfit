import './RequestVacancieProvider.scss';
import { createRoot } from "react-dom/client";
import RequestVacancie from '../../../../components/RequestVacancie/RequestVacancie';
import { sendRequestVacancie } from '../../../../../api/RequestVacancieApi';

const requestVacancieProvider = document.querySelector('#RequestVacancieProvider');

if (requestVacancieProvider) {
  const { id } = requestVacancieProvider.dataset;

  const RequestVacancieProvider = () => (
    <>
      <div className="container">
        <RequestVacancie submitHandler={sendRequestVacancie} id={id} />
      </div>
    </>
  );

  createRoot(requestVacancieProvider).render(<RequestVacancieProvider />);
}
