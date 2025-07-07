import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaSpa,
  FaSwimmingPool,
  FaConciergeBell,
  FaUtensils,
  FaCar,
  FaWifi,
  FaBed,
  FaUmbrellaBeach,
  FaGlassCheers,
  FaRegSnowflake,
  FaDog,
  FaChild,
  FaBriefcase,
  FaTshirt,
  FaPlane,
  FaShuttleVan,
  FaMapMarkedAlt,
  FaStar,
  FaPhone,
  FaHandshake,
  FaHandHoldingHeart,
  FaUserTie,
  FaCalendarAlt,
  FaGift,
} from "react-icons/fa";
import {
  MdRestaurant,
  MdRoomService,
  MdLocalLaundryService,
  MdSecurity,
  MdAccessibility,
} from "react-icons/md";
import { GiSandsOfTime, GiHealthIncrease, GiPartyPopper } from "react-icons/gi";
import { IoIosArrowForward } from "react-icons/io";

// Import images
import spaService from "../assets/spa.webp";
import diningService from "../assets/dining.webp";
import conciergeService from "../assets/concierge.webp";
import businessService from "../assets/business.webp";
import familyService from "../assets/family.webp";
// import transportService from "../assets/images/services/transport.jpg";
import weddingService from "../assets/wedding.webp";
import accessibilityService from "../assets/accessibility.webp";

