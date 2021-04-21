import React, { useState } from 'react';
import Navbar from '../../components/elements/Navbar';
import { clearStorage, getName } from '../../utils/storage';
import { useHistory } from 'react-router-dom';

export default function Dashboard({ children }) {
  const [logout, setLogout] = useState(false);
  return (
    <div className="grid grid-cols-6 font-nunito overflow-hidden ">
      <Navbar className="w-full md:col-span-1 col-span-6 " />
      <div className="w-full md:col-span-5 col-span-6 min-h-screen">
        <Header logout={logout} setLogout={setLogout} />
        <main className=" md:px-5 py-5 md:pt-10 z-10 bg-gray-100 h-full rounded-xl relative">
          {children}
          {logout && (
            <div className="absolute z-10 bg-gray-500 w-full h-full top-0 left-0 bg-opacity-20 rounded-tl-xl" />
          )}
        </main>
      </div>
    </div>
  );
}

export function Header({ logout = false, setLogout }) {
  const history = useHistory();

  const handleLogout = () => {
    clearStorage();
    history.push('/login');
  };
  return (
    <header className="bg-white h-16 md:flex justify-end items-center hidden px-5">
      {logout && (
        <div className="absolute z-20 bg-white mt-36 rounded-xl overflow-hidden">
          <span
            onClick={() => handleLogout()}
            className="flex py-4 px-8 w-36 justify-between hover:bg-indigo-50 transition-colors duration-100 ease-out cursor-pointer"
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
      )}
      <div className="flex items-center">
        <div className="border border-indigo-200 rounded-full p-1 w-8 h-8 overflow-hidden bg-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-10 -ml-2 -mt-1 text-white"
          >
            <path
              fill-rule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <p className="text-lg font-bold ml-4 mr-6">{getName()}</p>
        <span onClick={() => setLogout(!logout)} className="cursor-pointer ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-6"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
      </div>
    </header>
  );
}
