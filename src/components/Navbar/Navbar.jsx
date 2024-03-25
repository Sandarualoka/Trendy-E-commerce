import React from "react";
import Logo from "../../assets/Logo.png";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white">
      {/* Upper Navbar */}
      <div className="bg-primary py-3">
        <div className="container text-white flex justify-between items-center">
          <div>
            <a href="#" className="font-bold flex gap-2 text-2xl sm:text-3xl">
              <img
                src={Logo}
                alt="logo"
                className="w-10 uppercase text-white"
              />
              Trendy
            </a>
          </div>

          {/* Search Bar  */}
          <div>
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] duration-300 rounded-full border border-white px-2 py-1 focus:outline-none focus:border-1 focus:border-primary "
              />
              <CiSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
          </div>

          {/* and Order btn */}

          <buton
            onClick={() => alert("Order Not Available Yet")}
            className="cursor-pointer bg-white text-primary p-2 rounded-lg flex items-center gap-3 group"
          >
            <span className="group-hover:block hidden transition-all duration-300">
              Order
            </span>
            <IoCartOutline />
          </buton>
        </div>
      </div>

      {/* LowerNAvbar */}
      <div></div>
    </div>
  ); //first commit
};

export default Navbar;
