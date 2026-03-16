import './InputPhone.scss';
import { Field } from 'formik';
import InputMask from 'react-input-mask';

const InputPhone = ({
  name, value, onChange, onBlur, className, label, placeholder, isRequired, isDisabled,
}) => (
    <div className={`InputPhone${className ? ` ${className}` : ''}`}>
      {label ? <label className={isRequired ? 'InputPhone__label InputPhone__label--required' : 'InputPhone__label'}>{label}</label> : null}
      <InputMask
        mask="+7 (999) 999-99-99"
        maskPlaceholder={null}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={isDisabled}
      >
        <Field
          minLength="10"
          autoComplete='off'
          autoCapitalize='off'
          className='InputPhone__field'
          type='tel'
          name={name}
          placeholder={placeholder}
        />
      </InputMask>
    </div>
);

export default InputPhone;
