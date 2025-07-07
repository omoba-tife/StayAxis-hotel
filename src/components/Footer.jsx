import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/90 text-yellow-400 py-10 mt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-yellow-500">
            GoldenStay
          </h3>
          <p className="text-sm text-yellow-300">
            Experience the luxury and comfort of our exquisite hotel. We offer
            the finest rooms, outstanding services, and unforgettable memories.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-yellow-500">
            Quick Links
          </h4>
          <ul className="space-y-2 text-yellow-300">
            <li>
              <a href="/" className="hover:text-yellow-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/rooms" className="hover:text-yellow-500 transition">
                Rooms
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-yellow-500 transition">
                Services
              </a>
            </li>
            <li>
              <a href="/gallery" className="hover:text-yellow-500 transition">
                Gallery
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-yellow-500 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-yellow-500">
            Contact Us
          </h4>
          <p className="text-yellow-300 mb-2">
            123 Golden St, Luxury City, Country
          </p>
          <p className="text-yellow-300 mb-2">Phone: +1 234 567 890</p>
          <p className="text-yellow-300 mb-2">Email: info@goldenstay.com</p>
          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-yellow-500 transition"
            >
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 16.99 22 12z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-yellow-500 transition"
            >
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.28 4.28 0 001.88-2.37 8.59 8.59 0 01-2.71 1.03 4.26 4.26 0 00-7.3 3.89A12.1 12.1 0 013 4.9a4.26 4.26 0 001.32 5.68 4.2 4.2 0 01-1.93-.53v.05a4.27 4.27 0 003.42 4.18 4.3 4.3 0 01-1.92.07 4.27 4.27 0 003.98 2.97A8.55 8.55 0 012 19.54a12.07 12.07 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.37-.01-.56A8.72 8.72 0 0022.46 6z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-yellow-500 transition"
            >
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm8.9 3.35a1.1 1.1 0 110 2.2 1.1 1.1 0 010-2.2zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-yellow-700 pt-4 text-center text-yellow-300 text-sm select-none">
        &copy; {currentYear} GoldenStay. All rights reserved.
      </div>
    </footer>
  );
}
