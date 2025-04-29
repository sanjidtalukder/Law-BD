const bookAppointment = (lawyer) => {
  const existing = JSON.parse(localStorage.getItem("bookings")) || [];

  const alreadyBooked = existing.find((item) => item.id === lawyer.id);
  if (alreadyBooked) {
    return { success: false, message: "You already booked this lawyer!" };
  }

  const updated = [...existing, lawyer];
  localStorage.setItem("bookings", JSON.stringify(updated));

  
  const chartData = JSON.parse(localStorage.getItem("chartData")) || [];
  const existsInChart = chartData.find((item) => item.id === lawyer.id);
  if (!existsInChart) {
    const newData = [
      ...chartData,
      {
        id: lawyer.id,
        name: lawyer.name,
        fee: lawyer.consultationFee,
      },
    ];
    localStorage.setItem("chartData", JSON.stringify(newData));
  }

  return { success: true, message: `Appointment booked with ${lawyer.name}` };
};

export default bookAppointment;
