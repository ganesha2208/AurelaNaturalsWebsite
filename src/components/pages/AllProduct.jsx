import { useNavigate } from "react-router";
import Layout from "../Layout";
import { useState } from "react";
import toast from "react-hot-toast";
import {
  FaStar,
  FaHeart,
  FaShoppingCart,
  FaEye,
  FaCreditCard,
} from "react-icons/fa";
import BuyNowModal from "../buyNowModal/BuyNowModal";

const AllProduct = () => {
  const navigate = useNavigate();
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [addressInfo, setAddressInfo] = useState({
    name: "",
    address: "",
    pincode: "",
    mobileNumber: "",
  });

  // Actual Aurela Naturals products data
  const skincareProducts = [
    {
      id: 1,
      title: "Day-Night Anti Ageing Cream",
      price: 299.99,
      originalPrice: 399.99,
      image: "/day night Artboard 1 copy 20.png",
      rating: 4.8,
      reviews: 127,
      category: "anti-ageing",
      isNew: true,
      isBestSeller: true,
      description:
        "A complete skincare duo designed to nourish and protect your skin 24/7. The Day Cream helps hydrate and shield your skin from environmental stress, while the Night Cream supports skin rejuvenation & repair as you rest. Enriched with herbal extracts for soft, radiant, & healthy-looking skin, day and night.",
      directions:
        "Day Cream: Apply every morning on a clean face and neck. Gently massage in upward circular motions until fully absorbed. Use before sun exposure or makeup. Night Cream: Apply every night on a cleansed face and neck. Massage gently in circular motions. Leave on overnight for best results.",
      suitableFor: "Dull, pigmented, and uneven skin tone",
      ingredients:
        "Day Cream: Aloe vera butter, Shea butter, Almond oil, Licorice extract, Rose water, E.wax, Vitamin E, Zinc oxide, Preservative, Distilled water. Night Cream: Kokum butter, Olive oil, Aloe vera extract, Licorice extract, Hyaluronic acid, Emulsifying wax, Glycerin, Vitamin E, Lavender EO, Rose water, Preservative.",
    },
    {
      id: 2,
      title: "Beet Root Cream",
      price: 249.99,
      originalPrice: 349.99,
      image: "/beet rootArtboard 1 copy 10.png",
      rating: 4.9,
      reviews: 203,
      category: "brightening",
      isNew: false,
      isBestSeller: true,
      description:
        "Beet Root Enzyme is an Ayurvedic cream formulated with herbal extracts, including beetroot enzymes, traditionally used in skin care. It is designed to support the skin's natural tone and maintain overall skin health. Regular use may help in maintaining an even appearance and nourishing the skin.",
      directions:
        "Apply daily night on clear and moist skin, especially on pigmented or tanned areas.",
      suitableFor: "All skin types for external use",
      ingredients:
        "Beetroot extract, Herbal extracts, Natural enzymes, Base cream",
    },
    {
      id: 3,
      title: "Anti Acne Cream",
      price: 199.99,
      originalPrice: 299.99,
      image: "/anti acne Artboard 1.png",
      rating: 4.7,
      reviews: 89,
      category: "acne-treatment",
      isNew: true,
      isBestSeller: false,
      description:
        "Anti-acne & Pimples treatment cream. Anti-marks & Spots Removal, Oil Control, Radiance & Glow.",
      directions:
        "Clean the skin thoroughly before applying this product. Cover the entire affected area with a thin layer one to two times daily.",
      suitableFor: "Acne-prone skin, Oily skin, Combination skin",
      ingredients:
        "Salicylic acid, Tea tree oil, Neem extract, Aloe vera, Natural preservatives",
    },
    {
      id: 4,
      title: "Kumkumadi Herbal Elixir Cream",
      price: 399.99,
      originalPrice: 499.99,
      image: "/kumkumArtboard 1 copy 5.png",
      rating: 4.6,
      reviews: 156,
      category: "brightening",
      isNew: false,
      isBestSeller: true,
      description:
        "Kumkumadi Cream is a luxurious Herbal formulation enriched with the time-honored Kumkumadi Tailam, renowned for its brightening and rejuvenating properties. This cream helps reduce the appearance of blemishes, dark spots, and fine lines while restoring your skin's natural glow and softness.",
      directions:
        "Apply a small amount on a clean face and neck. Massage gently in upward circular motions until fully absorbed. Use twice daily for best results.",
      suitableFor: "All skin types, Dull, pigmented, and uneven skin tone",
      ingredients:
        "Kumkumadi Tailam, Saffron Extract, Sandalwood Oil, Manjistha Extract, Licorice Extract, Aloe Vera, Almond Oil, Shea Butter, Vitamin E, Base Cream (Aqua, Emulsifiers, Preservatives, etc.)",
    },
    {
      id: 5,
      title: "Aloe Vera Gel",
      price: 149.99,
      originalPrice: 199.99,
      image: "/aloe veraArtboard 1 copy 15.png",
      rating: 4.8,
      reviews: 234,
      category: "soothing",
      isNew: false,
      isBestSeller: true,
      description:
        "Pure Aloe Vera Gel for cooling and refreshing skin care. Helps soothe the skin after sun exposure, supports the skin's natural repair process, helps maintain skin softness without greasiness, and helps keep skin clean and fresh-looking.",
      directions: "Apply to clean dry skin. Wash hands before and after use.",
      suitableFor: "All skin types, Sun-exposed skin, Sensitive skin",
      ingredients:
        "Barbadensis Leaf Extract, Citric Acid, Sodium Benzoate, Potassium Sorbate",
    },
  ];

  const buyNowFunction = (product) => {
    // For now, just navigate to cart without Redux
    navigate("/cart");
    toast.success("Product added! Redirecting to checkout...");
  };

  const deleteCart = (item) => {
    toast.success("Removed from cart");
  };

  const clearAllCartItems = () => {
    toast.success("All items removed from cart");
  };

  return (
    <Layout>
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              All Products
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our complete collection of natural skincare products
            </p>
            <button
              onClick={clearAllCartItems}
              className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition-colors"
            >
              Clear All Cart Items
            </button>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {skincareProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {product.isNew && (
                      <span className="bg-emerald-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                        NEW
                      </span>
                    )}
                    {product.isBestSeller && (
                      <span className="bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                        BESTSELLER
                      </span>
                    )}
                  </div>

                  {/* Quick Actions */}
                  <div
                    className={`absolute top-3 right-3 flex flex-col gap-2 transition-all duration-300 ${
                      hoveredProduct === product.id
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-4"
                    }`}
                  >
                    <button className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-emerald-50 transition-colors">
                      <FaHeart className="w-4 h-4 text-gray-600" />
                    </button>
                    <button
                      onClick={() => navigate(`/productinfo/${product.id}`)}
                      className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-emerald-50 transition-colors"
                    >
                      <FaEye className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>

                  {/* Discount Badge */}
                  {product.originalPrice > product.price && (
                    <div className="absolute bottom-3 left-3">
                      <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                        {Math.round(
                          ((product.originalPrice - product.price) /
                            product.originalPrice) *
                            100
                        )}
                        % OFF
                      </span>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <div className="flex items-center gap-1 mb-2">
                    <FaStar className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm font-medium text-gray-900">
                      {product.rating}
                    </span>
                    <span className="text-sm text-gray-500">
                      ({product.reviews})
                    </span>
                  </div>

                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-emerald-600 transition-colors text-sm">
                    {product.title}
                  </h3>

                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg font-bold text-gray-900">
                      ₹{product.price}
                    </span>
                    {product.originalPrice > product.price && (
                      <span className="text-sm text-gray-500 line-through">
                        ₹{product.originalPrice}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => deleteCart(product)}
                    className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center gap-2 text-sm"
                  >
                    <FaShoppingCart className="w-4 h-4" />
                    Remove from Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AllProduct;
