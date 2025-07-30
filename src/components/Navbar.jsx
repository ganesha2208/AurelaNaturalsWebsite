import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-green-700 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="Aurela Naturals Logo" className="h-10" />
          <span className="font-bold text-xl">Aurela Naturals</span>
        </Link>
        <div>
          <Link to="/" className="hover:text-yellow-300 px-3 py-2 font-medium">
            Home
          </Link>
          {/* Add more nav items if needed */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
