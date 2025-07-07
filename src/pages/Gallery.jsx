import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaSearch,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaExpand,
} from "react-icons/fa";
import { MdCollections } from "react-icons/md";

// Import gallery images
import gallery1 from "../assets/luxury-suite.jpg";
import gallery2 from "../assets/dining.webp";
import gallery3 from "../assets/galimg3.avif";
import gallery4 from "../assets/exec.avif";
import gallery5 from "../assets/spa.webp";
import gallery6 from "../assets/dining.webp";
import gallery7 from "../assets/dininggal.webp";
import gallery8 from "../assets/privatebeach.webp";
import gallery9 from "../assets/eco-delux.jpg";
import gallery10 from "../assets/spa.webp";
import gallery11 from "../assets/conference.webp";
import gallery12 from "../assets/Fitness.avif";

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");

  // Gallery images with categories
  const galleryImages = [
    {
      id: 1,
      src: gallery1,
      category: "Rooms",
      alt: "Luxury Presidential Suite",
    },
    {
      id: 2,
      src: gallery2,
      category: "Dining",
      alt: "Gourmet Restaurant Interior",
    },
    {
      id: 3,
      src: gallery3,
      category: "Amenities",
      alt: "Infinity Pool at Sunset",
    },
    { id: 4, src: gallery4, category: "Rooms", alt: "Executive Room View" },
    { id: 5, src: gallery5, category: "Spa", alt: "Luxury Spa Treatment Room" },
    {
      id: 6,
      src: gallery6,
      category: "Events",
      alt: "Wedding Reception Setup",
    },
    { id: 7, src: gallery7, category: "Dining", alt: "Chef's Tasting Menu" },
    {
      id: 8,
      src: gallery8,
      category: "Amenities",
      alt: "Private Beach Access",
    },
    { id: 9, src: gallery9, category: "Rooms", alt: "Eco Deluxe Bathroom" },
    { id: 10, src: gallery10, category: "Spa", alt: "Couples Massage Suite" },
    {
      id: 11,
      src: gallery11,
      category: "Events",
      alt: "Corporate Conference Setup",
    },
    { id: 12, src: gallery12, category: "Amenities", alt: "Fitness Center" },
  ];

  // Get unique categories
  const categories = [
    "All",
    ...new Set(galleryImages.map((image) => image.category)),
  ];

  // Filter images by category
  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((image) => image.category === activeCategory);

  const openImage = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const navigate = (direction) => {
    let newIndex;
    if (direction === "prev") {
      newIndex =
        (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    } else {
      newIndex = (currentIndex + 1) % filteredImages.length;
    }
    setCurrentIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <div className="font-sans bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-r from-yellow-900 to-black">
        <div className="absolute inset-0 bg-black/50 z-0" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-yellow-400">
            GoldenStay Gallery
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A visual journey through our world of luxury
          </p>
          <div className="mt-6 flex justify-center">
            <MdCollections className="text-4xl text-yellow-500" />
          </div>
        </motion.div>
      </section>

      {/* Gallery Navigation */}
      <section className="py-12 px-6 bg-gradient-to-b from-black via-yellow-900 to-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? "bg-yellow-500 text-black"
                    : "bg-gray-900 text-white border border-yellow-500/30 hover:bg-yellow-500/10"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "50px" }}
                className="relative group overflow-hidden rounded-xl shadow-lg"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer"
                  onClick={() => openImage(image, index)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <div className="text-white">
                    <p className="font-semibold">{image.category}</p>
                    <p className="text-sm text-gray-300">{image.alt}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-black/50 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <FaSearch className="text-yellow-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeImage}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Navigation Arrows */}
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full z-10 hover:bg-yellow-500 hover:text-black transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate("prev");
                }}
              >
                <FaChevronLeft size={24} />
              </button>

              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full z-10 hover:bg-yellow-500 hover:text-black transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate("next");
                }}
              >
                <FaChevronRight size={24} />
              </button>

              {/* Close Button */}
              <button
                className="absolute top-4 right-4 bg-black/50 text-white p-3 rounded-full z-10 hover:bg-yellow-500 hover:text-black transition-colors"
                onClick={closeImage}
              >
                <FaTimes size={20} />
              </button>

              {/* Fullscreen Button */}
              <button
                className="absolute top-4 left-4 bg-black/50 text-white p-3 rounded-full z-10 hover:bg-yellow-500 hover:text-black transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  document.exitFullscreen();
                }}
              >
                <FaExpand size={20} />
              </button>

              {/* Current Image */}
              <motion.img
                key={selectedImage.id}
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />

              {/* Image Info */}
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <div className="inline-block bg-black/70 text-white px-4 py-2 rounded-lg">
                  <p className="font-semibold">{selectedImage.category}</p>
                  <p className="text-sm text-gray-300">{selectedImage.alt}</p>
                  <p className="text-xs mt-1 text-yellow-400">
                    {currentIndex + 1} / {filteredImages.length}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
              Ready to Experience This Luxury?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Book your stay and immerse yourself in the GoldenStay experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#000" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-black text-yellow-400 font-semibold rounded-full shadow-lg"
              >
                Book Your Stay
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#000" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-black text-black font-semibold rounded-full shadow-lg hover:text-yellow-400 hover:bg-black transition-colors"
              >
                Contact Concierge
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
