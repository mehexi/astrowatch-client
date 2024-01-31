import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const Pagination = () => {
  return (
    <div className="join col-span-3 mx-auto flex gap-10 mb-10 items-center">
      <FaArrowRight className="rotate-180"></FaArrowRight>
      <Link className="overflow-hidden group 9">
        <h1 className="group-hover:text-gray-400">1</h1>
        <div className=" border border-gray-400 scale-x-0 group-hover:scale-x-100 origin-center duration-150 mt-1"></div>
      </Link>
      <Link className="overflow-hidden group">
        <h1 className="group-hover:text-gray-400">2</h1>
        <div className=" border border-gray-400 scale-x-0 group-hover:scale-x-100 origin-center duration-150 mt-1"></div>
      </Link>
      <Link className="overflow-hidden group">
        <h1 className="group-hover:text-gray-400">3</h1>
        <div className=" border border-gray-400 scale-x-0 group-hover:scale-x-100 origin-center duration-150 mt-1"></div>
      </Link>
      <FaArrowRight></FaArrowRight>
    </div>
  );
};

export default Pagination;
