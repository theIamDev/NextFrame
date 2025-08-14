"use client";

import { FaFacebookF, FaTwitter, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

export default function FooterUI() {
  return (
    <footer className="bg-black text-white py-10 px-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* About Section */}
        <div>
          <h3 className="text-orange-500 mb-4 text-lg font-semibold">SS Property</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            A real estate company based in Kolkata that understands and believes
            that home is not a place, but a feeling.
          </p>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" className="text-gray-400 hover:text-orange-500 transition-colors">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" className="text-gray-400 hover:text-orange-500 transition-colors">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" className="text-gray-400 hover:text-orange-500 transition-colors">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-orange-500 mb-4 text-lg font-semibold">Quick Link</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Home</a></li>
            <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">About Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Our Services</a></li>
            <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Contact Us</a></li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-orange-500 mb-4 text-lg font-semibold">Our Address</h3>
          <p className="text-gray-400 text-sm mb-3 flex items-start gap-2">
            <FaMapMarkerAlt className="mt-1" />
            Office: Apurva, Street Number 682, Taltala, New Town, Kolkata, 700156
          </p>
          <p className="text-gray-400 text-sm flex items-start gap-2">
            <FaMapMarkerAlt className="mt-1" />
            Registered Office: Eastern Aurora Waterfront, Office 1119, 11th Floor, GN34/1, Sector V, Saltlake, Kolkata, 700091
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-orange-500 mb-4 text-lg font-semibold">Get in Touch</h3>
          <p className="text-gray-400 text-sm mb-2 flex items-center gap-2">
            <FaPhone /> +91-8290832961
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-2">
            <FaEnvelope /> writeousss@property.com
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-800 pt-4 text-center text-gray-500 text-sm">
        © 2025 Copyrights by SS Properties. All Rights Reserved.
      </div>
    </footer>
  );
}
