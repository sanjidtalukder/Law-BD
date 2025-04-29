import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import bookAppointment from "../utils/bookAppointment";
import { BiError } from "react-icons/bi";


const AppointmentBooking = ({ lawyer }) => {
  const navigate = useNavigate();

  const handleBooking = () => {
    const result = bookAppointment(lawyer);
    if (result.success) {
      toast.success(result.message);
      navigate("/bookings");
    } else {
      toast.error(result.message);
    }
  };

  return (
    <div className="bg-gray-200 shadow-lg p-6 m-6 rounded-2xl mx-auto text-center text-[#141414] w-full sm:w-[1150px]">
      <h1 className="text-2xl sm:text-3xl font-bold text-[#141414] p-2">Book an Appointment</h1>
      <hr className="border-dashed border-2  border-gray-400 " />

      <div className="flex flex-col sm:flex-row justify-between p-3 m-2">
        <h1 className="text-xl sm:text-2xl text-[#141414] font-medium">Availability</h1>
        <button className="btn btn-primary bg-[#09982F1A] text-[#09982F] border-none mt-2 sm:mt-0">
          Lawyer Available Today
        </button>
      </div>
      <hr className="border-2  border-gray-400 " />
      <br />

      <div className="flex flex-col gap-2">
        <button className="bg-[#FFA0001A] text-[#FFA000] py-1 px-4 rounded-md text-left flex items-start gap-2">
          <span className="text-xl mt-1">
            <BiError />
          </span>
          <span>
            Due to high patient volume, we are currently accepting appointments for today only.
            We appreciate your understanding and cooperation.
          </span>
        </button>

        <button
          onClick={handleBooking}
          className="bg-[#0EA106] text-white px-6 py-2 w-full rounded-lg"
        >
          Book Appointment Now
        </button>
      </div>
    </div>
  );
};

export default AppointmentBooking;
