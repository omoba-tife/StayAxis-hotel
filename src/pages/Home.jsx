import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaSpa,
  FaShuttleVan,
  FaSwimmingPool,
  FaDog,
  FaConciergeBell,
  FaUtensils,
  FaMapMarkedAlt,
  FaStar,
  FaSearch,
  FaCar,
  FaWifi,
  FaBed,
  FaUmbrellaBeach,
  FaGlassCheers,
  FaRegSnowflake,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { MdRestaurant, MdRoomService } from "react-icons/md";
import { GiSandsOfTime } from "react-icons/gi";

// Import local images
import heroImage1 from "../assets/hero1.avif";
import heroImage2 from "../assets/hero2.avif";
import heroImage3 from "../assets/hero3.avif";
import aboutImage from "../assets/about.webp";
import presidentialSuite from "../assets/presidential.jpg";
import executiveRoom from "../assets/exec.avif";
import ecoDeluxe from "../assets/eco-delux.jpg";
import gallery1 from "../assets/galimg1.avif";
import gallery2 from "../assets/galimg2.avif";
import gallery3 from "../assets/galimg3.avif";
import gallery4 from "../assets/galimg4.avif";
import gallery5 from "../assets/galimg5.avif";
import gallery6 from "../assets/galimg6.avif";
import testimonial1 from "../assets/jane.jpg";
import testimonial2 from "../assets/diaz.jpg";
import testimonial3 from "../assets/anita.jpg";

