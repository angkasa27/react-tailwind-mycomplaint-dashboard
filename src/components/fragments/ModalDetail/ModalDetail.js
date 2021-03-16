import React from 'react';
import ModalBase from '../../elements/ModalBase';
import PropTypes from 'prop-types';
import moment from 'moment';

export default function ModalDetail({ open, onClose, data }) {
  return (
    <ModalBase open={open} onClose={onClose}>
      <div className="w-72 md:w-96">
        <h2 className="txt-h1 text-center mb-2">Detail Laporan</h2>
        {/* <img src={data.detail.image} alt="gambar laporan" /> */}
        <img
          className="h-48 w-full object-cover rounded"
          src={data.detail && data.detail.image}
          alt="gambar laporan"
        />
        <h3 className="font-bold mt-2">{data.subject}</h3>
        <span className="text-xs block text-gray-400 mb-2">
          {data.userName +
            ', ' +
            moment(data.date).locale('id').format('D MMMM YYYY')}
        </span>
        {/* <p>{data.detail.description}</p> */}
        <p className="overflow-y-auto h-32">
          {data.detail && data.detail.description}
        </p>
        <div className="mt-2 flex flex-col md:flex-row-reverse justify-between">
          <button className="btn-main w-full md:ml-1 mt-2">
            Download Detail
          </button>
          <button
            onClick={() => onClose()}
            className="btn-outline w-full md:mr-1 mt-2"
          >
            Tutup
          </button>
        </div>
      </div>
    </ModalBase>
  );
}

ModalDetail.defaultProps = {
  open: false,
  onClose: () => {},
  data: {},
};

ModalDetail.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  data: PropTypes.object,
};
