import React from 'react';
import PropTypes from 'prop-types';

export default function InputTextArea(props) {
  const { type, placeholder, className, name, value, onChange } = props;

  return (
    <>
      {name && <span className="input-span">{name}</span>}
      <textarea
        placeholder={placeholder}
        type={type}
        className={'input-text ' + className}
        value={value}
        onChange={onChange}
        rows="4"
      />
    </>
  );
}

InputTextArea.defaultProps = {
  type: '',
  placeholder: '',
  className: '',
  name: '',
  value: '',
  onChange: () => {},
};

InputTextArea.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
