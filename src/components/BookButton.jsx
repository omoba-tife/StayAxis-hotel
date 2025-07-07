import React from "react";

const BookButton = ({ roomName }) => {
  const handleBooking = () => {
    alert(`Booking initiated for ${roomName}`);
    // You can replace this alert with modal, form, or API booking logic
  };

  return (
    <button
      onClick={handleBooking}
      className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400 transition font-semibold"
    >
      Book Now
    </button>
  );
};

export default BookButton;
