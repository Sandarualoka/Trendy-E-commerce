import React from "react";
import Logo from "../../assets/Logo.png";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top rated",
    link: "/services",
  },
  {
    id: 3,
    name: "About",
    link: "/about",
  },
  {
    id: 4,
    name: "Contact",
    link: "/contact",
  },
];

const DropDownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling ",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];

const Navbar = () => {
  return (
    <div className="shadow-md bg-white dark:text-black">
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
          <div className="justify-between flex items-center gap-4 ">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] duration-300 rounded-full border border-white px-2 py-1 focus:outline-none focus:border-1 focus:border-primary "
              />
              <CiSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            {/* Order btn */}

            <buton
              onClick={() => alert("Order Not Available Yet")}
              className="cursor-pointer bg-white text-primary p-2 rounded-lg flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-300">
                Order
              </span>
              <IoCartOutline className="text-xl drop-shadow-sm" />
            </buton>
          </div>
        </div>
      </div>

      {/* LowerNAvbar */}
      <div className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                className="inline-block px-4 text-black hover:text-gray-400 duration-200"
                href={data.link}
              >
                {data.name}
              </a>
            </li>
          ))}

          {/* drop down list */}

          <li className="group relative cursor-pointer">
            <a
              href="#"
              className=" text-black flex items-center gap-[2px] py-2"
            >
              Trending Items
              <span>
                <IoMdArrowDropdown className="transition-all duration-500 group-hover:rotate-180" />
              </span>
            </a>

            <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white text-black p-2">
              <ul>
                {DropDownLinks.map((data) => (
                  <li key={data.id}>
                    <a href={data.link}>{data.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
  //first commit
};

export default Navbar;
