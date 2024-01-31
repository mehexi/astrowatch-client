import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { FaRegHeart, FaRegUser } from 'react-icons/fa';
import { LuShoppingCart } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import logo from "../assets/Frame 4.svg";

const OtherNavBar = () => {
    return (
        <nav
        className={`fixed top-0 left-0 right-0 z-50 px-[120px] py-[30px] duration-500 grid grid-cols-5 items-center align-middle border-b border-[#A9A9A9]/20 bg-white text-black }`}
      >
        <div className={`col-span-2 flex gap-6 font-Questrial uppercase text-sm tracking-widest text-black`}>
          <Link to={'/'} className="overflow-hidden group">
            <h1 className="group-hover:text-gray-400">watches</h1>
            <div className=" border border-gray-400 scale-x-0 group-hover:scale-x-100 origin-center duration-150 mt-1"></div>
          </Link>
          <Link className="overflow-hidden group">
            <h1 className="group-hover:text-gray-400">explore</h1>
            <div className=" border border-gray-400 scale-x-0 group-hover:scale-x-100 origin-center duration-150 mt-1"></div>
          </Link>
          <Link className="overflow-hidden group">
            <h1 className="group-hover:text-gray-400">brands</h1>
            <div className=" border border-gray-400 scale-x-0 group-hover:scale-x-100 origin-center duration-150 mt-1"></div>
          </Link>
        </div>
        <div className="col-span-1 flex justify-center items-center ">
          <Link>
            <img className='invert' src={logo} alt="" />
          </Link>
        </div>
        <div className="col-span-2 flex gap-6 justify-end items-center">
          <label className="w-9/12 relative flex justify-end">
            <input
              className=" border w-9/12 rounded-full outline-none px-6 py-3 bg-transparent border-[#A9A9A9]/20"
              type="text"
              placeholder="Search"
            />
            <CiSearch className="absolute top-1/2 right-6 text-xl -translate-y-1/2" />
          </label>
          <div className="flex gap-6 text-xl">
            <FaRegUser className="hover:text-gray-400"></FaRegUser>
            <FaRegHeart className="hover:text-gray-400"></FaRegHeart>
            <LuShoppingCart className="hover:text-gray-400"></LuShoppingCart>
          </div>
        </div>
      </nav>
    );
};

export default OtherNavBar;