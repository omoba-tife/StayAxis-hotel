import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaUser,
  FaPaperPlane,
  FaCheck,
  FaBed,
  FaConciergeBell,
  FaGlassCheers,
  FaSpa,
  FaBriefcase,
  FaCar,
  FaShuttleVan,
  FaMapMarkedAlt,
} from "react-icons/fa";
import { MdOutlineSupportAgent, MdRestaurant } from "react-icons/md";

// Import images
import contactHero from "../assets/contact-hero.avif";
import conciergeTeam from "../assets/concierge-team.webp";
import hotelLocation from "../assets/hotel-location.webp";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, success: false, error: false });

    // Simulate form submission
    setTimeout(() => {
      setFormStatus({ submitting: false, success: true, error: false });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus((prev) => ({ ...prev, success: false }));
      }, 5000);
    }, 2000);
  };

  const contactMethods = [
    {
      icon: <FaPhone className="text-3xl text-yellow-500" />,
      title: "Phone",
      details: [
        { label: "Reservations", value: "+1 (555) 123-4567" },
        { label: "Concierge", value: "+1 (555) 123-4568" },
        { label: "Emergency", value: "+1 (555) 123-4569" },
      ],
      description: "Available 24/7 for your convenience",
    },
    {
      icon: <FaEnvelope className="text-3xl text-yellow-500" />,
      title: "Email",
      details: [
        { label: "Reservations", value: "reservations@goldenstay.com" },
        { label: "Concierge", value: "concierge@goldenstay.com" },
        { label: "General Inquiries", value: "info@goldenstay.com" },
      ],
      description: "Typically respond within 2 hours during business hours",
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl text-yellow-500" />,
      title: "Location",
      details: [
        { label: "Address", value: "123 Golden Avenue, Luxury District" },
        { label: "City", value: "Beverly Hills, CA 90210" },
        { label: "Country", value: "United States" },
      ],
      description: "Valet parking available at our main entrance",
    },
  ];

  const departments = [
    {
      name: "Reservations",
      description: "For booking inquiries and room reservations",
      icon: <FaBed className="text-yellow-500" />,
    },
    {
      name: "Concierge",
      description: "Personal assistance and special requests",
      icon: <FaConciergeBell className="text-yellow-500" />,
    },
    {
      name: "Events",
      description: "Weddings, meetings, and special occasions",
      icon: <FaGlassCheers className="text-yellow-500" />,
    },
    {
      name: "Dining",
      description: "Restaurant reservations and private dining",
      icon: <MdRestaurant className="text-yellow-500" />,
    },
    {
      name: "Spa",
      description: "Wellness appointments and packages",
      icon: <FaSpa className="text-yellow-500" />,
    },
    {
      name: "Corporate",
      description: "Business accounts and group rates",
      icon: <FaBriefcase className="text-yellow-500" />,
    },
  ];

  return (
    <div className="font-sans bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
        <img
          src={contactHero}
          alt="GoldenStay Lobby"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-20 text-center px-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-yellow-400">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our team is ready to assist you with any inquiries or requests
          </p>
        </motion.div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-6 md:px-16 bg-gradient-to-b from-black via-yellow-900 to-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              How to <span className="text-yellow-500">Reach Us</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose your preferred method of communication with our dedicated
              teams
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 p-8 rounded-xl border border-yellow-500/30 hover:border-yellow-500/60 transition-colors"
              >
                <div className="flex justify-center mb-6">{method.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-center">
                  {method.title}
                </h3>
                <ul className="space-y-3 mb-6">
                  {method.details.map((detail, i) => (
                    <li key={i}>
                      <p className="text-gray-400 text-sm">{detail.label}</p>
                      <p className="font-medium">{detail.value}</p>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-yellow-500/80 text-center">
                  {method.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6 md:px-16 bg-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-yellow-400">
              Send Us a Message
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mb-6" />
            <p className="text-gray-400 mb-8 text-lg">
              Have questions or special requests? Fill out the form below and
              our team will respond promptly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    Full Name <span className="text-yellow-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                      <FaUser />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
                      placeholder="Your name"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    Email <span className="text-yellow-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                      <FaEnvelope />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-300 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                    <FaPhone />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
                    placeholder="+1 (___) ___-____"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-300 mb-2">
                  Subject <span className="text-yellow-500">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white appearance-none"
                >
                  <option value="">Select a subject</option>
                  <option value="Reservation">Reservation Inquiry</option>
                  <option value="Concierge">Concierge Service</option>
                  <option value="Event">Event Planning</option>
                  <option value="Feedback">Feedback</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Message <span className="text-yellow-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
                  placeholder="How can we assist you?"
                ></textarea>
              </div>

              <div className="flex items-center">
                <motion.button
                  type="submit"
                  disabled={formStatus.submitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`px-8 py-3 rounded-full font-semibold flex items-center gap-2 ${
                    formStatus.submitting
                      ? "bg-gray-600 text-gray-400"
                      : "bg-yellow-500 text-black hover:bg-yellow-400"
                  }`}
                >
                  {formStatus.submitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <FaPaperPlane /> Send Message
                    </>
                  )}
                </motion.button>

                {formStatus.success && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="ml-4 flex items-center text-green-400"
                  >
                    <FaCheck className="mr-2" /> Message sent successfully!
                  </motion.div>
                )}

                {formStatus.error && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="ml-4 flex items-center text-red-400"
                  >
                    Error sending message. Please try again.
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="sticky top-24"
          >
            <div className="bg-gray-900 p-8 rounded-xl border border-yellow-500/30">
              <h3 className="text-2xl font-semibold mb-6 text-yellow-400">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-yellow-500 mr-4 mt-1">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Address</h4>
                    <p className="text-gray-400">123 Golden Avenue</p>
                    <p className="text-gray-400">Beverly Hills, CA 90210</p>
                    <p className="text-gray-400">United States</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-yellow-500 mr-4 mt-1">
                    <FaPhone size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-gray-400">Main: +1 (555) 123-4567</p>
                    <p className="text-gray-400">
                      Concierge: +1 (555) 123-4568
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-yellow-500 mr-4 mt-1">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-gray-400">reservations@goldenstay.com</p>
                    <p className="text-gray-400">concierge@goldenstay.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-yellow-500 mr-4 mt-1">
                    <FaClock size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Reception Hours</h4>
                    <p className="text-gray-400">24 hours / 7 days</p>
                    <p className="text-gray-400">Concierge: Always available</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold mb-4 text-yellow-400">
                  Emergency Contact
                </h4>
                <p className="text-gray-400 mb-2">
                  For urgent matters after hours:
                </p>
                <p className="text-white font-medium">+1 (555) 123-4569</p>
              </div>
            </div>

            <div className="mt-8 bg-gray-900 p-6 rounded-xl border border-yellow-500/30">
              <h3 className="text-xl font-semibold mb-4 text-yellow-400 flex items-center">
                <MdOutlineSupportAgent className="mr-2" /> Concierge Team
              </h3>
              <img
                src={conciergeTeam}
                alt="GoldenStay Concierge Team"
                className="w-full h-auto rounded-lg mb-4"
              />
              <p className="text-gray-400">
                Our multilingual concierge team is available around the clock to
                assist with any requests, from restaurant reservations to
                special arrangements.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Location Map */}
      <section className="py-20 px-6 bg-gradient-to-b from-black via-yellow-900 to-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-6">
              Our <span className="text-yellow-500">Location</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find us in the heart of Beverly Hills, just minutes from top
              attractions
            </p>
          </motion.div>

          <div className="bg-gray-900 rounded-xl overflow-hidden border border-yellow-500/30">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-semibold mb-4 text-yellow-400">
                  Getting Here
                </h3>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <div className="text-yellow-500 mr-3 mt-1">
                      <FaCar />
                    </div>
                    <div>
                      <h4 className="font-semibold">By Car</h4>
                      <p className="text-gray-400">
                        Valet parking available at our main entrance. GPS
                        coordinates: 34.0676° N, 118.3977° W
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="text-yellow-500 mr-3 mt-1">
                      <FaShuttleVan />
                    </div>
                    <div>
                      <h4 className="font-semibold">Airport Transfer</h4>
                      <p className="text-gray-400">
                        Complimentary luxury transfers from LAX airport (advance
                        notice required)
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="text-yellow-500 mr-3 mt-1">
                      <FaMapMarkedAlt />
                    </div>
                    <div>
                      <h4 className="font-semibold">Public Transport</h4>
                      <p className="text-gray-400">
                        Nearest metro station: Beverly Hills Station (10 minute
                        walk)
                      </p>
                    </div>
                  </li>
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-full flex items-center gap-2"
                >
                  <FaMapMarkerAlt /> Get Directions
                </motion.button>
              </div>
              <div className="h-96 md:h-auto">
                <img
                  src={hotelLocation}
                  alt="GoldenStay Hotel Location"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 px-6 md:px-16 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-yellow-400">
              Hotel <span className="text-white">Departments</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6" />
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Connect directly with the department that can best assist you
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 p-6 rounded-xl border border-yellow-500/30 hover:border-yellow-500/60 transition-colors group"
              >
                <div className="flex items-center mb-4">
                  <div className="text-2xl mr-3 group-hover:text-yellow-400 transition-colors">
                    {dept.icon}
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-yellow-400 transition-colors">
                    {dept.name}
                  </h3>
                </div>
                <p className="text-gray-400 mb-4">{dept.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-yellow-500">
                    Contact Directly →
                  </span>
                  <button className="text-xs bg-yellow-500/10 text-yellow-400 px-3 py-1 rounded-full hover:bg-yellow-500/20 transition-colors">
                    Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-yellow-600 text-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Need Immediate Assistance?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Our concierge team is standing by 24/7 to help with any requests
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#000" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-black text-yellow-400 font-semibold rounded-full shadow-lg flex items-center justify-center gap-2"
              >
                <FaPhone /> Call Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#000" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-black text-black font-semibold rounded-full shadow-lg hover:text-yellow-400 hover:bg-black transition-colors flex items-center justify-center gap-2"
              >
                <FaEnvelope /> Email Concierge
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
