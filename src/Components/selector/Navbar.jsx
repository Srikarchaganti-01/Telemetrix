import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-[#030112] text-gray-400  px-8 py-4 mb-5 flex items-center justify-between border-red-700 sticky top-0 z-50  ">
      <h1 className="italic text-2xl font-semibold text-red-600 ">
        <Link to="/">TelemetriX </Link>
      </h1>

      <ul className="flex gap-8 text-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#E10600] border-b-2 border-[#E10600] pb-1"
              : "text-gray-400 hover:text-[#E10600]"
          }
        >
          Home
        </NavLink>

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
            isActive
              ? "text-[#E10600] border-b-2 border-[#E10600] pb-1"
              : "text-white hover:text-[#E10600]"
          }
        >
          Admin
        </NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;
