import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
  const [hasBeenViewed, setHasBeenViewed] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView) {
        setHasBeenViewed(true);
      }
    },
  });

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Beauty Blogger",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Aurela Naturals Day-Night Anti Ageing Cream has completely transformed my skincare routine! My skin feels so much more hydrated and youthful. The herbal ingredients are gentle yet effective.",
      product: "Day-Night Anti Ageing Cream",
    },
    {
      id: 2,
      name: "Dr. Rajesh Patel",
      role: "Dermatologist",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "As a dermatologist, I highly recommend Aurela Naturals Kumkumadi Herbal Elixir Cream. The traditional Ayurvedic formulation with Kumkumadi Tailam is exceptional for brightening and rejuvenating skin.",
      product: "Kumkumadi Herbal Elixir Cream",
    },
    {
      id: 3,
      name: "Anjali Desai",
      role: "Fitness Trainer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "I've struggled with acne for years. The Anti Acne Cream from Aurela Naturals is the only product that actually works without irritating my sensitive skin. Highly recommend!",
      product: "Anti Acne Cream",
    },
    {
      id: 4,
      name: "Meera Iyer",
      role: "Yoga Instructor",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The Aloe Vera Gel is perfect for my post-yoga skin care. It's so cooling and refreshing, especially after sun exposure. Love that it's 100% natural and cruelty-free!",
      product: "Aloe Vera Gel",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-emerald-50 to-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have discovered the power
            of natural skincare
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="flex justify-center mb-4">
                <FaQuoteLeft className="w-8 h-8 text-emerald-400" />
              </div>

              {/* Rating */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <FaStar key={index} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-center mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Product Mention */}
              <div className="text-center mb-4">
                <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-medium px-3 py-1 rounded-full">
                  {testimonial.product}
                </span>
              </div>

              {/* Customer Info */}
              <div className="flex items-center justify-center space-x-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-emerald-600 mb-2">5K+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-emerald-600 mb-2">4.9</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-emerald-600 mb-2">5</div>
            <div className="text-gray-600">Natural Products</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-emerald-600 mb-2">100%</div>
            <div className="text-gray-600">Cruelty-Free</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
