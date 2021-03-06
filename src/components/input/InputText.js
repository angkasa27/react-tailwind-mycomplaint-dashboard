import React from 'react';
import PropTypes from 'prop-types';

export default function InputText(props) {
  const {
    type,
    placeholder,
    className,
    name,
    value,
    onChange,
    disabled,
    autoFocus,
  } = props;

  return (
    <>
      {name && <span className="input-span">{name}</span>}
      <input
        placeholder={placeholder}
        type={type}
        className={'input-text ' + className}
        value={value}
        onChange={onChange}
        disabled={disabled}
        autoFocus={autoFocus}
      />
    </>
  );
}

InputText.defaultProps = {
  type: '',
  placeholder: '',
  disabled: false,
  className: '',
  name: '',
  value: '',
  onChange: () => {},
  autoFocus: false,
};

InputText.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