const HomePage = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [heroImage1, heroImage2, heroImage3];

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const rooms = [
    {
      id: 1,
      title: "Presidential Suite",
      desc: "Opulence redefined with skyline views and private pool access.",
      price: "$999/night",
      size: "120 m²",
      beds: "1 King Bed",
      img: presidentialSuite,
      amenities: [
        "Private Pool",
        "Butler Service",
        "Jacuzzi",
        "Panoramic View",
      ],
    },
    {
      id: 2,
      title: "Executive Room",
      desc: "Elegant comfort for business & leisure travelers with premium amenities.",
      price: "$499/night",
      size: "65 m²",
      beds: "1 King Bed or 2 Queens",
      img: executiveRoom,
      amenities: ["Work Desk", "Premium WiFi", "Minibar", "City View"],
    },
    {
      id: 3,
      title: "Eco Deluxe",
      desc: "Sustainable luxury with organic materials and energy-efficient design.",
      price: "$399/night",
      size: "55 m²",
      beds: "1 Queen Bed",
      img: ecoDeluxe,
      amenities: [
        "Eco-friendly",
        "Air Purifier",
        "Organic Toiletries",
        "Garden View",
      ],
    },
  ];

  const services = [
    {
      icon: <FaSpa size={32} />,
      label: "Private Spa Access",
      desc: "World-class treatments in our award-winning spa",
    },
    {
      icon: <FaShuttleVan size={32} />,
      label: "Airport Shuttle",
      desc: "Complimentary luxury transfers",
    },
    {
      icon: <FaSwimmingPool size={32} />,
      label: "Infinity Pool",
      desc: "Heated pool with panoramic city views",
    },
    {
      icon: <FaDog size={32} />,
      label: "Pet Friendly",
      desc: "Special amenities for your furry companions",
    },
    {
      icon: <FaConciergeBell size={32} />,
      label: "24/7 Concierge",
      desc: "Dedicated staff for all your needs",
    },
    {
      icon: <FaUtensils size={32} />,
      label: "Gourmet Dining",
      desc: "Michelin-starred restaurants on property",
    },
    {
      icon: <FaMapMarkedAlt size={32} />,
      label: "Virtual Tour Guide",
      desc: "Interactive city exploration",
    },
    {
      icon: <FaCar size={32} />,
      label: "Luxury Transfers",
      desc: "Chauffeur services available",
    },
  ];

  const testimonials = [
    {
      name: "Jane Smith",
      quote:
        "GoldenStay exceeded all expectations. From the golden interiors to the warm service, every detail was spectacular!",
      avatar: testimonial1,
      rating: 5,
      stay: "Presidential Suite, March 2023",
    },
    {
      name: "Carlos Diaz",
      quote:
        "Luxury redefined. The spa and room view made me feel like royalty. Highly recommend to anyone looking to escape the ordinary.",
      avatar: testimonial2,
      rating: 5,
      stay: "Executive Room, January 2023",
    },
    {
      name: "Anita Kapoor",
      quote:
        "Breathtaking architecture and an experience worth every penny. I'll be back again!",
      avatar: testimonial3,
      rating: 4,
      stay: "Eco Deluxe, February 2023",
    },
  ];

  const amenities = [
    { icon: <FaWifi size={24} />, label: "High-Speed WiFi" },
    { icon: <MdRestaurant size={24} />, label: "24/7 Room Service" },
    { icon: <FaUmbrellaBeach size={24} />, label: "Private Beach Access" },
    { icon: <FaGlassCheers size={24} />, label: "Premium Bar Lounge" },
    { icon: <FaRegSnowflake size={24} />, label: "Climate Control" },
    { icon: <MdRoomService size={24} />, label: "Daily Housekeeping" },
    { icon: <FaBed size={24} />, label: "Premium Bedding" },
    { icon: <GiSandsOfTime size={24} />, label: "Late Check-Out" },
  ];

  const galleryImages = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
  ];

  const stats = [
    { value: "98%", label: "Guest Satisfaction" },
    { value: "24/7", label: "Concierge Service" },
    { value: "50+", label: "Luxury Suites" },
    { value: "5★", label: "Rating" },
  ];

  return (
    <div className="font-sans bg-black text-yellow-400 scroll-smooth overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-6 text-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-0" />
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={heroImages[currentImageIndex]}
            alt="Hotel Lobby"
            className="absolute inset-0 w-full h-full object-cover z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-yellow-400 drop-shadow-lg">
            Welcome to <span className="text-yellow-500">GoldenStay</span>
          </h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Where luxury meets comfort in an unforgettable experience
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#F59E0B" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-yellow-500 text-black font-semibold rounded-full shadow-lg"
            >
              <Link to="/booking">Book Your Stay</Link>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-yellow-500 text-yellow-400 font-semibold rounded-full shadow-lg"
            >
              <Link to="/rooms">Explore Rooms</Link>
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="animate-bounce text-yellow-400 text-2xl">↓</div>
        </motion.div>
      </section>

      {/* STATS BAR */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-8 bg-yellow-600 text-black"
      >
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-4">
              <div className="text-3xl font-bold">{stat.value}</div>
              <div className="text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ABOUT SECTION */}
      <section className="py-20 px-6 md:px-16 bg-gradient-to-b from-black via-yellow-900 to-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Discover <span className="text-yellow-500">GoldenStay</span>{" "}
              Luxury
            </h2>
            <p className="text-gray-300 mb-6 text-lg">
              Established in 2010, GoldenStay has redefined luxury hospitality
              with our award-winning service, exquisite accommodations, and
              attention to detail that makes every stay unforgettable.
            </p>
            <p className="text-gray-300 mb-8 text-lg">
              Our prime location in the heart of the city offers unparalleled
              access to cultural landmarks, business districts, and
              entertainment venues, while providing a serene retreat from the
              bustling city life.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-full shadow-lg"
            >
              <Link to="/about"> Learn More About Us</Link>
            </motion.button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={aboutImage}
              alt="Hotel Interior"
              className="rounded-xl shadow-2xl w-full"
            />
            <motion.div
              className="absolute -bottom-6 -right-6 bg-yellow-500 p-4 rounded-xl shadow-lg text-black"
              whileHover={{ rotate: 5, scale: 1.05 }}
            >
              <div className="text-2xl font-bold">25+</div>
              <div className="text-sm">Years of Excellence</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ROOMS SECTION */}
      <section className="py-20 px-6 md:px-16 bg-black">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Our Luxury Accommodations
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Experience unparalleled comfort in our meticulously designed rooms
              and suites, each offering a unique blend of luxury and
              functionality.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={room.img}
                    alt={room.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h3 className="text-xl font-bold text-white">
                      {room.title}
                    </h3>
                    <p className="text-yellow-400 font-semibold">
                      {room.price}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-4">{room.desc}</p>
                  <div className="flex justify-between text-sm text-gray-400 mb-4">
                    <span>{room.size}</span>
                    <span>{room.beds}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {room.amenities.map((amenity, i) => (
                      <span
                        key={i}
                        className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <Link
                      to={`/rooms/${room.id}`}
                      className="text-yellow-400 hover:text-yellow-300 font-semibold text-sm"
                    >
                      View Details
                    </Link>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-yellow-500 text-black text-sm font-semibold rounded-full"
                    >
                      Book Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-yellow-500 text-black font-semibold rounded-full shadow-lg"
            >
              View All Rooms & Suites
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* AMENITIES SECTION */}
      <section className="py-20 px-6 md:px-16 bg-gradient-to-r from-yellow-900 via-yellow-800 to-yellow-900 text-black">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Premium Amenities</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-gray-800 max-w-2xl mx-auto">
              We provide world-class amenities to ensure your stay is nothing
              short of extraordinary.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -5,
                  backgroundColor: "#000",
                  color: "#FBBF24",
                }}
                className="bg-yellow-100 p-6 rounded-xl text-center flex flex-col items-center transition-all duration-300"
              >
                <div className="text-3xl mb-3">{amenity.icon}</div>
                <h3 className="font-semibold">{amenity.label}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 px-6 md:px-16 bg-black">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-yellow-400">
              Exceptional Services
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our dedicated staff provides personalized services to cater to
              your every need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#FBBF24",
                  color: "#000",
                }}
                className="bg-gray-900 p-8 rounded-xl border border-yellow-500/30 flex flex-col items-center text-center transition-all duration-300"
              >
                <div className="text-4xl mb-4 text-yellow-500">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.label}</h3>
                <p className="text-gray-400">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-20 px-6 md:px-16 bg-yellow-500 text-black">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Guests Say</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-gray-800 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our valued guests
              about their experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`${
                        i < testimonial.rating
                          ? "text-yellow-500 fill-current"
                          : "text-gray-300"
                      }`}
                      size={18}
                    />
                  ))}
                </div>
                <p className="italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 border-2 border-yellow-500"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.stay}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* GALLERY SECTION */}
      <section className="py-20 px-6 md:px-16 bg-black">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-yellow-400">
              Our Gallery
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A glimpse into the GoldenStay experience through the lens.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="relative group overflow-hidden rounded-xl"
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-yellow-500 text-black p-3 rounded-full hover:bg-yellow-400 transition-colors">
                    <FaSearch size={20} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-20 px-6 md:px-16 bg-gradient-to-b from-black via-yellow-900 to-black">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12"
        >
          <div>
            <h2 className="text-4xl font-bold mb-6 text-yellow-400">
              Contact Us
            </h2>
            <p className="text-gray-300 mb-8">
              Have questions or ready to book your stay? Our team is available
              24/7 to assist you.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="text-yellow-500 mr-4 mt-1">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Address</h3>
                  <p className="text-gray-400">
                    123 Golden Avenue, Luxury District, City 10001
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-yellow-500 mr-4 mt-1">
                  <FaPhoneAlt size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Phone</h3>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-yellow-500 mr-4 mt-1">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <p className="text-gray-400">reservations@goldenstay.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-yellow-500 mr-4 mt-1">
                  <FaClock size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">
                    Reception Hours
                  </h3>
                  <p className="text-gray-400">24/7</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-yellow-400">
              Send Us a Message
            </h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
                  required
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow-lg mt-4"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </motion.div>
      </section>

      {/* NEWSLETTER SECTION */}
      <section className="py-16 px-6 bg-yellow-600 text-black">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive offers, updates, and
            luxury travel tips.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-full border-none focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="px-6 py-3 bg-black text-yellow-400 font-semibold rounded-full shadow-lg"
            >
              Subscribe
            </motion.button>
          </form>
        </motion.div>
      </section>

      {/* SCROLL TO TOP BUTTON */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 bg-yellow-500 text-black p-3 rounded-full shadow-lg z-50"
            aria-label="Scroll to top"
          >
            <IoIosArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HomePage;
