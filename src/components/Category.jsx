import React from "react";
import { Link } from "react-router-dom";
import {
  FaLeaf,
  FaTint,
  FaSun,
  FaSeedling,
  FaGem,
  FaStar,
  FaEye,
  FaHandHoldingHeart,
  FaArrowRight,
} from "react-icons/fa";

const Category = () => {
  const categories = [
    {
      id: "anti-ageing",
      name: "Anti-Ageing",
      description: "Youthful skin care",
      icon: FaGem,
      color: "from-purple-400 to-pink-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      id: "brightening",
      name: "Brightening",
      description: "Glow & radiance",
      icon: FaStar,
      color: "from-amber-400 to-yellow-500",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
    },
    {
      id: "acne-treatment",
      name: "Acne Treatment",
      description: "Clear & healthy skin",
      icon: FaLeaf,
      color: "from-green-400 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      id: "soothing",
      name: "Soothing",
      description: "Calm & comfort",
      icon: FaHandHoldingHeart,
      color: "from-pink-400 to-rose-500",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
    },
    {
      id: "bestsellers",
      name: "Bestsellers",
      description: "Customer favorites",
      icon: FaSeedling,
      color: "from-emerald-400 to-green-500",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our curated collection of natural skincare products
            designed to enhance your beauty routine
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="group"
            >
              <div
                className={`${category.bgColor} ${category.borderColor} border-2 rounded-xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:scale-105 group-hover:border-opacity-80`}
              >
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-600">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/allproduct"
            className="inline-flex items-center justify-center px-8 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-xl"
          >
            View All Products
            <FaArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Category;
