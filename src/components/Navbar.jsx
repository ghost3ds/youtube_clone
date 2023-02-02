import React from 'react';
import logo from '../assets/logo.png';
import flag from '../assets/flag.png';
import { BsCart2 } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';
import { GoSettings } from 'react-icons/go';
import { BiWorld } from 'react-icons/bi';
import { TiArrowRepeat } from 'react-icons/ti';

const Navbar = () => {
  return (
    <div className="bg-[#232f3e] p-4 flex items-center justify-between md:px-8">
      {/* Left */}
      <div className="flex items-center shrink-0">
        <div className="h-10 flex">
          <img src={logo} className="object-cover" />
        </div>
        <div className="hidden text-white/70 pl-6 sm:flex items-center hover:scale-110">
          <BiWorld className="text-[20px] mr-1" />
          <p>Location</p>
        </div>
      </div>

      {/* Middle */}
      <div className="flex items-center w-full">
        {/* INPUT */}
        <div className="hidden sm:flex relative w-full mx-4">
          <input
            type="search"
            placeholder="Search..."
            className="w-full py-2 pl-12 placeholder:text-[#232f3e] rounded-full outline-0"
          />
          <button className="absolute bg-[#ff9900] h-full w-12 right-0 flex items-center justify-center rounded-r-full">
            <FiSearch className="text-[25px] mr-1" />
          </button>
          <button className="absolute text-[#232f3e]  h-full w-12 left-0 flex items-center justify-center rounded-r-full">
            <GoSettings />
          </button>
        </div>
        {/* FLAG */}
        <div className="hidden text-white md:flex items-center font-bold cursor-pointer mr-4 shrink-0">
          <img src={flag} alt="flag" className="w-10 mr-1" />
          <p>RUS</p>
          <TiArrowRepeat className="text-[15px] mt-2" />
        </div>
      </div>

      {/* Right */}
      <div className="relative flex justify-center items-center  text-white text-[28px]">
        <BsCart2 />
        <div className="absolute text-[16px] h-full -top-3.5 text-[#ff9900]">
          <p>0</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
