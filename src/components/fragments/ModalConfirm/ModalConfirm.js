import React from 'react';
import ModalBase from '../../elements/ModalBase';
import PropTypes from 'prop-types';

export default function ModalConfirm({
  open,
  onClose,
  data,
  description,
  handleAction,
  name,
  cancel,
  buttonText,
}) {
  return (
    <ModalBase open={open} onClose={onClose}>
      <div className="w-72 md:w-80">
        <h2 className="txt-h1 text-center mb-2 capitalize">{name}</h2>
        {/* <h3 className="font-bold mt-2">{data.subject}</h3> */}
        <p className="overflow-y-auto max-h-50 text-center">{description}</p>
        {/* <span className="text-xs block text-gray-300 my-1">
          {data.operatorName + ', March 3 2021'}
        </span> */}
        <div className="mt-2 flex justify-between">
          <button
            onClick={() => onClose()}
            className={
              (buttonText ? 'btn-outline' : 'btn-main') +
              ' w-full mr-1 mt-2 capitalize'
            }
          >
            {cancel}
          </button>
          {buttonText && (
            <button
              onClick={() => handleAction()}
              className="btn-main w-full ml-1 mt-2"
            >
              {buttonText}
            </button>
          )}
        </div>
      </div>
    </ModalBase>
  );
}

ModalConfirm.defaultProps = {
  open: false,
  description: '',
  buttonText: '',
  name: '',
  cancel: 'batal',
  onClose: () => {},
  handleAction: () => {},
  data: {},
};

ModalConfirm.propTypes = {
  open: PropTypes.bool,
  description: PropTypes.string,
  buttonText: PropTypes.string,
  name: PropTypes.string,
  cancel: PropTypes.string,
  onClose: PropTypes.func,
  handleAction: PropTypes.func,
  data: PropTypes.object,
};
