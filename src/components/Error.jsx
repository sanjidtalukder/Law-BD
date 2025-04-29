import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { MdError } from "react-icons/md";

const Error = () => {
  const [searchTerm, setSearchTerm] = useState(""); 
  const location = useLocation(); 

  useEffect(() => {
    setSearchTerm(location.pathname); 
  }, [location]); 

  return (
    <>
      <Navbar searchTerm={searchTerm} /> 
      <div className="flex flex-col items-center justify-center bg-gray-100 rounded-2xl p-4 sm:p-6 m-8 text-center">
        {/* <img src="/warning-icon.png" alt="404 Error" className="w-64 mb-6" /> */}
        <h1 className="text-4xl sm:text-5xl font-bold text-[#0F0F0F] mb-4">No Lawyer Found!!!</h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-4 text-center">
          No Lawyer found with this number
        </p>
        <span className="flex items-center gap-2 text-gray-600 mb-3 text-2xl sm:text-3xl">
          <MdError />
          <span>{searchTerm}</span>
        </span>
        <Link
          to="/"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-all duration-300"
        >
          Go to Homepage
        </Link>
      </div>
    </>
  );
};

export default Error;
