import React, { useState, useRef } from "react";
import {
  FaBed,
  FaWifi,
  FaBath,
  FaTv,
  FaConciergeBell,
  FaSnowflake,
  FaHotTub,
  FaCocktail,
  FaDumbbell,
  FaSwimmer,
  FaCoffee,
  FaUtensils,
  FaCar,
  FaLeaf,
  FaCamera,
  FaStar,
  FaSearch,
  FaMapMarkerAlt,
  FaUsers,
  FaCalendarAlt,
  FaArrowRight,
  FaArrowLeft,
} from "react-icons/fa";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useAnimation,
} from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import sarahjohnson from "../assets/sarahjohnson.jpg";
import michealchen from "../assets/micheal-chen.jpg";
import priyakapoor from "../assets/priyakapoor.jpg";
import emmawilliams from "../assets/emma-williams.jpg";
import davidrodriguez from "../assets/davidrodriq.jpg";
import presidentialSuite from "../assets/presidential.jpg";
import executiveRoom from "../assets/exec.avif";
import ecoDeluxe from "../assets/eco-delux.jpg";
import luxurySuite from "../assets/luxury-suite.jpg";
// import standardRoom from "../assets/standard-room.jpg";
import familySuite from "../assets/family-suite.jpg";
import romanticGetaway from "../assets/romantic-getaway.jpg";
import hotelExterior from "../assets/hotel-exterior.avif";

