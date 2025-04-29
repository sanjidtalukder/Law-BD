import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import LawyersProfileDetails from "./LawyersProfileDetails";
import AppointmentBooking from "./AppointmentBooking";

const LawyerDetails = () => {
  const { id } = useParams();
  const [lawyer, setLawyer] = useState(null);

  useEffect(() => {
    fetch("/lawyers.json")
      .then((res) => res.json())
      .then((data) => {
        const selected = data.find((law) => law.id === parseInt(id));
        setLawyer(selected);
      });
  }, [id]);

  if (!lawyer) return <div className="text-center py-10">Loading...</div>;

  return (
    <>
      <LawyersProfileDetails />

      <div className="mx-auto py-10 px-4 w-full max-w-4xl shadow rounded-2xl bg-gray-200">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src={`/${lawyer.image}`}
            alt={lawyer.name}
            className="w-2/3 md:w-1/3 h-full object-cover rounded-lg mb-6 md:mb-0 md:mr-8"
          />

          <div className="w-full md:w-2/3">
            <button className="btn btn-sm bg-[#176AE51A] text-[#176AE5]">
              Experience: {lawyer.experience}
            </button>
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">{lawyer.name}</h2>
            <p className="text-base sm:text-xl">
              <span className="text-[#141414] font-medium">Speciality:</span> {lawyer.speciality}
            </p>
            <p className="text-base sm:text-xl">
              <span className="text-[#141414] font-medium">Experience:</span> {lawyer.experience}
            </p>
            <p className="text-base sm:text-xl">
              <span className="text-[#141414] font-medium">License:</span> {lawyer.license}
            </p>
            <div className="mt-3 flex flex-col gap-2 p-2">
              <div className="flex items-start gap-3">
                <strong className="min-w-[100px] mt-1">Availability:</strong>
                <div className="flex flex-wrap gap-2">
                  {lawyer.availability.map((day, index) => (
                    <button
                      key={index}
                      className="bg-[#FFA0001A] text-[#FFA000] py-1 px-4 rounded-md hover:bg-green-600"
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-base sm:text-xl">
              <span className="text-[#141414] font-medium">Consultation Fee:</span>
              <span className="text-green-700 text-xl font-medium"> {lawyer.consultationFee}</span>
            </p>
          </div>
        </div>
      </div>

      <AppointmentBooking lawyer={lawyer} />
    </>
  );
};

export default LawyerDetails;
