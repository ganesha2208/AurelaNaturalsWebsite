import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLeaf,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold">Aurela Naturals</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-sm">
              Discover the power of natural ingredients. Our premium skincare
              products are formulated with the finest organic components to
              nourish and protect your skin.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <FaYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/allproduct"
                  className="text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  Shop All
                </Link>
              </li>
              <li>
                <Link
                  to="/category/bestsellers"
                  className="text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  Bestsellers
                </Link>
              </li>
              <li>
                <Link
                  to="/category/new-arrivals"
                  className="text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className="text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/category/cleansers"
                  className="text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  Cleansers
                </Link>
              </li>
              <li>
                <Link
                  to="/category/toners"
                  className="text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  Toners
                </Link>
              </li>
              <li>
                <Link
                  to="/category/serums"
                  className="text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  Serums
                </Link>
              </li>
              <li>
                <Link
                  to="/category/moisturizers"
                  className="text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  Moisturizers
                </Link>
              </li>
              <li>
                <Link
                  to="/category/sunscreens"
                  className="text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  Sunscreens
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaPhone className="w-4 h-4 text-emerald-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="w-4 h-4 text-emerald-400" />
                <span className="text-gray-300">hello@aurelanaturals.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="w-4 h-4 text-emerald-400 mt-1" />
                <span className="text-gray-300">
                  123 Natural Way
                  <br />
                  Green City, GC 12345
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2024 Aurela Naturals. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                to="/privacy-policy"
                className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-and-conditions"
                className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
              >
                Terms & Conditions
              </Link>
              <Link
                to="/shipping-policy"
                className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
              >
                Shipping Policy
              </Link>
              <Link
                to="/refund-policy"
                className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
              >
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
