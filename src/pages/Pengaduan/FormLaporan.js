import React, { useState } from 'react';
import InputText from '../../components/input/InputText';
import InputTextArea from '../../components/input/InputTextArea';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import ModalConfirm from '../../components/fragments/ModalConfirm';
import moment from 'moment'

export default function FormLaporan({ handleSubmit }) {
  const history = useHistory();

  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [viewImage, setViewImage] = useState('');
  const [modal, setModal] = useState(false);


  const date = () => {
    return moment().format();
  };

  const onSubmit = () => {
    handleSubmit({
      subject,
      image,
      description,
      createAt: date()
    });
  };

  const getBase64 = (e) => {
    setImage(e.target.files[0]);
    e.preventDefault();
    const file = e.target.files[0];
    const reader = new FileReader();
    let image = document.getElementById('addImage');
    if (file) reader.readAsDataURL(file);
    reader.onloadend = () => {
      image.src = reader.result;
      setViewImage(image.src);
    };
  };

  return (
    <div className="w-full md:w-96 card bg-white ">
      <InputText
        placeholder="Masalah yang dialami"
        type="text"
        className="mb-2"
        name="Subjek"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <div className="mb-2">
        <span className="input-span">Gambar Pendukung</span>
        {image ? (
          <div className="border-dashed border-2 rounded-lg p-1 bg-gray-100 relative">
            <img
              src={viewImage}
              alt=""
              className="h-48 w-full object-cover rounded-md"
            />
            <label className="cursor-pointer btn-main absolute transform bottom-1 right-16 translate-x-1/2 -translate-y-1/2 text-xs">
              Ubah Gambar
              <input
                className="hidden addImage"
                type="file"
                onChange={(v) => getBase64(v)}
                id="addImage"
              />
            </label>
          </div>
        ) : (
          <div className="border-dashed border-2 rounded-lg py-3 bg-gray-100 flex justify-center">
            <label className="cursor-pointer btn-main text-xs">
              Tambah Gambar
              <input
                className="hidden addImage"
                type="file"
                onChange={(v) => getBase64(v)}
                id="addImage"
              />
            </label>
          </div>
        )}
      </div>
      <InputTextArea
        placeholder="Kronologi atau penjelasan dari masalah yang dialami"
        type="text"
        name="Deskirpsi"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div className="flex flex-col md:flex-row-reverse justify-between">
        <button
          onClick={() => setModal(true)}
          className="btn-main w-full md:ml-1 mt-2"
        >
          Kirim
        </button>
        <button
          onClick={() => history.push('/pengaduan')}
          className="btn-outline w-full md:mr-1 mt-2"
        >
          Kembali
        </button>
      </div>

      <ModalConfirm
        open={modal}
        onClose={() => setModal(false)}
        name="Kirim laporan"
        description="Apakah anda ingin mengirim laporan ini?"
        buttonText="Kirim"
        cancel="Kembali"
        handleAction={() => onSubmit()}
      />
    </div>
  );
}

FormLaporan.defaultProps = {
  data: {},
  handleSubmit: () => {},
};

FormLaporan.propTypes = {
  data: PropTypes.object,
  handleSubmit: PropTypes.func,
};