const rooms = [
  {
    id: 1,
    name: "Presidential Suite",
    price: 999,
    description:
      "Experience ultimate luxury in our expansive Presidential Suite featuring panoramic skyline views, a private infinity pool, and bespoke butler service.",
    image: presidentialSuite,
    size: "120 m²",
    occupancy: "2 adults",
    view: "City skyline",
    features: [
      { icon: <FaBed />, label: "King Bed" },
      { icon: <FaHotTub />, label: "Private Pool" },
      { icon: <FaWifi />, label: "Premium Wi-Fi" },
      { icon: <FaBath />, label: "Marble Bath" },
      { icon: <FaCocktail />, label: "Private Bar" },
      { icon: <FaConciergeBell />, label: "24/7 Butler" },
    ],
    amenities: [
      "Private terrace with city views",
      "Bespoke pillow menu",
      "Bathrobe and slippers",
      "Premium toiletries",
      "Nespresso machine",
    ],
    gallery: [presidentialSuite, hotelExterior, executiveRoom, luxurySuite],
  },
  {
    id: 2,
    name: "Executive Room",
    price: 499,
    description:
      "Sophisticated accommodations designed for discerning business travelers, featuring a dedicated workspace and premium amenities.",
    image: executiveRoom,
    size: "65 m²",
    occupancy: "2 adults",
    view: "City view",
    features: [
      { icon: <FaBed />, label: "King Bed" },
      { icon: <FaTv />, label: '65" Smart TV' },
      { icon: <FaConciergeBell />, label: "Concierge" },
      { icon: <FaWifi />, label: "Wi-Fi" },
      { icon: <FaCoffee />, label: "Espresso Machine" },
      { icon: <FaSnowflake />, label: "Climate Control" },
    ],
    amenities: [
      "Ergonomic work chair",
      "International power outlets",
      "Daily newspaper",
      "Turndown service",
      "Iron and ironing board",
    ],
    gallery: [executiveRoom, presidentialSuite, hotelExterior, luxurySuite],
  },
  {
    id: 3,
    name: "Eco Deluxe",
    price: 399,
    description:
      "Sustainable luxury with organic linens, energy-efficient design, and breathtaking garden views in our eco-conscious sanctuary.",
    image: ecoDeluxe,
    size: "55 m²",
    occupancy: "2 adults",
    view: "Garden view",
    features: [
      { icon: <FaBed />, label: "Queen Bed" },
      { icon: <FaBath />, label: "Rain Shower" },
      { icon: <FaDumbbell />, label: "Gym Access" },
      { icon: <FaSwimmer />, label: "Pool" },
      { icon: <FaLeaf />, label: "Eco-Friendly" },
      { icon: <FaCoffee />, label: "Organic Tea" },
    ],
    amenities: [
      "Organic cotton linens",
      "Bamboo flooring",
      "Energy-efficient lighting",
      "Recycled paper products",
      "Organic toiletries",
    ],
    gallery: [ecoDeluxe, hotelExterior, presidentialSuite, luxurySuite],
  },
  {
    id: 4,
    name: "Luxury Suite",
    price: 699,
    description:
      "Spacious contemporary suite with designer furnishings, premium technology, and breathtaking city vistas.",
    image: luxurySuite,
    size: "85 m²",
    occupancy: "2 adults + 1 child",
    view: "City skyline",
    features: [
      { icon: <FaBed />, label: "King Bed" },
      { icon: <FaCocktail />, label: "Mini Bar" },
      { icon: <FaTv />, label: "Smart TV" },
      { icon: <FaWifi />, label: "Wi-Fi" },
      { icon: <FaCar />, label: "Valet Parking" },
      { icon: <FaHotTub />, label: "Spa Bath" },
    ],
    amenities: [
      "Separate living area",
      "Premium sound system",
      "Designer toiletries",
      "24-hour room service",
      "Twice-daily housekeeping",
    ],
    gallery: [luxurySuite, hotelExterior, presidentialSuite, executiveRoom],
  },
  {
    id: 5,
    name: "Family Suite",
    price: 599,
    description:
      "Spacious two-bedroom suite perfect for families, featuring a kitchenette and child-friendly amenities.",
    image: familySuite,
    size: "95 m²",
    occupancy: "2 adults + 2 children",
    view: "Garden view",
    features: [
      { icon: <FaBed />, label: "2 Queen Beds" },
      { icon: <FaUtensils />, label: "Kitchenette" },
      { icon: <FaWifi />, label: "Wi-Fi" },
      { icon: <FaSwimmer />, label: "Kids Pool" },
      { icon: <FaTv />, label: "Smart TVs" },
      { icon: <FaConciergeBell />, label: "Childcare" },
    ],
    amenities: [
      "Baby crib available",
      "Children's bathrobes",
      "Board games",
      "Child-proofing kit",
      "Family dining options",
    ],
    gallery: [familySuite, hotelExterior, presidentialSuite, luxurySuite],
  },
  {
    id: 6,
    name: "Romantic Getaway",
    price: 549,
    description:
      "Intimate retreat with romantic decor, champagne on arrival, and private balcony perfect for couples.",
    image: romanticGetaway,
    size: "60 m²",
    occupancy: "2 adults",
    view: "Ocean view",
    features: [
      { icon: <FaBed />, label: "Canopy Bed" },
      { icon: <FaCocktail />, label: "Champagne" },
      { icon: <FaBath />, label: "Jacuzzi" },
      { icon: <FaCamera />, label: "Photo Spot" },
      { icon: <FaConciergeBell />, label: "Romantic Setup" },
      { icon: <FaLeaf />, label: "Rose Petals" },
    ],
    amenities: [
      "Champagne on arrival",
      "Private balcony",
      "Bubble bath setup",
      "Romantic turndown",
      "Couples massage options",
    ],
    gallery: [romanticGetaway, hotelExterior, presidentialSuite, luxurySuite],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 80, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  }),
  hover: {
    y: -15,
    boxShadow: "0 25px 50px -12px rgba(255, 215, 0, 0.25)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
    },
  },
};

const modalVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
  exit: {
    opacity: 0,
    y: 50,
    transition: {
      duration: 0.3,
    },
  },
};

const featureVariants = {
  hover: {
    scale: 1.2,
    color: "#FFD700",
    y: -5,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 10,
    },
  },
};

