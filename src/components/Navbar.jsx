import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-4 py-2">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><NavLink to="/" className={({ isActive }) => isActive ? "text-blue-500 font-semibold" : ""}>Home</NavLink></li>
            <li><NavLink to="/mybookings" className={({ isActive }) => isActive ? "text-blue-500 font-semibold" : ""}>My-Bookings</NavLink></li>
            <li><NavLink to="/blogs" className={({ isActive }) => isActive ? "text-blue-500 font-semibold" : ""}>Blogs</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? "text-blue-500 font-semibold" : ""}>Contact</NavLink></li>
          </ul>
        </div>
        {/* Logo */}
        <div className="flex items-center gap-2 ml-2">
          <img src="/logo.png" alt="Law.BD" className="h-8 w-auto" />
          <span className="text-[#0F0F0FCC] font-bold text-lg">Law.BD</span>
        </div>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <nav className="menu menu-horizontal gap-4 px-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-500 text-lg font-bold underline" : "link link-hover"
            }
          >Home</NavLink>

          <NavLink
            to="/mybookings"
            className={({ isActive }) =>
              isActive ? "text-blue-500 text-lg font-bold underline" : "link link-hover"
            }
          >My-Bookings</NavLink>

          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              isActive ? "text-blue-500 text-lg font-bold underline" : "link link-hover"
            }
          >Blogs</NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-blue-500 text-lg font-bold underline" : "link link-hover"
            }
          >Contact Us</NavLink>
        </nav>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        <button className="btn btn-success">Contact Now</button>
      </div>
    </div>
  );
};

export default Navbar;
