import React, { useState, useEffect } from 'react';
import Dashboard from '../../components/Dashboard';
import CountCard from '../../components/elements/CountCard';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getUserProfile, getAllstatistic } from './action';
import moment from 'moment';

export default function Home() {
  const [response, setResponse] = useState({ data: {} });
  const [statistic, setStatistic] = useState({
    data: { submitted: 0, onProgress: 0, responded: 0, done: 0 },
  });

  useEffect(() => {
    getUserProfile(setResponse);
    getAllstatistic(setStatistic);
  }, []);

  return (
    <Dashboard>
      <div className="flex justify-between items-baseline">
        <p className="txt-h1 mx-5 md:mx-0">
          {'Selamat Datang' +
            (response.data && ', ' + response.data.nama) +
            '!'}
        </p>
        <p className="md:block hidden font-semibold text-xl">
          {moment().locale('id').format('dddd, D MMMM YYYY')}
        </p>
      </div>

      <div className="mt-9 grid grid-cols-3 mx-5 md:mx-0 gap-5">
        <AddCard className="  from-blue-400 to-indigo-500 hover:to-blue-400" />
        <CountCard
          name={'di proses'}
          value={statistic.data && statistic.data.onProgress}
          className=" md:col-span-2 col-span-3 from-purple-500 to-indigo-400"
        />
        <CountCard
          name={'ditanggapi'}
          value={statistic.data && statistic.data.responded}
          className=" md:col-span-2 col-span-3 from-purple-500 to-indigo-400"
        />
        {/* <CountCard
          name={'selesai'}
          value={statistic.data && statistic.data.done}
          className=" sm:col-span-1 from-indigo-500 to-blue-400 hover:to-indigo-500"
        /> */}
      </div>
    </Dashboard>
  );
}

export function AddCard({ className }) {
  const history = useHistory();
  return (
    <div
      onClick={() => history.push('/pengaduan?add=true')}
      className={
        'card md:col-span-1 md:row-span-2 col-span-3 bg-gradient-to-r cursor-pointer ' +
        className
      }
    >
      <div className=" flex justify-between items-center md:flex-col-reverse h-full">
        <p className="text-4xl font-bold capitalize text-white ">
          Laporan Baru
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="text-white w-16 md:w-20"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        <div className="hidden md:block" />
      </div>
      <div className="relative">
        <p className="text-6xl md:text-8xl font-bold capitalize text-white absolute -left-6 -bottom-8 md:-left-10 md:-bottom-12 opacity-20">
          Tambah
        </p>
      </div>
    </div>
  );
}

CountCard.defaultProps = {
  className: '',
  value: null,
  onClick: () => {},
};

CountCard.propTypes = {
  className: PropTypes.string,
  value: PropTypes.number,
  onClick: PropTypes.func,
};
