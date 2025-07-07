import { Link, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import logo from "/logo.png";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {
  RiHome5Fill,
  RiStore3Fill,
  RiUserAddFill,
  RiLoginCircleFill,
  RiLogoutCircleRFill,
} from "react-icons/ri";
import {
  HiMiniUserCircle,
  HiMagnifyingGlass,
  HiShoppingBag,
} from "react-icons/hi2";
import GetQuote from "./Get_Quote";
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import {
  FaShoppingCart,
  FaUser,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  // Get user from localStorage
  const user = JSON.parse(localStorage.getItem("users"));

  // Navigate
  const navigate = useNavigate();

  // Logout function
  const logout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      localStorage.clear("users");
      navigate("/login");
    }
  };

  // CartItems
  const cartItems = useSelector((state) => state.cart);

  // State for mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Add new state for search
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // State to track navbar visibility
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  let lastScrollTop = 0;

  // State to control the visibility of the GetQuote modal
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        setIsNavbarVisible(false);
      } else {
        // Scrolling up
        setIsNavbarVisible(true);
      }
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="text-xl font-bold text-gray-800">
              Aurela Naturals
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/allproduct"
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Shop
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-emerald-600 transition-colors flex items-center">
                Categories
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link
                  to="/category/anti-ageing"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50"
                >
                  Anti-Ageing
                </Link>
                <Link
                  to="/category/brightening"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50"
                >
                  Brightening
                </Link>
                <Link
                  to="/category/acne-treatment"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50"
                >
                  Acne Treatment
                </Link>
                <Link
                  to="/category/soothing"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50"
                >
                  Soothing
                </Link>
                <Link
                  to="/category/bestsellers"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50"
                >
                  Bestsellers
                </Link>
              </div>
            </div>
            <Link
              to="/contact-us"
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Search, Cart, User */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleSearch}
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              <FaSearch className="w-5 h-5" />
            </button>

            <Link
              to="/cart"
              className="relative text-gray-700 hover:text-emerald-600 transition-colors"
            >
              <FaShoppingCart className="w-5 h-5" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-emerald-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Link>

            {user ? (
              <div className="relative group">
                <button className="text-gray-700 hover:text-emerald-600 transition-colors">
                  <FaUser className="w-5 h-5" />
                </button>
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <Link
                    to="/user-dashboard"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50"
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={logout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                className="text-gray-700 hover:text-emerald-600 transition-colors"
              >
                <FaUser className="w-5 h-5" />
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <button onClick={toggleMenu} className="md:hidden text-gray-700">
            {isMenuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="py-4 border-t border-gray-200">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for skincare products..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
              <button className="absolute right-3 top-2.5 text-gray-400 hover:text-emerald-600">
                <FaSearch className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-emerald-600 transition-colors"
              >
                Home
              </Link>
              <Link
                to="/allproduct"
                className="text-gray-700 hover:text-emerald-600 transition-colors"
              >
                Shop
              </Link>
              <Link
                to="/category/anti-ageing"
                className="text-gray-700 hover:text-emerald-600 transition-colors"
              >
                Anti-Ageing
              </Link>
              <Link
                to="/category/brightening"
                className="text-gray-700 hover:text-emerald-600 transition-colors"
              >
                Brightening
              </Link>
              <Link
                to="/category/acne-treatment"
                className="text-gray-700 hover:text-emerald-600 transition-colors"
              >
                Acne Treatment
              </Link>
              <Link
                to="/category/soothing"
                className="text-gray-700 hover:text-emerald-600 transition-colors"
              >
                Soothing
              </Link>
              <Link
                to="/category/bestsellers"
                className="text-gray-700 hover:text-emerald-600 transition-colors"
              >
                Bestsellers
              </Link>
              <Link
                to="/contact-us"
                className="text-gray-700 hover:text-emerald-600 transition-colors"
              >
                Contact
              </Link>

              <div className="flex items-center space-x-4 pt-4">
                <Link
                  to="/cart"
                  className="relative text-gray-700 hover:text-emerald-600 transition-colors"
                >
                  <FaShoppingCart className="w-5 h-5" />
                  {cartItems.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-emerald-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {cartItems.length}
                    </span>
                  )}
                </Link>

                {user ? (
                  <div className="flex items-center space-x-2">
                    <Link
                      to="/user-dashboard"
                      className="text-gray-700 hover:text-emerald-600 transition-colors"
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={logout}
                      className="text-gray-700 hover:text-emerald-600 transition-colors"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <Link
                    to="/login"
                    className="text-gray-700 hover:text-emerald-600 transition-colors"
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
