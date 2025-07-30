import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center py-24">
      <h1 className="text-6xl font-extrabold mb-4">404</h1>
      <p className="mb-6 text-xl">Oops! Page Not Found.</p>
      <Link to="/" className="text-green-700 hover:underline font-semibold">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
