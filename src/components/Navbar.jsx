import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-primary text-white shadow-md font-sans sticky top-0 z-50">
    <div className="container mx-auto flex justify-between items-center px-4 py-3">
      <Link to="/" className="flex items-center space-x-2">
        <img src="/logo.png" alt="Aurela Naturals Logo" className="h-10" />
        <span className="font-bold text-xl">Aurela Naturals</span>
      </Link>
      <div className="space-x-2">
        <Link to="/" className="hover:underline px-2 py-1 rounded">Home</Link>
        <Link to="/contact" className="hover:bg-white hover:text-primary transition px-4 py-2 bg-white bg-opacity-20 rounded">Contact</Link>
      
      </div>
    </div>
  </nav>
);

export default Navbar;
