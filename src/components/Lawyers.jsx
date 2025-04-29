import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Lawyers = () => {
  const [lawyers, setLawyers] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("/lawyers.json")
      .then((res) => res.json())
      .then((data) => setLawyers(data));
  }, []);

  const displayedLawyers = showAll ? lawyers : lawyers.slice(0, 6);

  return (
    <div className="p-6 min-h-screen mx-auto w-full flex flex-col">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-green-700 mb-2">
          Our Best Lawyers
        </h2>
        <p className="text-gray-600 text-base sm:text-xl font-medium">
          Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. Whether
          <br /> it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedLawyers.map((lawyer) => (
          <div
            key={lawyer.license}
            className="card flex flex-col md:flex-row bg-base-100 shadow hover:shadow-lg transition-all duration-300 rounded-xl overflow-hidden"
          >
            {/* Left: Image */}
            <figure className="md:w-1/3 w-full flex justify-center items-center">
              <img
                src={`/${lawyer.image}`}
                alt={lawyer.name}
                className="h-32 w-32 object-cover rounded-full border-4 border-green-600 p-1"
              />
            </figure>

            {/* Right: Lawyer Info */}
            <div className="card-body md:w-2/3 w-full">
              <div className="flex justify-between items-center gap-2 mr-2">
                <button className="btn btn-success btn-sm">Available</button>
                <button className="btn btn-sm bg-[#176AE51A] text-[#176AE5] border border-[#176AE5]">
                  Experience: {lawyer.experience}
                </button>
              </div>

              <h2 className="card-title text-xl sm:text-2xl font-bold">{lawyer.name}</h2>
              <p className="text-gray-600 text-base sm:text-xl">Speciality: {lawyer.speciality}</p>
              <hr className="border-dashed border-1 border-gray-400" />

              <p className="text-gray-600 text-base sm:text-xl">License: {lawyer.license}</p>
              <div className="card-actions justify-end">
                <Link
                  to={`/lawyer/${lawyer.id}`}
                  className="btn btn-sm btn-outline btn-success border-blue-600 w-full"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {!showAll && lawyers.length > 6 && (
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(true)}
            className="btn btn-success px-10 rounded-full"
          >
            View All Lawyers
          </button>
        </div>
      )}
    </div>
  );
};

export default Lawyers;
