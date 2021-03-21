import React, { useState } from 'react';
import InputText from '../../components/input/InputText';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

export default function FormPassword({ handleSubmit }) {
  const history = useHistory();

  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const onSubmit = () => {
    if (password === rePassword)
      handleSubmit({
        password,
      });
  };

  return (
    <div className="w-full md:w-96 card bg-white ">
      <InputText
        placeholder="Masukan password baru"
        type="password"
        className="mb-2"
        name="Password Baru"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <InputText
        placeholder="Ketik Ulang Password Baru"
        type="password"
        className="mb-2"
        name="Ulangi Password Baru"
        value={rePassword}
        onChange={(e) => setRePassword(e.target.value)}
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

FormPassword.defaultProps = {
  handleSubmit: () => {},
};

FormPassword.propTypes = {
  handleSubmit: PropTypes.func,
};