const Rooms = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    adults: 1,
    children: 0,
    specialRequests: "",
  });
  const [activeTab, setActiveTab] = useState("details");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const controls = useAnimation();
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const openBooking = (room) => {
    setSelectedRoom(room);
    setCurrentImageIndex(0);
    setActiveTab("details");
  };

  const closeBooking = () => {
    setSelectedRoom(null);
    setFormData({
      name: "",
      email: "",
      phone: "",
      checkIn: "",
      checkOut: "",
      adults: 1,
      children: 0,
      specialRequests: "",
    });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log("Booking submitted:", { room: selectedRoom, formData });
    alert(
      `Booking request for ${selectedRoom.name} received! We'll contact you shortly.`
    );
    closeBooking();
  };

  const nextImage = () => {
    controls
      .start({
        opacity: 0,
        transition: { duration: 0.3 },
      })
      .then(() => {
        setCurrentImageIndex((prev) =>
          prev === selectedRoom.gallery.length - 1 ? 0 : prev + 1
        );
        controls.start({
          opacity: 1,
          transition: { duration: 0.3 },
        });
      });
  };

  const prevImage = () => {
    controls
      .start({
        opacity: 0,
        transition: { duration: 0.3 },
      })
      .then(() => {
        setCurrentImageIndex((prev) =>
          prev === 0 ? selectedRoom.gallery.length - 1 : prev - 1
        );
        controls.start({
          opacity: 1,
          transition: { duration: 0.3 },
        });
      });
  };

  return (
    <div className="bg-gray-900 text-yellow-50 min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="absolute inset-0">
          <img
            src={hotelExterior}
            alt="Luxury Hotel"
            className="w-full h-full object-cover"
          />
        </div>

        <motion.div
          className="relative z-20 text-center px-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-yellow-400">
            Our Luxury Accommodations
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Discover our exquisite collection of rooms and suites, each designed
            to provide unparalleled comfort and sophistication for your stay.
          </p>
          <motion.button
            className="px-8 py-4 bg-yellow-500 text-black font-bold rounded-full text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .getElementById("rooms-grid")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore Rooms
          </motion.button>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <div className="text-yellow-400 text-3xl animate-bounce">↓</div>
        </motion.div>
      </section>

      {/* Rooms Grid */}
      <section
        id="rooms-grid"
        className="py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-yellow-400">
            Our Room Collection
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto text-center">
            Each of our rooms has been meticulously designed to offer the
            perfect blend of luxury, comfort, and functionality for every type
            of traveler.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {rooms.map((room, i) => (
            <motion.div
              key={room.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                  <h3 className="text-2xl font-bold text-white">{room.name}</h3>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-yellow-400 font-bold text-xl">
                      ${room.price}/night
                    </span>
                    <div className="flex items-center text-yellow-400">
                      <FaStar className="mr-1" />
                      <span>5.0</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <p className="text-gray-300 mb-6">{room.description}</p>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-3 mb-6">
                    {room.features.slice(0, 4).map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center gap-2 text-yellow-400 bg-gray-700 px-3 py-2 rounded-lg"
                        variants={featureVariants}
                        whileHover="hover"
                        title={feature.label}
                      >
                        {feature.icon}
                        <span className="text-sm">{feature.label}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    onClick={() => openBooking(room)}
                    className="w-full bg-yellow-500 hover:bg-yellow-400 text-black py-3 rounded-lg font-bold transition-colors"
                    whileTap={{ scale: 0.95 }}
                  >
                    View Details
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Booking Modal */}
      <AnimatePresence>
        {selectedRoom && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeBooking}
          >
            <motion.div
              className="bg-gray-800 rounded-2xl max-w-6xl w-full overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <button
                onClick={closeBooking}
                aria-label="Close booking form"
                className="absolute top-6 right-6 text-yellow-400 hover:text-yellow-300 text-3xl z-50 focus:outline-none"
              >
                &times;
              </button>

              <div className="flex flex-col lg:flex-row">
                {/* Room Gallery */}
                <div className="lg:w-1/2 relative">
                  <motion.img
                    key={currentImageIndex}
                    src={selectedRoom.gallery[currentImageIndex]}
                    alt={selectedRoom.name}
                    className="w-full h-64 lg:h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />

                  <div className="absolute inset-0 flex items-center justify-between p-4">
                    <button
                      onClick={prevImage}
                      className="bg-black/50 text-yellow-400 p-3 rounded-full hover:bg-black/70 transition"
                    >
                      <FaArrowLeft size={24} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="bg-black/50 text-yellow-400 p-3 rounded-full hover:bg-black/70 transition"
                    >
                      <FaArrowRight size={24} />
                    </button>
                  </div>

                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                    {selectedRoom.gallery.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`w-3 h-3 rounded-full ${
                          currentImageIndex === idx
                            ? "bg-yellow-400"
                            : "bg-gray-400"
                        }`}
                        aria-label={`View image ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Room Details and Booking Form */}
                <div className="lg:w-1/2 p-8">
                  <div className="flex border-b border-gray-700 mb-6">
                    <button
                      className={`py-3 px-6 font-semibold ${
                        activeTab === "details"
                          ? "text-yellow-400 border-b-2 border-yellow-400"
                          : "text-gray-400"
                      }`}
                      onClick={() => setActiveTab("details")}
                    >
                      Details
                    </button>
                    <button
                      className={`py-3 px-6 font-semibold ${
                        activeTab === "amenities"
                          ? "text-yellow-400 border-b-2 border-yellow-400"
                          : "text-gray-400"
                      }`}
                      onClick={() => setActiveTab("amenities")}
                    >
                      Amenities
                    </button>
                    <button
                      className={`py-3 px-6 font-semibold ${
                        activeTab === "booking"
                          ? "text-yellow-400 border-b-2 border-yellow-400"
                          : "text-gray-400"
                      }`}
                      onClick={() => setActiveTab("booking")}
                    >
                      Book Now
                    </button>
                  </div>

                  {activeTab === "details" && (
                    <div>
                      <h3 className="text-3xl font-bold mb-4 text-yellow-400">
                        {selectedRoom.name}
                      </h3>
                      <p className="text-gray-300 mb-6">
                        {selectedRoom.description}
                      </p>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-gray-700 p-4 rounded-lg">
                          <div className="text-yellow-400 font-semibold">
                            Size
                          </div>
                          <div>{selectedRoom.size}</div>
                        </div>
                        <div className="bg-gray-700 p-4 rounded-lg">
                          <div className="text-yellow-400 font-semibold">
                            Occupancy
                          </div>
                          <div>{selectedRoom.occupancy}</div>
                        </div>
                        <div className="bg-gray-700 p-4 rounded-lg">
                          <div className="text-yellow-400 font-semibold">
                            View
                          </div>
                          <div>{selectedRoom.view}</div>
                        </div>
                        <div className="bg-gray-700 p-4 rounded-lg">
                          <div className="text-yellow-400 font-semibold">
                            Price
                          </div>
                          <div>${selectedRoom.price}/night</div>
                        </div>
                      </div>

                      <h4 className="text-xl font-semibold mb-3 text-yellow-400">
                        Key Features
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {selectedRoom.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 bg-gray-700 px-3 py-2 rounded-lg"
                          >
                            <span className="text-yellow-400">
                              {feature.icon}
                            </span>
                            <span>{feature.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === "amenities" && (
                    <div>
                      <h3 className="text-2xl font-bold mb-6 text-yellow-400">
                        {selectedRoom.name} Amenities
                      </h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {selectedRoom.amenities.map((amenity, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="text-yellow-400 mt-1">✓</span>
                            <span>{amenity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {activeTab === "booking" && (
                    <form onSubmit={handleBookingSubmit}>
                      <h3 className="text-2xl font-bold mb-6 text-yellow-400">
                        Book {selectedRoom.name}
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div>
                          <label className="block text-gray-400 mb-2">
                            Check-in
                          </label>
                          <input
                            type="date"
                            name="checkIn"
                            value={formData.checkIn}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-400 mb-2">
                            Check-out
                          </label>
                          <input
                            type="date"
                            name="checkOut"
                            value={formData.checkOut}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-400 mb-2">
                            Adults
                          </label>
                          <select
                            name="adults"
                            value={formData.adults}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                          >
                            {[1, 2, 3, 4].map((num) => (
                              <option key={num} value={num}>
                                {num}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-gray-400 mb-2">
                            Children
                          </label>
                          <select
                            name="children"
                            value={formData.children}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                          >
                            {[0, 1, 2, 3].map((num) => (
                              <option key={num} value={num}>
                                {num}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="space-y-4 mb-6">
                        <div>
                          <label className="block text-gray-400 mb-2">
                            Full Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-400 mb-2">
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-400 mb-2">
                            Phone
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-400 mb-2">
                            Special Requests
                          </label>
                          <textarea
                            name="specialRequests"
                            value={formData.specialRequests}
                            onChange={handleChange}
                            rows="3"
                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                          />
                        </div>
                      </div>

                      <div className="bg-gray-700 p-4 rounded-lg mb-6">
                        <div className="flex justify-between items-center mb-2">
                          <span>Room Price</span>
                          <span>
                            ${selectedRoom.price} x{" "}
                            {formData.checkIn && formData.checkOut
                              ? Math.ceil(
                                  (new Date(formData.checkOut) -
                                    new Date(formData.checkIn)) /
                                    (1000 * 60 * 60 * 24)
                                )
                              : 1}{" "}
                            nights
                          </span>
                        </div>
                        <div className="flex justify-between items-center font-bold text-lg">
                          <span>Total</span>
                          <span className="text-yellow-400">
                            $
                            {formData.checkIn && formData.checkOut
                              ? selectedRoom.price *
                                Math.ceil(
                                  (new Date(formData.checkOut) -
                                    new Date(formData.checkIn)) /
                                    (1000 * 60 * 60 * 24)
                                )
                              : selectedRoom.price}
                          </span>
                        </div>
                      </div>

                      <motion.button
                        type="submit"
                        className="w-full bg-yellow-500 hover:bg-yellow-400 text-black py-4 rounded-lg font-bold text-lg transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Complete Booking
                      </motion.button>
                    </form>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Testimonials Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-800">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-16 text-center text-yellow-400">
            Guest Experiences
          </h2>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-12"
          >
            {[
              {
                name: "Sarah Johnson",
                stay: "Presidential Suite",
                rating: 5,
                comment:
                  "The Presidential Suite exceeded all our expectations. The private pool with city views was absolutely breathtaking and the service was impeccable.",
                avatar: sarahjohnson,
              },
              {
                name: "Michael Chen",
                stay: "Executive Room",
                rating: 5,
                comment:
                  "Perfect for business travel. The workspace was well-equipped and the bed was incredibly comfortable after long work days.",
                avatar: michealchen,
              },
              {
                name: "Emma Williams",
                stay: "Romantic Getaway",
                rating: 5,
                comment:
                  "Our anniversary stay was magical. The rose petals and champagne setup made it so special. We'll definitely be back!",
                avatar: emmawilliams,
              },
              {
                name: "David Rodriguez",
                stay: "Family Suite",
                rating: 4,
                comment:
                  "Great space for our family vacation. The kids loved the pool and the kitchenette was very useful for snacks.",
                avatar: davidrodriguez,
              },
              {
                name: "Priya Kapoor",
                stay: "Eco Deluxe",
                rating: 5,
                comment:
                  "As an environmentally conscious traveler, I appreciated the sustainable approach without compromising on luxury.",
                avatar: priyakapoor,
              },
            ].map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gray-700 p-6 rounded-xl h-full">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`${
                          i < testimonial.rating
                            ? "text-yellow-400"
                            : "text-gray-500"
                        } mr-1`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-300 italic mb-6">
                    "{testimonial.comment}"
                  </p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">
                        {testimonial.stay}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-center gap-4 mt-6">
            <button
              ref={navigationPrevRef}
              className="bg-gray-700 text-yellow-400 p-3 rounded-full hover:bg-gray-600 transition"
            >
              <FaArrowLeft />
            </button>
            <button
              ref={navigationNextRef}
              className="bg-gray-700 text-yellow-400 p-3 rounded-full hover:bg-gray-600 transition"
            >
              <FaArrowRight />
            </button>
          </div>
        </motion.div>
      </section>

      {/* Location Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-yellow-400">
              Our Location
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Situated in the heart of the city, our hotel offers convenient
              access to major attractions, business districts, and
              transportation hubs.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-yellow-400 mt-1 mr-4 text-xl" />
                <div>
                  <h3 className="font-bold text-lg">Address</h3>
                  <p className="text-gray-400">
                    123 Luxury Avenue, Downtown, City 10001
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <FaCar className="text-yellow-400 mt-1 mr-4 text-xl" />
                <div>
                  <h3 className="font-bold text-lg">Parking</h3>
                  <p className="text-gray-400">Valet parking available 24/7</p>
                </div>
              </div>

              <div className="flex items-start">
                <FaConciergeBell className="text-yellow-400 mt-1 mr-4 text-xl" />
                <div>
                  <h3 className="font-bold text-lg">Concierge</h3>
                  <p className="text-gray-400">
                    Available to assist with transportation and local
                    recommendations
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-96 bg-gray-700 rounded-xl overflow-hidden">
            {/* Replace with your actual map component or iframe */}
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              [Interactive Map Here]
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rooms;
