import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaUser,
  FaBed,
  FaCreditCard,
  FaShieldAlt,
  FaStar,
  FaCheck,
} from "react-icons/fa";
import { MdRoomService, MdLocalOffer } from "react-icons/md";
import { GiSandsOfTime } from "react-icons/gi";

// Import images
import bookingHero from "../assets/booking-hero.webp";
import presidentialSuite from "../assets/presidential.jpg";
import executiveRoom from "../assets/exec.avif";
import ecoDeluxe from "../assets/eco-delux.jpg";

const BookNowPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    adults: 1,
    children: 0,
    roomType: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    specialRequests: "",
    paymentMethod: "creditCard",
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
  });

  const [bookingSuccess, setBookingSuccess] = useState(false);

  const roomTypes = [
    {
      id: "presidential",
      name: "Presidential Suite",
      description:
        "Opulence redefined with skyline views and private pool access",
      price: 999,
      size: "120 m²",
      beds: "1 King Bed",
      amenities: [
        "Private Pool",
        "Butler Service",
        "Jacuzzi",
        "Panoramic View",
      ],
      image: presidentialSuite,
    },
    {
      id: "executive",
      name: "Executive Room",
      description:
        "Elegant comfort for business & leisure travelers with premium amenities",
      price: 499,
      size: "65 m²",
      beds: "1 King Bed or 2 Queens",
      amenities: ["Work Desk", "Premium WiFi", "Minibar", "City View"],
      image: executiveRoom,
    },
    {
      id: "eco-deluxe",
      name: "Eco Deluxe",
      description:
        "Sustainable luxury with organic materials and energy-efficient design",
      price: 399,
      size: "55 m²",
      beds: "1 Queen Bed",
      amenities: [
        "Eco-friendly",
        "Air Purifier",
        "Organic Toiletries",
        "Garden View",
      ],
      image: ecoDeluxe,
    },
  ];

  const specialOffers = [
    {
      id: "breakfast",
      name: "Breakfast Included",
      description: "Daily gourmet breakfast for two",
      price: 49,
      selected: false,
    },
    {
      id: "spa",
      name: "Spa Package",
      description: "60-minute massage for two",
      price: 199,
      selected: false,
    },
    {
      id: "late-checkout",
      name: "Late Checkout",
      description: "Guaranteed 4pm checkout",
      price: 79,
      selected: false,
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRoomSelect = (roomId) => {
    setFormData((prev) => ({
      ...prev,
      roomType: roomId,
    }));
  };

  const handleOfferToggle = (offerId) => {
    setSpecialOffers((prev) =>
      prev.map((offer) =>
        offer.id === offerId ? { ...offer, selected: !offer.selected } : offer
      )
    );
  };

  const calculateNights = () => {
    if (formData.checkIn && formData.checkOut) {
      const diffTime = new Date(formData.checkOut) - new Date(formData.checkIn);
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }
    return 0;
  };

  const calculateTotal = () => {
    const selectedRoom = roomTypes.find(
      (room) => room.id === formData.roomType
    );
    if (!selectedRoom) return 0;

    const nights = calculateNights();
    let roomTotal = selectedRoom.price * nights;

    const selectedOffers = specialOffers.filter((offer) => offer.selected);
    const offersTotal = selectedOffers.reduce(
      (sum, offer) => sum + offer.price,
      0
    );

    return roomTotal + offersTotal;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate booking processing
    setTimeout(() => {
      setBookingSuccess(true);
    }, 2000);
  };

  return (
    <div className="font-sans bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
        <img
          src={bookingHero}
          alt="Luxury Hotel Room"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-20 text-center px-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-yellow-400">
            Book Your Stay
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Reserve your luxury experience at GoldenStay
          </p>
        </motion.div>
      </section>

      {/* Booking Progress */}
      <section className="py-8 bg-yellow-600 text-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center">
            <div
              className={`flex items-center ${
                step >= 1 ? "font-bold" : "opacity-50"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${
                  step >= 1 ? "bg-black text-yellow-400" : "bg-gray-300"
                }`}
              >
                {step > 1 ? <FaCheck /> : 1}
              </div>
              <span>Dates & Guests</span>
            </div>
            <div
              className={`flex items-center ${
                step >= 2 ? "font-bold" : "opacity-50"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${
                  step >= 2 ? "bg-black text-yellow-400" : "bg-gray-300"
                }`}
              >
                {step > 2 ? <FaCheck /> : 2}
              </div>
              <span>Room Selection</span>
            </div>
            <div
              className={`flex items-center ${
                step >= 3 ? "font-bold" : "opacity-50"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${
                  step >= 3 ? "bg-black text-yellow-400" : "bg-gray-300"
                }`}
              >
                {step > 3 ? <FaCheck /> : 3}
              </div>
              <span>Guest Details</span>
            </div>
            <div
              className={`flex items-center ${
                step >= 4 ? "font-bold" : "opacity-50"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${
                  step >= 4 ? "bg-black text-yellow-400" : "bg-gray-300"
                }`}
              >
                4
              </div>
              <span>Payment</span>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 px-6 bg-gradient-to-b from-black via-yellow-900 to-black">
        <div className="max-w-6xl mx-auto">
          {bookingSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-gray-900 rounded-xl p-12 text-center border border-yellow-500/30"
            >
              <div className="text-yellow-500 text-6xl mb-6 flex justify-center">
                <FaCheck />
              </div>
              <h2 className="text-4xl font-bold mb-4">Booking Confirmed!</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Thank you for choosing GoldenStay. Your reservation has been
                successfully confirmed. A detailed confirmation has been sent to
                your email.
              </p>
              <div className="bg-gray-800 rounded-lg p-6 max-w-md mx-auto mb-8 text-left">
                <h3 className="text-xl font-semibold mb-4 text-yellow-400">
                  Booking Summary
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Room:</span>
                    <span>
                      {roomTypes.find((r) => r.id === formData.roomType)?.name}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Dates:</span>
                    <span>
                      {new Date(formData.checkIn).toLocaleDateString()} -{" "}
                      {new Date(formData.checkOut).toLocaleDateString()}(
                      {calculateNights()} nights)
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Guests:</span>
                    <span>
                      {formData.adults} adult{formData.adults > 1 ? "s" : ""}
                      {formData.children > 0
                        ? `, ${formData.children} child${
                            formData.children > 1 ? "ren" : ""
                          }`
                        : ""}
                    </span>
                  </div>
                  <div className="flex justify-between border-t border-gray-700 pt-3 mt-3">
                    <span className="text-gray-400">Total:</span>
                    <span className="text-xl font-bold text-yellow-400">
                      ${calculateTotal().toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-yellow-500 text-black font-semibold rounded-full shadow-lg"
                onClick={() => {
                  setBookingSuccess(false);
                  setStep(1);
                  setFormData({
                    checkIn: "",
                    checkOut: "",
                    adults: 1,
                    children: 0,
                    roomType: "",
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    specialRequests: "",
                    paymentMethod: "creditCard",
                    cardNumber: "",
                    cardExpiry: "",
                    cardCvc: "",
                  });
                }}
              >
                Make Another Reservation
              </motion.button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="grid md:grid-cols-3 gap-8">
              {/* Main Form Column */}
              <div className="md:col-span-2 space-y-8">
                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gray-900 rounded-xl p-8 border border-yellow-500/30"
                  >
                    <h2 className="text-2xl font-bold mb-6 text-yellow-400">
                      <FaCalendarAlt className="inline mr-2" />
                      Select Dates & Guests
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label
                          htmlFor="checkIn"
                          className="block text-gray-300 mb-2"
                        >
                          Check-In Date{" "}
                          <span className="text-yellow-500">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="date"
                            id="checkIn"
                            name="checkIn"
                            value={formData.checkIn}
                            onChange={handleChange}
                            required
                            min={new Date().toISOString().split("T")[0]}
                            className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
                          />
                          <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="checkOut"
                          className="block text-gray-300 mb-2"
                        >
                          Check-Out Date{" "}
                          <span className="text-yellow-500">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="date"
                            id="checkOut"
                            name="checkOut"
                            value={formData.checkOut}
                            onChange={handleChange}
                            required
                            min={
                              formData.checkIn ||
                              new Date().toISOString().split("T")[0]
                            }
                            className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
                          />
                          <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        </div>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="adults"
                          className="block text-gray-300 mb-2"
                        >
                          Adults <span className="text-yellow-500">*</span>
                        </label>
                        <div className="relative">
                          <select
                            id="adults"
                            name="adults"
                            value={formData.adults}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white appearance-none"
                          >
                            {[1, 2, 3, 4, 5, 6].map((num) => (
                              <option key={num} value={num}>
                                {num}
                              </option>
                            ))}
                          </select>
                          <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="children"
                          className="block text-gray-300 mb-2"
                        >
                          Children
                        </label>
                        <div className="relative">
                          <select
                            id="children"
                            name="children"
                            value={formData.children}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white appearance-none"
                          >
                            {[0, 1, 2, 3, 4].map((num) => (
                              <option key={num} value={num}>
                                {num}
                              </option>
                            ))}
                          </select>
                          <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        </div>
                      </div>
                    </div>
                    <div className="mt-8 flex justify-end">
                      <motion.button
                        type="button"
                        onClick={() => setStep(2)}
                        disabled={!formData.checkIn || !formData.checkOut}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-6 py-3 rounded-full font-semibold ${
                          !formData.checkIn || !formData.checkOut
                            ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                            : "bg-yellow-500 text-black"
                        }`}
                      >
                        Next: Select Room
                      </motion.button>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                  >
                    <div className="bg-gray-900 rounded-xl p-8 border border-yellow-500/30">
                      <h2 className="text-2xl font-bold mb-6 text-yellow-400">
                        <FaBed className="inline mr-2" />
                        Select Your Room
                      </h2>
                      <div className="space-y-6">
                        {roomTypes.map((room) => (
                          <motion.div
                            key={room.id}
                            whileHover={{ y: -5 }}
                            className={`relative overflow-hidden rounded-xl border ${
                              formData.roomType === room.id
                                ? "border-yellow-500"
                                : "border-gray-700"
                            } transition-all cursor-pointer`}
                            onClick={() => handleRoomSelect(room.id)}
                          >
                            <div className="grid md:grid-cols-3">
                              <div className="md:col-span-1">
                                <img
                                  src={room.image}
                                  alt={room.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="md:col-span-2 p-6">
                                <div className="flex justify-between items-start">
                                  <h3 className="text-xl font-bold">
                                    {room.name}
                                  </h3>
                                  <div className="text-yellow-400 font-bold text-xl">
                                    ${room.price}
                                    <span className="text-gray-400 text-sm font-normal">
                                      {" "}
                                      / night
                                    </span>
                                  </div>
                                </div>
                                <p className="text-gray-400 my-3">
                                  {room.description}
                                </p>
                                <div className="flex justify-between text-sm text-gray-400 mb-4">
                                  <span>{room.size}</span>
                                  <span>{room.beds}</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                  {room.amenities.map((amenity, i) => (
                                    <span
                                      key={i}
                                      className="text-xs bg-yellow-500/10 text-yellow-400 px-2 py-1 rounded"
                                    >
                                      {amenity}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                            {formData.roomType === room.id && (
                              <div className="absolute top-4 right-4 bg-yellow-500 text-black p-1 rounded-full">
                                <FaCheck size={14} />
                              </div>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gray-900 rounded-xl p-8 border border-yellow-500/30">
                      <h2 className="text-2xl font-bold mb-6 text-yellow-400">
                        <MdLocalOffer className="inline mr-2" />
                        Special Offers & Add-ons
                      </h2>
                      <div className="space-y-4">
                        {specialOffers.map((offer) => (
                          <motion.div
                            key={offer.id}
                            whileHover={{ scale: 1.01 }}
                            className={`flex items-start p-4 rounded-lg border ${
                              offer.selected
                                ? "border-yellow-500 bg-yellow-500/10"
                                : "border-gray-700"
                            } cursor-pointer transition-colors`}
                            onClick={() => handleOfferToggle(offer.id)}
                          >
                            <div
                              className={`w-5 h-5 rounded border mr-4 mt-1 flex-shrink-0 ${
                                offer.selected
                                  ? "bg-yellow-500 border-yellow-500"
                                  : "border-gray-500"
                              }`}
                            >
                              {offer.selected && (
                                <FaCheck className="text-black text-xs" />
                              )}
                            </div>
                            <div className="flex-grow">
                              <h3 className="font-semibold">{offer.name}</h3>
                              <p className="text-gray-400 text-sm">
                                {offer.description}
                              </p>
                            </div>
                            <div className="text-yellow-500 font-medium">
                              +${offer.price}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <motion.button
                        type="button"
                        onClick={() => setStep(1)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 border border-yellow-500 text-yellow-500 font-semibold rounded-full"
                      >
                        Back
                      </motion.button>
                      <motion.button
                        type="button"
                        onClick={() => setStep(3)}
                        disabled={!formData.roomType}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-6 py-3 rounded-full font-semibold ${
                          !formData.roomType
                            ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                            : "bg-yellow-500 text-black"
                        }`}
                      >
                        Next: Guest Details
                      </motion.button>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gray-900 rounded-xl p-8 border border-yellow-500/30"
                  >
                    <h2 className="text-2xl font-bold mb-6 text-yellow-400">
                      <FaUser className="inline mr-2" />
                      Guest Information
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-gray-300 mb-2"
                        >
                          First Name <span className="text-yellow-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-gray-300 mb-2"
                        >
                          Last Name <span className="text-yellow-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-gray-300 mb-2"
                        >
                          Email <span className="text-yellow-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-gray-300 mb-2"
                        >
                          Phone Number{" "}
                          <span className="text-yellow-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
                        />
                      </div>
                    </div>
                    <div className="mb-6">
                      <label
                        htmlFor="specialRequests"
                        className="block text-gray-300 mb-2"
                      >
                        Special Requests
                      </label>
                      <textarea
                        id="specialRequests"
                        name="specialRequests"
                        rows="4"
                        value={formData.specialRequests}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
                        placeholder="Any special requirements or preferences..."
                      ></textarea>
                    </div>
                    <div className="flex justify-between">
                      <motion.button
                        type="button"
                        onClick={() => setStep(2)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 border border-yellow-500 text-yellow-500 font-semibold rounded-full"
                      >
                        Back
                      </motion.button>
                      <motion.button
                        type="button"
                        onClick={() => setStep(4)}
                        disabled={
                          !formData.firstName ||
                          !formData.lastName ||
                          !formData.email ||
                          !formData.phone
                        }
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-6 py-3 rounded-full font-semibold ${
                          !formData.firstName ||
                          !formData.lastName ||
                          !formData.email ||
                          !formData.phone
                            ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                            : "bg-yellow-500 text-black"
                        }`}
                      >
                        Next: Payment
                      </motion.button>
                    </div>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gray-900 rounded-xl p-8 border border-yellow-500/30"
                  >
                    <h2 className="text-2xl font-bold mb-6 text-yellow-400">
                      <FaCreditCard className="inline mr-2" />
                      Payment Information
                    </h2>
                    <div className="mb-6">
                      <label className="block text-gray-300 mb-4">
                        Payment Method
                      </label>
                      <div className="flex gap-4 mb-6">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="creditCard"
                            checked={formData.paymentMethod === "creditCard"}
                            onChange={handleChange}
                            className="mr-2"
                          />
                          Credit Card
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="paypal"
                            checked={formData.paymentMethod === "paypal"}
                            onChange={handleChange}
                            className="mr-2"
                          />
                          PayPal
                        </label>
                      </div>

                      {formData.paymentMethod === "creditCard" && (
                        <div className="space-y-6">
                          <div>
                            <label
                              htmlFor="cardNumber"
                              className="block text-gray-300 mb-2"
                            >
                              Card Number{" "}
                              <span className="text-yellow-500">*</span>
                            </label>
                            <input
                              type="text"
                              id="cardNumber"
                              name="cardNumber"
                              value={formData.cardNumber}
                              onChange={handleChange}
                              required
                              placeholder="1234 5678 9012 3456"
                              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
                            />
                          </div>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <label
                                htmlFor="cardExpiry"
                                className="block text-gray-300 mb-2"
                              >
                                Expiry Date{" "}
                                <span className="text-yellow-500">*</span>
                              </label>
                              <input
                                type="text"
                                id="cardExpiry"
                                name="cardExpiry"
                                value={formData.cardExpiry}
                                onChange={handleChange}
                                required
                                placeholder="MM/YY"
                                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="cardCvc"
                                className="block text-gray-300 mb-2"
                              >
                                CVC <span className="text-yellow-500">*</span>
                              </label>
                              <input
                                type="text"
                                id="cardCvc"
                                name="cardCvc"
                                value={formData.cardCvc}
                                onChange={handleChange}
                                required
                                placeholder="123"
                                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center text-gray-400 mb-8">
                      <FaShieldAlt className="mr-2 text-yellow-500" />
                      <span>
                        Your payment information is encrypted and secure
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <motion.button
                        type="button"
                        onClick={() => setStep(3)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 border border-yellow-500 text-yellow-500 font-semibold rounded-full"
                      >
                        Back
                      </motion.button>
                      <motion.button
                        type="submit"
                        disabled={
                          formData.paymentMethod === "creditCard" &&
                          (!formData.cardNumber ||
                            !formData.cardExpiry ||
                            !formData.cardCvc)
                        }
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-8 py-3 rounded-full font-semibold flex items-center gap-2 ${
                          formData.paymentMethod === "creditCard" &&
                          (!formData.cardNumber ||
                            !formData.cardExpiry ||
                            !formData.cardCvc)
                            ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                            : "bg-yellow-500 text-black"
                        }`}
                      >
                        Complete Booking
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Summary Column */}
              <div className="space-y-6">
                <div className="bg-gray-900 rounded-xl p-6 border border-yellow-500/30 sticky top-6">
                  <h2 className="text-xl font-bold mb-4 text-yellow-400">
                    Booking Summary
                  </h2>

                  {formData.checkIn && formData.checkOut && (
                    <div className="mb-6">
                      <h3 className="font-semibold mb-2">Dates</h3>
                      <div className="flex justify-between text-gray-400">
                        <span>Check-In:</span>
                        <span>
                          {new Date(formData.checkIn).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex justify-between text-gray-400">
                        <span>Check-Out:</span>
                        <span>
                          {new Date(formData.checkOut).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex justify-between text-gray-400 border-t border-gray-700 mt-2 pt-2">
                        <span>Nights:</span>
                        <span>{calculateNights()}</span>
                      </div>
                    </div>
                  )}

                  {formData.adults > 0 && (
                    <div className="mb-6">
                      <h3 className="font-semibold mb-2">Guests</h3>
                      <div className="flex justify-between text-gray-400">
                        <span>Adults:</span>
                        <span>{formData.adults}</span>
                      </div>
                      {formData.children > 0 && (
                        <div className="flex justify-between text-gray-400">
                          <span>Children:</span>
                          <span>{formData.children}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {formData.roomType && (
                    <div className="mb-6">
                      <h3 className="font-semibold mb-2">Room</h3>
                      <div className="flex justify-between">
                        <span className="text-gray-400">
                          {
                            roomTypes.find((r) => r.id === formData.roomType)
                              ?.name
                          }
                        </span>
                        <span>
                          $
                          {
                            roomTypes.find((r) => r.id === formData.roomType)
                              ?.price
                          }{" "}
                          × {calculateNights()} nights
                        </span>
                      </div>
                    </div>
                  )}

                  {specialOffers.filter((o) => o.selected).length > 0 && (
                    <div className="mb-6">
                      <h3 className="font-semibold mb-2">Add-ons</h3>
                      <div className="space-y-2">
                        {specialOffers
                          .filter((o) => o.selected)
                          .map((offer) => (
                            <div
                              key={offer.id}
                              className="flex justify-between text-sm"
                            >
                              <span className="text-gray-400">
                                {offer.name}
                              </span>
                              <span>${offer.price}</span>
                            </div>
                          ))}
                      </div>
                    </div>
                  )}

                  <div className="border-t border-gray-700 pt-4">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total:</span>
                      <span className="text-yellow-400">
                        ${calculateTotal().toLocaleString()}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      Taxes and fees included
                    </p>
                  </div>

                  {step === 4 && (
                    <div className="mt-6 flex items-center text-sm text-gray-400">
                      <GiSandsOfTime className="mr-2 text-yellow-500" />
                      <span>
                        Your room will be held for 30 minutes while you complete
                        your booking
                      </span>
                    </div>
                  )}
                </div>

                <div className="bg-gray-900 rounded-xl p-6 border border-yellow-500/30">
                  <h2 className="text-xl font-bold mb-4 text-yellow-400">
                    Why Book With Us?
                  </h2>
                  <ul className="space-y-3 text-gray-400">
                    <li className="flex items-start">
                      <FaStar className="text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Best price guarantee</span>
                    </li>
                    <li className="flex items-start">
                      <FaStar className="text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                      <span>No booking fees</span>
                    </li>
                    <li className="flex items-start">
                      <FaStar className="text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                      <span>
                        Free cancellation up to 48 hours before check-in
                      </span>
                    </li>
                    <li className="flex items-start">
                      <FaStar className="text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                      <span>24/7 customer support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default BookNowPage;
