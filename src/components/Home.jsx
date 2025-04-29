import React, { useEffect, useState } from 'react';
import Lawyers from './Lawyers';
import SuccessSection from './SuccessSection';

const Home = () => {
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
    <>
      <div
        className="h-screen p-4 sm:p-6 md:p-8 m-2 rounded-xl bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url('/banner-img-1.png')`,
        }}
      >
        <div className="text-center px-4 text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            It avoids subjective claims or<br />
            exaggeration that might raise red<br />
            flags legally
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-medium drop-shadow-md">
            Our platform connects you with verified, experienced doctors across various specialties —<br />
            all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
          </p>
        </div>
      </div>

      <Lawyers />
      <SuccessSection />
    </>
  );
};

export default Home;
