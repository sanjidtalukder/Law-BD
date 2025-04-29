import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { MdCancel } from "react-icons/md";
import AppointmentBarChart from "./AppointmentBarChart";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(storedBookings);
  }, []);

  const handleCancel = (id) => {
    const cancelledLawyer = bookings.find((booking) => booking.id === id);
    const updated = bookings.filter((booking) => booking.id !== id);
    setBookings(updated);
    localStorage.setItem("bookings", JSON.stringify(updated));

    const chartData = JSON.parse(localStorage.getItem("chartData")) || [];
    const updatedChart = chartData.filter(
      (item) => item.name !== `Lawyer ${cancelledLawyer.name}`
    );
    localStorage.setItem("chartData", JSON.stringify(updatedChart));

    toast(`Your appointment with ${cancelledLawyer.name} has been cancelled!`, {
      icon: <MdCancel color="#b30000" size={22} />,
      style: {
        backgroundColor: "white",
        padding: "10px",
        color: "#b30000",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
        borderRadius: "8px",
      },
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-bars loading-xl text-primary"></span>
      </div>
    );
  }

  if (bookings.length === 0) {
    return (
      <div className="text-center py-10 w-full">
        <h2 className="text-2xl font-bold text-[#333] mb-4">No appointments booked yet!</h2>
        <Link to="/" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
          Go to Homepage
        </Link>
      </div>
    );
  }

  const chartData = bookings.map((item) => ({
    name: `Lawyer ${item.name}`,
    value: item.consultationFee,
  }));

  return (
    <>
      <div>
        <AppointmentBarChart chartData={chartData} />
      </div>

      <div className="text-center mx-auto p-6">
        <h2 className="text-3xl font-bold text-center mb-6">My Today Appointments</h2>
        <p className="text-[#0F0F0F] font-medium text-center">
          Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.
        </p>

        <div className="space-y-6 sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
          {bookings.map((lawyer) => (
            <div key={lawyer.id} className="bg-white rounded-lg shadow-xl p-6">
              <div className="flex flex-col md:flex-row justify-between p-3">
                <div>
                  <h3 className="text-xl font-bold text-left">{lawyer.name}</h3>
                  <p className="text-[#14141499] font-medium text-left">
                    <strong>Speciality:</strong> {lawyer.speciality}
                  </p>
                </div>
                <div className="mt-3 md:mt-0">
                  <p className="text-[#14141499] font-medium">
                    <strong>Consultation Fee:</strong> {lawyer.consultationFee}
                  </p>
                </div>
              </div>
              <hr className="border-dotted border-1 border-gray-300" />
              <button
                onClick={() => handleCancel(lawyer.id)}
                className="mt-4 w-full font-bold bg-white text-[#FF0000] px-4 py-2 rounded-2xl border-red-500 border-2 hover:text-[#0F0F0F] hover:bg-[#ff00009d]"
              >
                Cancel Appointment
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyBookings;
