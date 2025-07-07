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
      name: "Sarah Johnson",
      role: "Beauty Blogger",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Aurela Naturals has transformed my skincare routine! The Natural Glow Cleanser is gentle yet effective, and my skin has never looked better. I love that all products are truly natural.",
      product: "Natural Glow Cleanser",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Dermatologist",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "As a dermatologist, I'm very particular about skincare products. Aurela Naturals' Vitamin C Serum is exceptional - it's effective, well-formulated, and uses high-quality natural ingredients.",
      product: "Vitamin C Serum",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Fitness Trainer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "I've struggled with sensitive skin for years. The Hydrating Toner from Aurela Naturals is the only product that doesn't irritate my skin while providing amazing hydration. Highly recommend!",
      product: "Hydrating Toner",
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Yoga Instructor",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The Mineral Sunscreen SPF 30 is perfect for my outdoor lifestyle. It's lightweight, doesn't leave a white cast, and provides excellent protection. My go-to sunscreen!",
      product: "Mineral Sunscreen SPF 30",
    },
    {
      id: 5,
      name: "Lisa Park",
      role: "Makeup Artist",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "I use Aurela Naturals products on my clients and they always ask about the brand. The Nourishing Moisturizer creates the perfect base for makeup application.",
      product: "Nourishing Moisturizer",
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Environmentalist",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "I love that Aurela Naturals is committed to sustainability. The packaging is eco-friendly and the ingredients are responsibly sourced. Great products with a conscience!",
      product: "All Products",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            <div className="text-3xl font-bold text-emerald-600 mb-2">10K+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-emerald-600 mb-2">4.9</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-emerald-600 mb-2">50+</div>
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
