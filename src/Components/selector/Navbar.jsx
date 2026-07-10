import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-[#030112] text-gray-400 px-4 md:px-6 lg:px-8 py-4 mb-5 flex items-center justify-center lg:justify-between md:justify-between sticky top-0 z-50 ">
      <h1 className="hidden lg:block md:block italic text-2xl font-semibold text-red-600 ">
        <Link to="/">TelemetriX </Link>
      </h1>

      <ul className="flex gap-3 sm:gap-5 md:gap-6 lg:gap-8 text-sm md:text-base whitespace-nowrap">
        {/* <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#E10600] border-b-2 border-[#E10600] pb-1"
              : "text-gray-400 hover:text-[#E10600]"
          }
        >
          Home
        </NavLink> */}

        <NavLink
          to="/schedule"
          className={({ isActive }) =>
            isActive
              ? "text-[#E10600] border-b-2 border-[#E10600] pb-1"
              : "text-gray-400 hover:text-[#E10600]"
          }
        >
          Schedule
        </NavLink>

        <NavLink
          to="/standings"
          className={({ isActive }) =>
            isActive
              ? "text-[#E10600] border-b-2 border-[#E10600] pb-1"
              : "text-gray-400 hover:text-[#E10600]"
          }
        >
          Standings
        </NavLink>

        <NavLink
          to="/results"
          className={({ isActive }) =>
            isActive
              ? "text-[#E10600] border-b-2 border-[#E10600] pb-1"
              : "text-gray-400 hover:text-[#E10600]"
          }
        >
          Results
        </NavLink>

        <NavLink
          to="/h2h"
          className={({ isActive }) =>
            isActive
              ? "text-[#E10600] border-b-2 border-[#E10600] pb-1"
              : "text-gray-400 hover:text-[#E10600]"
          }
        >
          H2H
        </NavLink>

        <NavLink
          to="/profiles"
          className={({ isActive }) =>
            isActive
              ? "text-[#E10600] border-b-2 border-[#E10600] pb-1"
              : "text-gray-400 hover:text-[#E10600]"
          }
        >
          Profiles
        </NavLink>

        <NavLink
          to="/admin"
          className={({ isActive }) =>
            `hidden md:block ${
              isActive
                ? "text-[#E10600] border-b-2 border-[#E10600] pb-1"
                : "text-white hover:text-[#E10600]"
            }`
          }
        >
          Admin
        </NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;
