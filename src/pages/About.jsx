import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaAward,
  FaHistory,
  FaMapMarkerAlt,
  FaUsers,
  FaHeart,
  FaLeaf,
  FaHandsHelping,
  FaStar,
} from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

// Import images
import aboutHero from "../assets/about-hero.avif";
import founder from "../assets/founder.webp";
import manager from "../assets/manager.avif";
import chef from "../assets/chef.avif";
import sustainability from "../assets/sustainability.avif";
import community from "../assets/community.avif";
import awards from "../assets/awards.avif";

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Richard Golden",
      position: "Founder & CEO",
      bio: "Visionary entrepreneur with 30+ years in luxury hospitality.",
      img: founder,
    },
    {
      name: "Sarah Williamson",
      position: "General Manager",
      bio: "Five-star hospitality expert with attention to detail.",
      img: manager,
    },
    {
      name: "Miguel Rodriguez",
      position: "Executive Chef",
      bio: "Michelin-trained culinary artist creating unforgettable dining.",
      img: chef,
    },
  ];

  const milestones = [
    { year: "1995", event: "GoldenStay founded with first boutique property" },
    { year: "2002", event: "Expanded to international destinations" },
    { year: "2010", event: "First LEED Gold certification for sustainability" },
    { year: "2015", event: "Named 'World's Best Luxury Hotel Chain'" },
    { year: "2020", event: "Pioneered contactless luxury experiences" },
    { year: "2023", event: "50 properties across 6 continents" },
  ];

  const values = [
    {
      icon: <FaHeart className="text-3xl text-yellow-500" />,
      title: "Passion for Service",
      description: "Going beyond expectations to create magical moments.",
    },
    {
      icon: <FaLeaf className="text-3xl text-yellow-500" />,
      title: "Sustainable Luxury",
      description: "Eco-conscious practices without compromising comfort.",
    },
    {
      icon: <FaStar className="text-3xl text-yellow-500" />,
      title: "Excellence",
      description: "Relentless pursuit of perfection in every detail.",
    },
    {
      icon: <FaHandsHelping className="text-3xl text-yellow-500" />,
      title: "Community",
      description: "Supporting local cultures and economies.",
    },
  ];

  return (
    <div className="font-sans bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-0" />
        <img
          src={aboutHero}
          alt="GoldenStay Lobby"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-yellow-400">
            Our Story
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Redefining luxury hospitality since 1995
          </p>
        </motion.div>
      </section>

      {/* Introduction */}
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
              Welcome to <span className="text-yellow-500">GoldenStay</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6" />
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              GoldenStay was born from a simple idea: luxury should be both
              extraordinary and personal. What began as a single boutique hotel
              has grown into a global symbol of refined hospitality, where every
              stay is crafted to perfection.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-8 rounded-xl border border-yellow-500/30"
            >
              <div className="flex items-center mb-4">
                <FaHistory className="text-3xl text-yellow-500 mr-4" />
                <h3 className="text-2xl font-semibold">Our Heritage</h3>
              </div>
              <p className="text-gray-400">
                With roots dating back to 1995, we blend timeless traditions
                with contemporary innovation to create unforgettable
                experiences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-8 rounded-xl border border-yellow-500/30"
            >
              <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="text-3xl text-yellow-500 mr-4" />
                <h3 className="text-2xl font-semibold">Global Presence</h3>
              </div>
              <p className="text-gray-400">
                50 exceptional properties across six continents, each reflecting
                the unique character of its location while maintaining our
                golden standard.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-8 rounded-xl border border-yellow-500/30"
            >
              <div className="flex items-center mb-4">
                <FaAward className="text-3xl text-yellow-500 mr-4" />
                <h3 className="text-2xl font-semibold">Award-Winning</h3>
              </div>
              <p className="text-gray-400">
                Recognized with over 200 international awards for excellence in
                hospitality, design, and sustainability.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
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
              Our Journey
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6" />
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 h-full w-1 bg-yellow-500/30 transform -translate-x-1/2" />

            {/* Timeline items */}
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  } items-center`}
                >
                  <div className="w-1/2 px-8 py-4">
                    <div
                      className={`p-6 bg-gray-900 rounded-xl border border-yellow-500/30 ${
                        index % 2 === 0 ? "text-right" : "text-left"
                      }`}
                    >
                      <h3 className="text-2xl font-bold text-yellow-400 mb-2">
                        {milestone.year}
                      </h3>
                      <p className="text-gray-300">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="w-1/2 flex justify-center">
                    <div className="w-6 h-6 rounded-full bg-yellow-500 border-4 border-yellow-300" />
                  </div>
                  <div className="w-1/2 px-8 py-4"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our <span className="text-yellow-500">Leadership</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6" />
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The passionate individuals who bring the GoldenStay vision to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-gray-900 rounded-xl overflow-hidden shadow-lg"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                  <p className="text-yellow-500 mb-4">{member.position}</p>
                  <p className="text-gray-400 mb-4">{member.bio}</p>
                  <div className="flex items-center text-yellow-400">
                    <Link
                      to="#"
                      className="flex items-center text-sm font-semibold"
                    >
                      View profile <IoIosArrowForward className="ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Core Values
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -5,
                  backgroundColor: "#1f2937",
                  borderColor: "#F59E0B",
                }}
                className="bg-gray-900 p-8 rounded-xl border border-gray-800 text-center flex flex-col items-center transition-all duration-300"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20 px-6 md:px-16 bg-gradient-to-b from-black via-yellow-900 to-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-yellow-500">Sustainable</span> Luxury
            </h2>
            <p className="text-gray-300 mb-6 text-lg">
              At GoldenStay, we believe true luxury must be sustainable. Our
              Green Initiative program ensures we minimize our environmental
              impact while maintaining our gold standard of hospitality.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <FaLeaf className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  100% renewable energy at all properties by 2025
                </span>
              </li>
              <li className="flex items-start">
                <FaLeaf className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Zero single-use plastics across operations
                </span>
              </li>
              <li className="flex items-start">
                <FaLeaf className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Locally sourced organic ingredients in all restaurants
                </span>
              </li>
              <li className="flex items-start">
                <FaLeaf className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  LEED Gold certified buildings
                </span>
              </li>
            </ul>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-full shadow-lg"
            >
              Learn About Our Green Initiatives
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
              src={sustainability}
              alt="Sustainable practices at GoldenStay"
              className="rounded-xl shadow-2xl w-full"
            />
            <motion.div
              className="absolute -bottom-6 -right-6 bg-yellow-500 p-4 rounded-xl shadow-lg text-black"
              whileHover={{ rotate: 5, scale: 1.05 }}
            >
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm">Carbon Neutral by 2025</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 px-6 md:px-16 bg-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <img
              src={community}
              alt="GoldenStay community involvement"
              className="rounded-xl shadow-2xl w-full"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <h2 className="text-4xl font-bold mb-6 text-yellow-400">
              Giving Back
            </h2>
            <p className="text-gray-300 mb-6 text-lg">
              GoldenStay is committed to making a positive impact in the
              communities where we operate. Through our Golden Foundation, we:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <FaUsers className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Support local education initiatives
                </span>
              </li>
              <li className="flex items-start">
                <FaUsers className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Provide hospitality training programs
                </span>
              </li>
              <li className="flex items-start">
                <FaUsers className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Preserve cultural heritage sites
                </span>
              </li>
              <li className="flex items-start">
                <FaUsers className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Partner with local artisans and producers
                </span>
              </li>
            </ul>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border-2 border-yellow-500 text-yellow-400 font-semibold rounded-full shadow-lg"
            >
              Our Community Programs
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Awards Section */}
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
              Recognition & <span className="text-yellow-500">Awards</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6" />
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our commitment to excellence has been recognized by the most
              prestigious organizations in hospitality
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src={awards}
                alt="GoldenStay awards"
                className="rounded-xl shadow-2xl w-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-gray-900 p-6 rounded-xl border border-yellow-500/30">
                <h3 className="text-2xl font-bold text-yellow-400 mb-2">
                  World's Best Luxury Hotel Chain
                </h3>
                <p className="text-gray-400 mb-2">2023, 2021, 2019</p>
                <p className="text-gray-300">
                  Awarded by Luxury Travel Magazine for three consecutive years
                </p>
              </div>
              <div className="bg-gray-900 p-6 rounded-xl border border-yellow-500/30">
                <h3 className="text-2xl font-bold text-yellow-400 mb-2">
                  Five-Star Diamond Award
                </h3>
                <p className="text-gray-400 mb-2">2018-Present</p>
                <p className="text-gray-300">
                  Every GoldenStay property maintains this prestigious rating
                </p>
              </div>
              <div className="bg-gray-900 p-6 rounded-xl border border-yellow-500/30">
                <h3 className="text-2xl font-bold text-yellow-400 mb-2">
                  Sustainable Hospitality Leader
                </h3>
                <p className="text-gray-400 mb-2">2022</p>
                <p className="text-gray-300">
                  Recognized by Global Green Initiative for our eco-friendly
                  practices
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-yellow-600 text-black">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-6">
            Experience the <span className="text-black">GoldenStay</span>{" "}
            Difference
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover why guests return year after year to our luxury properties
            worldwide
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#000" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-black text-yellow-400 font-semibold rounded-full shadow-lg"
            >
              <Link to="/booking">Book Your Stay</Link>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#000" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-black text-black font-semibold rounded-full shadow-lg hover:text-yellow-400 hover:bg-black transition-colors"
            >
              <Link to="/contact">Contact Us</Link>
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutPage;