const ServicesPage = () => {
  // Enhanced featured services data
  const featuredServices = [
    {
      title: "Golden Spa Experience",
      description:
        "Indulge in our award-winning spa treatments with customized therapies using organic products and ancient techniques.",
      icon: <FaSpa className="text-4xl text-yellow-500" />,
      img: spaService,
      highlights: [
        "Personalized treatment plans",
        "Couples massage suites",
        "24-hour spa access for suite guests",
        "CBD-infused options available",
      ],
      bookingLink: "/spa-booking",
    },
    {
      title: "Gourmet Dining",
      description:
        "From Michelin-starred restaurants to 24/7 in-room dining, our culinary experiences redefine luxury.",
      icon: <FaUtensils className="text-4xl text-yellow-500" />,
      img: diningService,
      highlights: [
        "5 signature restaurants",
        "Sommelier-curated wine pairings",
        "Private chef experiences",
        "Dietary restriction accommodations",
      ],
      bookingLink: "/dining-reservations",
    },
    {
      title: "Personal Concierge",
      description:
        "Our dedicated concierge team makes the impossible possible, from last-minute reservations to exclusive access.",
      icon: <FaConciergeBell className="text-4xl text-yellow-500" />,
      img: conciergeService,
      highlights: [
        "24/7 multilingual support",
        "VIP event access",
        "Custom city itineraries",
        "Hard-to-get reservations",
      ],
      bookingLink: "/concierge-request",
    },
  ];

  // Expanded services categories
  const allServices = [
    {
      category: "Wellness",
      icon: <FaHandHoldingHeart className="text-yellow-500 mr-2" />,
      services: [
        {
          icon: <FaSpa size={20} />,
          name: "Full-Service Spa",
          description: "Massages, facials, and holistic treatments",
        },
        {
          icon: <FaSwimmingPool size={20} />,
          name: "Infinity Pool",
          description: "Heated year-round with cabana service",
        },
        {
          icon: <GiHealthIncrease size={20} />,
          name: "Fitness Center",
          description: "Personal training and wellness classes",
        },
        {
          icon: <MdAccessibility size={20} />,
          name: "Accessibility Services",
          description: "Tailored wellness programs",
        },
      ],
    },
    {
      category: "Dining",
      icon: <MdRestaurant className="text-yellow-500 mr-2" />,
      services: [
        {
          icon: <MdRestaurant size={20} />,
          name: "Fine Dining",
          description: "Michelin-starred culinary experiences",
        },
        {
          icon: <FaGlassCheers size={20} />,
          name: "Premium Bar",
          description: "Craft cocktails and rare spirits",
        },
        {
          icon: <MdRoomService size={20} />,
          name: "24/7 Room Service",
          description: "Gourmet meals anytime",
        },
        {
          icon: <FaGift size={20} />,
          name: "Special Occasions",
          description: "Custom celebration cakes and menus",
        },
      ],
    },
    {
      category: "Business",
      icon: <FaBriefcase className="text-yellow-500 mr-2" />,
      services: [
        {
          icon: <FaBriefcase size={20} />,
          name: "Meeting Rooms",
          description: "State-of-the-art conference facilities",
        },
        {
          icon: <FaWifi size={20} />,
          name: "Business Center",
          description: "High-speed connectivity and support",
        },
        {
          icon: <MdLocalLaundryService size={20} />,
          name: "Executive Services",
          description: "Secretarial and translation services",
        },
        {
          icon: <FaUserTie size={20} />,
          name: "Corporate Rates",
          description: "Tailored packages for business travelers",
        },
      ],
    },
    {
      category: "Family",
      icon: <FaChild className="text-yellow-500 mr-2" />,
      services: [
        {
          icon: <FaChild size={20} />,
          name: "Kids Club",
          description: "Supervised activities and entertainment",
        },
        {
          icon: <FaDog size={20} />,
          name: "Pet Services",
          description: "Grooming, walking, and pet-sitting",
        },
        {
          icon: <FaUmbrellaBeach size={20} />,
          name: "Family Packages",
          description: "Tailored experiences for all ages",
        },
        {
          icon: <MdSecurity size={20} />,
          name: "Child Safety",
          description: "Room childproofing and monitoring",
        },
      ],
    },
    {
      category: "Transport",
      icon: <FaShuttleVan className="text-yellow-500 mr-2" />,
      services: [
        {
          icon: <FaCar size={20} />,
          name: "Luxury Transfers",
          description: "Mercedes-Benz fleet with chauffeurs",
        },
        {
          icon: <FaShuttleVan size={20} />,
          name: "Airport Shuttle",
          description: "Complimentary premium transfers",
        },
        {
          icon: <FaPlane size={20} />,
          name: "Helicopter Service",
          description: "Private aerial transfers available",
        },
        {
          icon: <FaMapMarkedAlt size={20} />,
          name: "Guided Tours",
          description: "Custom city excursions",
        },
      ],
    },
    {
      category: "Special Events",
      icon: <GiPartyPopper className="text-yellow-500 mr-2" />,
      services: [
        {
          icon: <FaGlassCheers size={20} />,
          name: "Weddings",
          description: "Bespoke wedding planning services",
        },
        {
          icon: <FaCalendarAlt size={20} />,
          name: "Conferences",
          description: "Full event management",
        },
        {
          icon: <GiPartyPopper size={20} />,
          name: "Celebrations",
          description: "Birthdays, anniversaries, and more",
        },
        {
          icon: <FaHandshake size={20} />,
          name: "Team Building",
          description: "Corporate retreat activities",
        },
      ],
    },
  ];

  // Enhanced special packages
  const specialPackages = [
    {
      title: "Golden Romance Package",
      description:
        "Create unforgettable moments with our bespoke romantic experiences.",
      img: weddingService,
      includes: [
        "Champagne and chocolate-covered strawberries upon arrival",
        "Private candlelit dinner on your terrace",
        "Couples massage at our spa",
        "Late 3pm checkout",
        "Rose petal turndown service",
      ],
      price: "$499",
      duration: "Minimum 2 nights",
      bestFor: ["Anniversaries", "Honeymoons", "Proposals"],
    },
    {
      title: "Executive Productivity Package",
      description:
        "Everything the discerning business traveler needs for maximum productivity.",
      img: businessService,
      includes: [
        "Private meeting room for 4 hours daily",
        "Daily pressing of 2 garments",
        "Express check-in/out",
        "Complimentary airport transfers",
        "Daily newspaper and business digest",
      ],
      price: "$299",
      duration: "Flexible",
      bestFor: [
        "Business travelers",
        "Corporate retreats",
        "Working vacations",
      ],
    },
    {
      title: "Family Adventure Package",
      description: "Tailored experiences to delight guests of all ages.",
      img: familyService,
      includes: [
        "Complimentary breakfast for children under 12",
        "Daily kids activity program",
        "Family photo session with professional photographer",
        "Childproofing of your suite",
        "Welcome gift for children",
      ],
      price: "$349",
      duration: "Minimum 3 nights",
      bestFor: ["Family vacations", "Multigenerational trips", "School breaks"],
    },
  ];

  // Accessibility services
  const accessibilityServices = [
    {
      icon: <MdAccessibility size={24} />,
      name: "Wheelchair Accessible Rooms",
      description:
        "Specially designed rooms with wider doorways and roll-in showers",
    },
    {
      icon: <FaPhone size={24} />,
      name: "TTY Devices",
      description: "Available upon request for hearing-impaired guests",
    },
    {
      icon: <FaDog size={24} />,
      name: "Service Animal Accommodations",
      description: "Special amenities for working animals",
    },
    {
      icon: <MdSecurity size={24} />,
      name: "Visual Alarms",
      description: "Flashing lights for emergency alerts",
    },
  ];

  return (
    <div className="font-sans bg-black text-white">
      {/* Enhanced Hero Section */}
      <section className="relative h-screen max-h-[800px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/80 z-10" />
        <img
          src={spaService}
          alt="Luxury Spa Services"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-20 text-center px-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-yellow-400">
            Golden Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            Where every desire is anticipated and every need fulfilled with
            impeccable attention
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-yellow-500 text-black font-bold rounded-full shadow-lg text-lg"
          >
            <Link to="/concierge">Contact Our Concierge</Link>
          </motion.button>
        </motion.div>
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        >
          <IoIosArrowForward className="text-yellow-400 text-4xl rotate-90" />
        </motion.div>
      </section>

      {/* Services Intro */}
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
              The Art of <span className="text-yellow-500">Anticipatory</span>{" "}
              Service
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6" />
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              At GoldenStay, service isn't just what we do - it's who we are.
              Our team of dedicated professionals delivers an unmatched level of
              personalized attention, ensuring every moment of your stay exceeds
              expectations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-8 rounded-xl border border-yellow-500/30 text-center"
            >
              <div className="text-yellow-500 text-5xl mb-6 flex justify-center">
                <FaHandshake />
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                Personalized Attention
              </h3>
              <p className="text-gray-400">
                From remembering your preferred pillow type to arranging
                impossible reservations, we tailor every detail to your
                preferences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-8 rounded-xl border border-yellow-500/30 text-center"
            >
              <div className="text-yellow-500 text-5xl mb-6 flex justify-center">
                <FaConciergeBell />
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                24/7 Dedicated Concierge
              </h3>
              <p className="text-gray-400">
                Our multilingual concierge team is available around the clock to
                fulfill any request, no matter how complex or last-minute.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-8 rounded-xl border border-yellow-500/30 text-center"
            >
              <div className="text-yellow-500 text-5xl mb-6 flex justify-center">
                <FaStar />
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                Uncompromising Standards
              </h3>
              <p className="text-gray-400">
                Every team member undergoes 200+ hours of training to deliver
                flawless, intuitive service that anticipates your needs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Signature Services */}
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
              Signature <span className="text-white">Experiences</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6" />
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our most exclusive services that define the GoldenStay difference
            </p>
          </motion.div>

          <div className="space-y-20">
            {featuredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 items-center`}
              >
                <div className="md:w-1/2">
                  <div className="relative rounded-xl overflow-hidden h-96 w-full">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                      <div className="text-yellow-500 text-5xl">
                        {service.icon}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-400 mb-6 text-lg">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start">
                        <FaStar className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-full"
                    >
                      <Link to={service.bookingLink}>Book Now</Link>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 border border-yellow-500 text-yellow-500 font-semibold rounded-full"
                    >
                      Learn More
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services Section */}
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
              Comprehensive <span className="text-yellow-500">Services</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every imaginable service at your fingertips throughout your stay
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 rounded-xl p-6 border border-yellow-500/20 hover:border-yellow-500/50 transition-all"
              >
                <div className="flex items-center mb-6 pb-4 border-b border-yellow-500/30">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-2xl font-bold ml-2">
                    {category.category}
                  </h3>
                </div>
                <ul className="space-y-6">
                  {category.services.map((service, i) => (
                    <motion.li
                      key={i}
                      whileHover={{ x: 5 }}
                      className="flex items-start group"
                    >
                      <div className="text-yellow-500 mr-4 mt-1 group-hover:text-yellow-400 transition-colors">
                        {service.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg group-hover:text-yellow-400 transition-colors">
                          {service.name}
                        </h4>
                        <p className="text-gray-400 text-sm">
                          {service.description}
                        </p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Packages */}
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
              Curated <span className="text-white">Packages</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6" />
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Tailored experiences designed for specific occasions and needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {specialPackages.map((packageItem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-yellow-500/30 hover:shadow-xl transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={packageItem.img}
                    alt={packageItem.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                    {packageItem.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">
                    {packageItem.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {packageItem.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-yellow-500 mb-2">
                      Includes:
                    </h4>
                    <ul className="space-y-2">
                      {packageItem.includes.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <FaStar
                            className="text-yellow-500 mr-2 mt-1 flex-shrink-0"
                            size={12}
                          />
                          <span className="text-gray-300 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {packageItem.bestFor.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs bg-yellow-500/10 text-yellow-400 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">
                      {packageItem.duration}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded-lg text-sm"
                    >
                      Add to Reservation
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accessibility Section */}
      <section className="py-20 px-6 md:px-16 bg-gradient-to-b from-black via-yellow-900 to-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-yellow-500">Accessibility</span> Services
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mb-6" />
            <p className="text-gray-300 mb-8 text-lg">
              GoldenStay is committed to providing exceptional service to all
              guests. We offer a range of accessibility features and services to
              ensure every guest enjoys a comfortable and luxurious stay.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {accessibilityServices.map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-gray-900/50 p-4 rounded-lg border border-yellow-500/20"
                >
                  <div className="text-yellow-500 mb-2">{service.icon}</div>
                  <h4 className="font-semibold mb-1">{service.name}</h4>
                  <p className="text-gray-400 text-sm">{service.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-full"
            >
              Request Special Accommodations
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
              src={accessibilityService}
              alt="Accessible hotel room"
              className="rounded-xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-yellow-500 text-black p-4 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm">Accessibility Compliance</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Guarantee */}
      <section className="py-20 px-6 md:px-16 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-yellow-400">
              Our <span className="text-white">Service Guarantee</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6" />
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              If we fail to meet your expectations in any way during your stay,
              we will make it right immediately or compensate you accordingly.
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
              <div className="text-yellow-500 text-5xl mb-4">30</div>
              <h3 className="text-xl font-semibold mb-2">Minutes or Less</h3>
              <p className="text-gray-400">
                Average response time for service requests across all properties
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-8 rounded-xl border border-yellow-500/30"
            >
              <div className="text-yellow-500 text-5xl mb-4">24/7</div>
              <h3 className="text-xl font-semibold mb-2">
                Service Availability
              </h3>
              <p className="text-gray-400">
                Our concierge and support teams are always available
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-8 rounded-xl border border-yellow-500/30"
            >
              <div className="text-yellow-500 text-5xl mb-4">98%</div>
              <h3 className="text-xl font-semibold mb-2">Guest Satisfaction</h3>
              <p className="text-gray-400">
                Of guests rate our service as exceptional or perfect
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA */}
      <section className="py-20 px-6 bg-yellow-600 text-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Experience <span className="text-black">Golden</span>{" "}
              Service?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Our team is standing by to customize your perfect stay with all
              the services you desire
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#000" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-black text-yellow-400 font-semibold rounded-full shadow-lg flex items-center justify-center gap-2"
              >
                <Link to="/booking" className="flex items-center">
                  Book Now <IoIosArrowForward className="ml-1" />
                </Link>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#000" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-black text-black font-semibold rounded-full shadow-lg hover:text-yellow-400 hover:bg-black transition-colors flex items-center justify-center gap-2"
              >
                <Link to="/contact" className="flex items-center">
                  Contact Concierge <FaPhone className="ml-1" />
                </Link>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
