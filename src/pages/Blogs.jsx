import React from "react";

const blogPosts = [
  {
    title: "Why Choose Natural Skincare?",
    date: "July 31, 2025",
    summary: "Discover the benefits of switching to plant-based and ayurvedic ingredients for long-term skin health.",
  },
  {
    title: "Aloe Vera: The All-Rounder",
    date: "July 15, 2025",
    summary: "Aloe Vera can do much more than soothe sunburn—learn all about its uses and science-backed benefits.",
  },
  // Add more blog posts as needed
];

const Blogs = () => (
  <div className="max-w-3xl mx-auto px-4 py-12 font-sans">
    <h1 className="text-4xl font-extrabold text-primary mb-8">Our Blog</h1>
    <div className="space-y-8">
      {blogPosts.map((post, idx) => (
        <div key={idx} className="bg-white bg-opacity-80 rounded-lg shadow-md p-6 hover:shadow-xl transition">
          <h2 className="text-2xl font-bold text-primary mb-2">{post.title}</h2>
          <div className="text-sm mb-2 text-gray-500">{post.date}</div>
          <p className="text-gray-700">{post.summary}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Blogs;
