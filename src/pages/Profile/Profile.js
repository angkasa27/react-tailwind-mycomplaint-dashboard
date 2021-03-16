import React, { useState, useEffect } from 'react';
import Dashboard from '../../components/Dashboard';
import moment from 'moment';
import { useHistory, useLocation } from 'react-router-dom';
import queryString from 'querystring';
import FormProfile from './FormProfile';
import FormPassword from './FormPassword';
import { getUserProfile, updateProfile, updatePassword } from './action';

export default function Pengguna() {
  const history = useHistory();
  const location = useLocation();
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(false);
  const { edit = false, changePassword = false } = queryString.parse(
    location.search.replace('?', '')
  );

  useEffect(() => {
    getUserProfile(setResponse);
  }, [loading]);

  const renderDate = (date) => {
    return moment(date).locale('id').format('LL');
  };

  const handleUpdate = (v) => {
    updateProfile(v, setLoading);
    history.push('/profile');
  };

  const handlePassword = (v) => {
    updatePassword(v, setLoading);
    history.push('/profile');
  };

  return (
    <Dashboard>
      <p className="txt-h1 mx-5 md:mx-0 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 md:w-8 mr-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
        Profile
        {edit && (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-6"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            <span className="text-lg md:text-2xl">Edit Profile</span>
          </>
        )}
      </p>
      <div className="mt-9">
        <div className="card bg-white flex flex-col sm:flex-row ">
          <div className="mt-2 flex flex-col items-center">
            <div className="mb-3 border-4 border-indigo-200 rounded-full p-1 w-44 h-44 overflow-hidden bg-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-50 mt-8 text-white"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <button
              onClick={() =>
                history.push({
                  search: queryString.stringify({
                    edit: true,
                  }),
                })
              }
              className="flex items-center justify-center btn-main w-full mt-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 mr-2"
              >
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
              Edit Profile
            </button>
            <button
              onClick={() =>
                history.push({
                  search: queryString.stringify({
                    changePassword: true,
                  }),
                })
              }
              className="flex items-center justify-center btn-outline w-full mt-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 mr-2"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>
              Ganti Password
            </button>
          </div>
          <div className="w-full sm:ml-10 mt-5 sm:mt-0">
            <div className="flex flex-col md:flex-row ">
              <div>
                <span className="input-spane text-sm">Nama Lengkap</span>
                <p className="font-bold text-xl md:text-4xl md:mr-10">
                  {response.data && response.data.nama}
                </p>
                <span className="text-xs md:text-base text-gray-400">
                  {' Bergabung pada ' + renderDate('12/12/2020')}
                </span>
              </div>
              <div className="mt-3 md:mt-0">
                <span className="input-spane text-sm">Username</span>
                <p className="font-bold text-xl md:text-3xl">
                  {response.data && response.data.username}
                </p>
              </div>
            </div>
            <div className="mt-3">
              <span className="input-spane text-sm">NIK</span>
              <p className="font-bold text-xl md:text-3xl">
                {response.data && response.data.nik}
              </p>
            </div>
            <div className="mt-3">
              <span className="input-spane text-sm">Nomor Telepon</span>
              <p className="font-bold text-xl md:text-3xl">
                {response.data && response.data.telp}
              </p>
            </div>
          </div>
        </div>
        {changePassword && <FormPassword handleSubmit={handlePassword} />}
        {edit && (
          <FormProfile handleSubmit={handleUpdate} data={response.data} />
        )}
      </div>
    </Dashboard>
  );
}
