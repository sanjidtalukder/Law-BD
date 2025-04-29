import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 700); 

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-bars loading-xl text-primary"></span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 rounded-2xl p-6 sm:p-8 m-6 sm:m-8 text-center">
      <img
        src={`/Error.png`}
        alt="404 Error"
        className="w-48 sm:w-64 mb-6"
      />

      <p className="text-lg sm:text-xl text-gray-700 mb-6">
        Oops! The page you're looking for is Empty.
      </p>

      <Link
        to="/"
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default Contact;
