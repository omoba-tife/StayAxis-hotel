import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { name: "Home", to: "/" },
    { name: "Rooms", to: "/rooms" },
    { name: "About", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Gallery", to: "/gallery" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        hasScrolled ? "bg-black/80 shadow-xl backdrop-blur" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-yellow-400 tracking-widest hover:text-yellow-500 transition"
        >
          StayAxis
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 text-yellow-300 font-medium">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `hover:text-yellow-500 transition relative ${
                  isActive ? "text-yellow-500" : ""
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <Link
            to="/booking"
            className="ml-4 bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-600 transition font-semibold shadow-md"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-yellow-400"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          transition={{ duration: 0.4 }}
          className="bg-black/90 px-6 pb-6 md:hidden text-yellow-300 space-y-4 text-center"
        >
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-lg hover:text-yellow-500 transition"
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/booking"
            className="inline-block mt-4 bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-600 transition font-semibold shadow-md"
            onClick={() => setIsOpen(false)}
          >
            Book Now
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
}
