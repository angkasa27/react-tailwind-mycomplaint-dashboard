import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import InputText from '../../components/input/InputText';
import { login } from './action';

export default function Login() {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [response, setResponse] = useState({ success: false });
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username, password }, setResponse);
  };

  useEffect(() => {
    if (response.success) history.push('/');
    else setMessage(response.message);
  }, [response]);

  return (
    <div className="flex justify-center font-nunito h-screen ">
      <div className="mt-16 w-full mx-10 sm:w-96 md:mt-24">
        <div className="overflow-hidden bg-white rounded-xl px-10 pt-8 pb-10 shadow-md hover:shadow-xl transition duration-300 ease-out">
          <div className="relative h-10">
            <h1 className="text-7xl font-bold text-center text-indigo-50 absolute -top-6 -inset-x-1/2 ">
              MyComplaint
            </h1>
            <h1 className="text-center absolute z-10 top-0 -inset-x-1/2 txt-h1">
              Masuk!
            </h1>
          </div>
          <form className="mt-5 z-20">
            <InputText
              placeholder="Masukan username"
              type="text"
              className="mb-2"
              name="Username"
              autoFocus={true}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <InputText
              placeholder="Masukan password"
              type="password"
              name="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="text-xs text-red-500 mt-2">{message}</p>
            <div className="flex mt-2 flex-col md:flex-row-reverse justify-between">
              <button
                onClick={(e) => handleSubmit(e)}
                className="btn-main mt-2 md:w-36 w-full tracking-wider"
              >
                Masuk
              </button>
              <button
                onClick={() => history.push('/register')}
                className="btn-outline mt-2 md:w-36 w-full tracking-wider"
              >
                Daftar
              </button>
            </div>
          </form>
        </div>
        <span className="text-gray-800 opacity-30">
          by: Dimas Angkasa Nurindra
        </span>
      </div>
    </div>
  );
}
