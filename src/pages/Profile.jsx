import React from "react";

const Profile = () => (
  <div className="max-w-xl mx-auto p-8 bg-white bg-opacity-80 rounded-xl shadow-lg mt-12 font-sans">
    <h1 className="text-3xl font-bold text-primary mb-4">Your Profile</h1>
    <p className="mb-6 text-gray-700">This is your profile overview. (You can show user info after login functionality is implemented.)</p>
    <div className="border-t border-primary/20 pt-4">
      <p className="text-lg"><span className="font-semibold">Name:</span> Guest User</p>
      <p className="text-lg"><span className="font-semibold">Email:</span> guest@aurelanaturals.com</p>
      {/* Add more fields as required */}
    </div>
  </div>
);

export default Profile;
