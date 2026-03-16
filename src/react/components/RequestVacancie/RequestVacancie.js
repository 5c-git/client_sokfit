import './RequestVacancie.scss';
import { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import Dropzone, { useDropzone } from 'react-dropzone';
import * as Yup from 'yup';
import Input from '../Input/Input';
import InputPhone from '../InputPhone/InputPhone';
import Textarea from '../Textarea/Textarea';
import { phoneRegExp } from '../../../utils/utils';

const RequestVacancie = ({ submitHandler, id }) => {
  const MAX_SIZE = 10240000;
  const MAX_FILES = 3;
  const FILE_TYPES = ['.jpg', '.jpeg', '.gif', '.png', '.pdf', '.doc', '.docx'];

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(),
    phone: Yup.string().matches(phoneRegExp).required(),
    email: Yup.string().email().required(),
    text: Yup.string().required(),
  });

  const [isVisibleFileWarning, setVisibleFileWarning] = useState(true);

  const [myFiles, setMyFiles] = useState([]);

  const [myFilesSize, setMyFilesSize] = useState(0);

  let totalSize = myFilesSize;

  useEffect(() => {
    if (myFiles.length > 0) {
      setVisibleFileWarning(false);
    } else {
      setVisibleFileWarning(true);
    }
  }, [myFiles, myFiles.length]);

  // Состояния необходимые после сброса формы.
  const RequestVacancieDecorator = () => {
    setMyFiles([]);
    setMyFilesSize(0);
  };

  function fileValidator(file) {
    const fileName = file.name.toLowerCase();

    if (!FILE_TYPES.some((type) => fileName.endsWith(type))) {
      window.Corners5ProjectLayout.summonAlert('#alert--wrongtypefile');
      return {
        code: 'wrong-type',
        message: 'Недопустимый файл!',
      };
    }

    return null;
  }

  return (
    <div className="RequestVacancie">
      <h2 className="RequestVacancie__title">Откликнуться на вакансию</h2>
      <Formik
        initialValues={{
          id,
          name: '',
          phone: '',
          email: '',
          text: '',
          files: [],
        }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          submitHandler(values, actions.resetForm, RequestVacancieDecorator);
        }}
      >
        {({
          values, errors, touched, handleChange, handleBlur, setFieldValue,
        }) => (
          <Form
            className="RequestVacancie__form"
            action='#'
            method='post'
            noValidate
            autoComplete='off'
          >
            <div className="RequestVacancie__field">
              <Input
                type='text'
                name='name'
                label='Имя'
                isRequired={true}
                placeholder='Имя'
                className={errors.name && touched.name ? 'Input--error' : null}
              />
            </div>

            <div className="RequestVacancie__field">
              <InputPhone
                name='phone'
                label='Телефон'
                value={values.phone}
                isRequired={true}
                placeholder='+7 (999) 999-99-99'
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.phone && touched.phone ? 'InputPhone--error' : null}
              />
            </div>

            <div className="RequestVacancie__field">
              <Input
                type='email'
                name='email'
                label='E-mail'
                isRequired={true}
                placeholder='Электронная почта'
                className={errors.email && touched.email ? 'Input--error' : null}
              />
            </div>

            <div className="RequestVacancie__field RequestVacancie__field--wide">
              <Textarea
                name='text'
                label='Сообщение'
                isRequired={true}
                placeholder='Ваше сообщение'
                className={errors.text && touched.text ? 'Textarea--error' : null}
              />
            </div>

            <div className="RequestVacancie__field RequestVacancie__field--wide">
              <Dropzone
                validator={fileValidator}
                accept={{ 'image/jpeg': ['.jpg', '.jpeg', '.gif', '.png', '.pdf', '.doc', '.docx'] }}
                onDrop={(acceptedFiles) => {
                  acceptedFiles.forEach((file) => {
                    if (myFiles.findIndex((item) => item.name === file.name) === -1) {
                      if (totalSize + file.size < MAX_SIZE) {
                        totalSize += file.size;
                        setMyFilesSize(totalSize);
                        myFiles.push(file);
                      } else {
                        window.Corners5ProjectLayout.summonAlert('#alert--wrongcountfile');
                      }
                    }
                  });
                  if (myFiles.length > MAX_FILES) {
                    window.Corners5ProjectLayout.summonAlert('#alert--wrongcountfile');
                  }
                  setMyFiles(myFiles.slice(0, MAX_FILES));
                  setFieldValue('files', myFiles.slice(0, MAX_FILES));
                }}
              >
                {({ getRootProps, getInputProps }) => (
                  <>
                    <div {...getRootProps({ className: 'RequestVacancie__dropzone' })}>
                      <input {...getInputProps()} />
                      <button
                        className='RequestVacancie__dropzone-button'
                        type='button'
                      >
                        <i></i>
                        <span>Прикрепить файлы</span>
                      </button>
                    </div>

                    {isVisibleFileWarning && (
                      <p className="RequestVacancie__file-warning">Допускается не более 3-х файлов в формате jpeg, gif, png, pdf, doc, docx. Размер не более 10 MB.</p>
                    )}

                    <div className='RequestVacancie__files'>
                      <ul className='RequestVacancie__files-list'>
                        {myFiles.map((file) => (
                          <li key={file.path} className='RequestVacancie__files-item'>
                            <div className='RequestVacancie__files-info'>
                              <p className='RequestVacancie__files-name'>{file.path}</p>
                              <p className='RequestVacancie__files-size'>{file.size} KB</p>
                            </div>
                            <button
                              type='button'
                              className='RequestVacancie__files-delete'
                              onClick={() => {
                                totalSize -= file.size;
                                setMyFilesSize(totalSize);

                                myFiles.splice(myFiles.indexOf(file), 1);
                                setFieldValue('files', myFiles);
                              }}
                            >
                              <span></span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
              </Dropzone>
            </div>

            <div className="RequestVacancie__field RequestVacancie__field--wide">
              <button className="RequestVacancie__submit button" type="submit">Отправить</button>
            </div>

            <div className="RequestVacancie__field RequestVacancie__field--wide">
              <p className="RequestVacancie__legal">Нажимая на кнопку «Отправить» вы соглашаетесь с <a href="#" target="_blank">политикой конфиденциальности</a> и <a href="#" target="_blank">пользовательским соглашением</a>.</p>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RequestVacancie;
