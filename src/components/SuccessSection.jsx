import React from "react";
import CountUp from "react-countup";

const data = [
  {
    img: "/success-doctor.png",
    number: 199,
    title: "Total Lawyer",
  },
  {
    img: "/success-review.png",
    number: 467,
    title: "Total Reviews",
  },
  {
    img: "/success-patients.png",
    number: 1900,
    title: "Cases Initiated",
  },
  {
    img: "/success-staffs.png",
    number: 300,
    title: "Total Stuffs",
  },
];

const SuccessSection = () => {
  return (
    <div className="py-12 px-4 bg-gray-50">
      {/* Section Title */}
      <div className="text-center mb-10 max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0F0F0F] mb-3">
          We Provide Best Law Services
        </h2>
        <p className="text-[#0f0f0f70] font-medium text-base sm:text-lg">
          Our platform connects you with verified, experienced Lawyers across various specialities — all at your convenience.
        </p>
      </div>

      {/* Responsive Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 text-center"
          >
            <div className="flex justify-center mb-4">
              <img
                src={item.img}
                alt={item.title}
                className="w-16 h-16 object-contain"
              />
            </div>
            <h3 className="text-3xl font-bold text-gray-800">
              <CountUp end={item.number} duration={5} />
              <span>+</span>
            </h3>
            <p className="text-gray-600 font-medium mt-2">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessSection;
