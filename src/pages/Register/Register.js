import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import InputText from '../../components/input/InputText';
import { register } from './action';
import moment from 'moment';
import ModalConfirm from '../../components/fragments/ModalConfirm';

export default function Register() {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [nik, setNik] = useState('');
  const [phone, setPhone] = useState('');
  const [response, setResponse] = useState({ success: false });
  const [message, setMessage] = useState('');
  const [modalSuccess, setModalSuccess] = useState(false);

  const date = () => {
    return moment().format();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register(
      { username, password, name, nik, phone, createAt: date() },
      setResponse
    );
  };

  useEffect(() => {
    if (response.success) setModalSuccess(true);
    else setMessage(response.message);
  }, [response]);

  const handleModal = () => {
    setModalSuccess(false);
    history.push('/login');
  };

  return (
    <div className="flex justify-center font-nunito h-screen">
      <div className="mt-16 w-full mx-10 sm:w-96">
        <div className="overflow-hidden bg-white rounded-xl px-10 pt-8 pb-10 shadow-md hover:shadow-xl transition duration-300 ease-out">
          <div className="relative h-10">
            <h1 className="text-7xl font-bold text-center text-indigo-50 absolute -top-6 -inset-x-1/2">
              MyComplaint
            </h1>
            <h1 className="text-center absolute z-10 top-0 -inset-x-1/2 txt-h1">
              Daftar
            </h1>
          </div>
          <form className="mt-5 z-20">
            <InputText
              placeholder="nama lengkapmu"
              type="text"
              className="mb-2"
              name="Nama Lengkap"
              autoFocus={true}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <InputText
              placeholder="username tanpa spasi"
              type="text"
              name="Username"
              className="mb-2"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <InputText
              placeholder="minimal 12 digit angka"
              type="text"
              name="Nomor Telepon"
              className="mb-2"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <InputText
              placeholder="15 digit NIK"
              type="text"
              name="NIK"
              className="mb-2"
              value={nik}
              onChange={(e) => setNik(e.target.value)}
            />
            <InputText
              placeholder="kombinasi huruf dan angka"
              type="password"
              name="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="text-xs text-red-500 mt-2">{message}</p>
            <div className="flex mt-4 flex-col md:flex-row-reverse justify-between">
              <button
                onClick={(e) => handleSubmit(e)}
                className="btn-main mt-2 md:w-36 w-full font-bold tracking-wider"
              >
                Daftar
              </button>
              <button
                onClick={() => history.push('/login')}
                className="btn-outline mt-2 md:w-36 w-full font-bold tracking-wider"
              >
                Masuk
              </button>
            </div>
          </form>
        </div>
        <span className="text-gray-800 opacity-30">
          by: Dimas Angkasa Nurindra
        </span>
      </div>
      <ModalConfirm
        open={modalSuccess}
        onClose={() => handleModal()}
        name="Berhasil"
        description="Akun telah berhasil didaftarkan"
        cancel="Login"
      />
    </div>
  );
}
