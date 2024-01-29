import { useState, useEffect } from 'react';
import React from "react";
import logo from "../assets/Frame 4.svg";
import { Link } from "react-router-dom";
import { FaRegUser, FaRegHeart, FaSearch } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import Title from "./Title";

// const NavBar = () => {
//   Title('ASTROWATCH')
//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 px-[120px] py-[30px] hover:bg-black/90 duration-500 grid grid-cols-5 items-center align-middle border-b border-[#A9A9A9]/20 text-gray-300">
//       <div className="col-span-2 flex gap-6 font-Questrial uppercase font-semibold">
//         <Link className="overflow-hidden group">
//           <h1 className="group-hover:text-gray-400">watches</h1>
//           <div className=" border border-gray-400 scale-x-0 group-hover:scale-x-100 origin-center duration-150 mt-1"></div>
//         </Link>
//         <Link className="overflow-hidden group">
//           <h1 className="group-hover:text-gray-400">explore</h1>
//           <div className=" border border-gray-400 scale-x-0 group-hover:scale-x-100 origin-center duration-150 mt-1"></div>
//         </Link>
//         <Link className="overflow-hidden group">
//           <h1 className="group-hover:text-gray-400">brands</h1>
//           <div className=" border border-gray-400 scale-x-0 group-hover:scale-x-100 origin-center duration-150 mt-1"></div>
//         </Link>
//       </div>
//       <div className="col-span-1 flex justify-center items-center ">
//         <Link>
//           <img className=" " src={logo} alt="" />
//         </Link>
//       </div>
//       <div className="col-span-2 flex gap-6 justify-end items-center">
//         <label className="w-9/12 relative flex justify-end">
//           <input
//             className=" border w-9/12 rounded-full outline-none px-6 py-3 bg-transparent border-[#A9A9A9]/20"
//             type="text"
//             placeholder="Search"
//           />
//           <CiSearch className="absolute top-1/2 right-6 text-xl -translate-y-1/2" />
//         </label>
//         <div className="flex gap-6 text-xl">
//           <FaRegUser className="hover:text-gray-400"></FaRegUser>
//           <FaRegHeart className="hover:text-gray-400"></FaRegHeart>
//           <LuShoppingCart className="hover:text-gray-400"></LuShoppingCart>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;



function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSectionHeight = window.innerHeight; // Height of the viewport
      const scrollPosition = window.scrollY; // Current scroll position

      // Check if the scroll position is greater than the height of the HeroSection
      if (scrollPosition > heroSectionHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-[120px] py-[30px] duration-500 grid grid-cols-5 items-center align-middle border-b border-[#A9A9A9]/20 text-gray-300 ${isScrolled ? 'bg-white text-black ' : ''}`}
    >
      <div className="col-span-2 flex gap-6 font-Questrial uppercase text-sm tracking-widest">
        <Link className="overflow-hidden group">
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
          <img className={isScrolled?'invert':'invert-0'} src={logo} alt="" />
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
}

export default Navbar;
