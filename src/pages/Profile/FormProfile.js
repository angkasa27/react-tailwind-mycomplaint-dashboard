import React, { useState, useEffect } from 'react';
import InputText from '../../components/input/InputText';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

export default function FormProfile({ data, handleSubmit }) {
  const history = useHistory();

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    if (data) {
      setName(data.nama);
      setUsername(data.username);
      setPhone(data.telp);
    }
  }, [data]);

  const onSubmit = () => {
    handleSubmit({
      name,
      username,
      phone,
    });
  };

  return (
    <div className="w-full md:w-96 card bg-white ">
      <InputText
        placeholder="Nama Lengkap"
        type="text"
        className="mb-2"
        name="Nama Lengkap"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <InputText
        placeholder="Username"
        type="text"
        className="mb-2"
        name="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <InputText
        placeholder="Nomor Telepon"
        type="text"
        className="mb-2"
        name="Nomor Telepon"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <div className="flex flex-col md:flex-row-reverse justify-between">
        <button
          onClick={() => onSubmit()}
          className="btn-main w-full md:ml-1 mt-2"
        >
          Kirim
        </button>
        <button
          onClick={() => history.push('/profile')}
          className="btn-outline w-full md:mr-1 mt-2"
        >
          Kembali
        </button>
      </div>
    </div>
  );
}

FormProfile.defaultProps = {
  data: {},
  handleSubmit: () => {},
};

FormProfile.propTypes = {
  data: PropTypes.object,
  handleSubmit: PropTypes.func,
};
