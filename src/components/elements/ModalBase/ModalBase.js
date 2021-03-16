import React from 'react';
import PropTypes from 'prop-types';

export default function ModalBase({ children, open, onClose }) {
  const classes = !open && 'hidden';

  return (
    <div className={classes}>
      <div
        onClick={(e) => {
          e.preventDefault();
          onClose();
        }}
        className="bottom-0 top-0 right-0 left-0 z-50 fixed bg-gray-800 opacity-20 "
      />
      <div className="card bg-white h-auto fixed top-1/2 left-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2">
        {children}
      </div>
    </div>
  );
}

ModalBase.defaultProps = {
  children: {},
  open: false,
  onClose: () => {},
};

ModalBase.propTypes = {
  children: PropTypes.object,
  open: PropTypes.bool,
  onClose: PropTypes.func,
};
