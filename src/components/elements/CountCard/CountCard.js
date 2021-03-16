import React from 'react';
import PropTypes from 'prop-types';

export default function CountCard({ className, name, value, onClick }) {
  return (
    <div className={'card col-span-2 bg-gradient-to-r ' + className}>
      <div className=" flex justify-between items-center ">
        <div>
          <p className="font-bold text-white">Laporan</p>
          <p className="text-4xl md:text-5xl font-bold capitalize text-white ">
            {name}
          </p>
        </div>
        <p className="text-6xl md:text-7xl font-bold text-white ">{value}</p>
      </div>
      <div className="relative">
        <p className="text-6xl md:text-8xl font-bold capitalize text-white absolute -left-6 -bottom-8 md:-left-10 md:-bottom-12 opacity-20">
          {name}
        </p>
      </div>
    </div>
  );
}

CountCard.defaultProps = {
  name: '',
  className: '',
  value: null,
  onClick: () => {},
};

CountCard.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.number,
  onClick: PropTypes.func,
};
