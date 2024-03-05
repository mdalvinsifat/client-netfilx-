import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { NavLink } from "react-router-dom";
import './Style.css'

function Header() {




  return (

<div className="navbar bg-base-100 justify-center flex r bg-gradient-to-b from-black postion">
  <div className="flex-1">
    <NavLink to={"/"} className="btn btn-ghost text-xl">
    <img
        className=" w-56 ml-4 mt-3"
        color="Red"
        src="https://img01.products.bt.co.uk/content/dam/bt/portal/images/logos/tv/Netflix_Logo_Final.png"
        alt="logo"
      />
    </NavLink>
  </div>
  <div className="flex-none ms-auto">
    <ul className="menu menu-horizontal px-1 mt-3">
      <li>

      <div className="flex items-center">
        <IoIosArrowDropdown size={24} color="white" />
        <h1 className="text-white">AlvinSifat</h1>
        <div className="ml-4">
          <button
            // onClick={handlelogout}
            className="bg-red-700 text-white px-4 py-2 "
          >
            Logout
          </button>
          <button className="bg-red-700 text-white px-4 py-2 mx-2">
            Search Movie
          </button>
        </div>
      </div>

      </li>
    </ul>
  </div>
</div>

  );
}

export default Header;