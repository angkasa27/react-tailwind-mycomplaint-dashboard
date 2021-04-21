import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { clearStorage } from '../../../utils/storage';
import { useHistory } from 'react-router-dom';
import ModalConfirm from '../../fragments/ModalConfirm';

export default function Navbar({ className }) {
  const history = useHistory();
  const [view, setView] = useState(false);
  const [modal, openModal] = useState(false);
  const [classes, setClasses] = useState('');
  useEffect(() => {
    if (view) setClasses('');
    else setClasses(' hidden');
  }, [view]);

  const handleLogout = () => {
    clearStorage();
    history.push('/login');
  };

  return (
    <div className={className}>
      <nav className="bg-white shadow md:shadow-xl overflow-hidden mb-5 md:mb-0 md:w-1/6 md:fixed md:h-screen">
        <div className="mx-6 my-6 md:my-0 flex justify-between">
          <h1 className="txt-h1 md:text-2xl md:my-10">
            My<span className="text-gray-600">Complaint</span>
          </h1>
          <div
            className="px-4 cursor-pointer md:hidden"
            onClick={() => setView(!view)}
          >
            <svg
              className="w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </div>
        </div>
        <div
          className={
            'text-gray-500 tracking-wider md:h-full mx-2 mb-2 md:block ' +
            classes
          }
        >
          <NavLink
            to="/dashboard"
            className="flex rounded p-4 content-center hover:bg-indigo-50 transition duration-200 ease-out"
            activeClassName="text-indigo-500 font-bold bg-indigo-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 mr-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <p>Beranda</p>
          </NavLink>

          <NavLink
            to="/pengaduan"
            className="flex rounded p-4 content-center hover:bg-indigo-50 transition duration-200 ease-out"
            activeClassName="text-indigo-500 font-bold bg-indigo-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 mr-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <p>Pengaduan</p>
          </NavLink>

          <NavLink
            to="/profile"
            className="flex rounded p-4 content-center hover:bg-indigo-50 transition duration-200 ease-out"
            activeClassName="text-indigo-500 font-bold bg-indigo-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 mr-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <p>Profile</p>
          </NavLink>
          <span
            onClick={() => openModal(true)}
            className="flex rounded p-4 content-center hover:bg-indigo-50 transition-colors duration-100 ease-out cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 mr-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            <p>Keluar</p>
          </span>
        </div>
      </nav>
      <ModalConfirm
        open={modal}
        onClose={() => openModal(false)}
        handleAction={() => handleLogout()}
        name="Keluar"
        description="Apakah anda ingin keluar dari akun ini?"
        buttonText="Keluar"
      />
    </div>
  );
}
