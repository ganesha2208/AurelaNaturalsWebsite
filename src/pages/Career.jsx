import React from "react";

const Career = () => (
  <div className="max-w-2xl mx-auto px-4 py-12 font-sans">
    <h1 className="text-4xl font-extrabold text-primary mb-8">Join Our Team</h1>
    <p className="mb-6 text-gray-700">
      Aurela Naturals is always looking for passionate, creative minds. If you care about natural wellness and want to work with a growing brand, send us your resume!
    </p>
    <ul className="list-disc list-inside mb-6 text-gray-700">
      <li>Sales & Marketing Interns</li>
      <li>Content Creators</li>
      <li>Customer Experience Representatives</li>
      {/* Add more open positions */}
    </ul>
    <div className="bg-primary/10 border-l-4 border-primary p-4 rounded text-gray-800">
      Send your application to <span className="font-semibold">career@aurelanaturals.com</span>
    </div>
  </div>
);

export default Career;
