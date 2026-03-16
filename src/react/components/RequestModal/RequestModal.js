import './RequestModal.scss';
import { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Input from '../Input/Input';
import InputPhone from '../InputPhone/InputPhone';
import { phoneRegExp } from '../../../utils/utils';

const RequestModal = ({ submitHandler, type, id }) => {
  const validationSchema = Yup.object().shape({
    fio: Yup.string().required(),
    phone: Yup.string().matches(phoneRegExp).required(),
  });

  return (
    <>
      {(type !== '' && id !== '') && (
        <div className='RequestModal'>
          <p className='RequestModal__title'>Оставьте заявку</p>
          <Formik
            initialValues={{
              type,
              id,
              fio: '',
              phone: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              submitHandler(values);
            }}
          >
            {({
              values, errors, touched, handleChange, handleBlur,
            }) => (
              <Form
                className="RequestModal__form"
                action='#'
                method='post'
                noValidate
              >
                <div className="RequestModal__field">
                  <Input
                    type='text'
                    name='fio'
                    label='Имя'
                    isRequired={true}
                    placeholder='Имя'
                    className={errors.fio && touched.fio ? 'Input--error' : null}
                  />
                </div>

                <div className="RequestModal__field">
                  <InputPhone
                    name='phone'
                    label='Телефон'
                    value={values.phone}
                    isRequired={true}
                    placeholder='Телефон'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.phone && touched.phone ? 'InputPhone--error' : null}
                  />
                </div>

                <div className="RequestModal__field">
                  <button className="RequestModal__submit button" type="submit">Отправить</button>
                </div>

                <div className="RequestModal__field">
                  <p className="RequestModal__legal">Нажимая на кнопку «Отправить» вы соглашаетесь с <a href="/privacy-policy/" target="_blank">политикой конфиденциальности</a> и <a href="/terms-of-use/" target="_blank">пользовательским соглашением</a>.</p>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      )}
    </>
  );
};

export default RequestModal;
