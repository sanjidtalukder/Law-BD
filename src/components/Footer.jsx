import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0F0F0F] text-white px-4 sm:px-10 py-6 sm:py-8 rounded-t-xl text-center lg:text-center">
      {/* Logo & Title */}
      <div className="flex flex-col md:flex-row items-center justify-center border border-dashed border-gray-500 rounded-lg p-3 m-2 w-fit mx-auto">
        <img src="/logo.png" alt="Logo" className="bg-white rounded-full w-16 h-16 md:w-20 md:h-20" />
        <h2 className="text-xl md:text-2xl font-bold mt-3 md:mt-0 md:ml-4">Law.BD</h2>
      </div>

      {/* Navigation Links */}
      <nav className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-1 gap-y-2 text-base sm:text-lg font-medium my-6 max-w-3xl mx-auto">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-400 font-semibold underline" : "hover:text-blue-300 transition"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/mybookings"
          className={({ isActive }) =>
            isActive ? "text-blue-400 font-semibold underline" : "hover:text-blue-300 transition"
          }
        >
          My Bookings
        </NavLink>
        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            isActive ? "text-blue-400 font-semibold underline" : "hover:text-blue-300 transition"
          }
        >
          Blogs
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-blue-400 font-semibold underline" : "hover:text-blue-300 transition"
          }
        >
          Contact Us
        </NavLink>
      </nav>

      {/* Social Icons */}
      <div className="flex justify-center gap-5 mb-6">
        <a href="https://www.facebook.com/share/19TNz9rmzz/" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg" alt="Facebook" className="h-5 w-5 invert hover:scale-110 transition-transform" />
        </a>
        <a href="https://www.linkedin.com/in/md-sanjid-talukder-08b681320" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/x.svg" alt="X" className="h-5 w-5 invert hover:scale-110 transition-transform" />
        </a>
        <a href="https://www.linkedin.com/in/md-sanjid-talukder-08b681320" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" alt="LinkedIn" className="h-5 w-5 invert hover:scale-110 transition-transform" />
        </a>
        <a href="https://youtube.com/@sanjid0.133?si=hKC5UkgCkUgGq7Wr" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg" alt="YouTube" className="h-5 w-5 invert hover:scale-110 transition-transform" />
        </a>
      </div>

      {/* Copyright */}
      <div className="text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Law.BD. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
