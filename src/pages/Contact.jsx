import React, { useState } from "react";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker, HiOutlineClock } from "react-icons/hi";

const Contact = () => {
  const [sent, setSent] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white bg-opacity-90 rounded-xl shadow-lg p-8 mt-10 font-sans">
      <h1 className="text-3xl font-extrabold text-primary mb-6">Contact Us</h1>
      
      {/* Business Info */}
      <div className="mb-8 space-y-3 text-gray-800">
        <div className="flex flex-wrap gap-8">
          {/* Left: Info */}
          <div className="flex-1 min-w-[200px] space-y-2">
            <div className="flex items-center gap-2">
              <HiOutlineLocationMarker className="text-primary text-xl" />
              <span>No 1 to 6, Satara - Koregaon Rd, Srinagar Colony,<br />
                Sangamnagar, Satara, Maharashtra 415003</span>
            </div>
            <div className="flex items-center gap-2">
              <HiOutlinePhone className="text-primary text-xl" />
              <span>+91 9067 00 6013</span>
            </div>
            <div className="flex items-center gap-2">
              <HiOutlineMail className="text-primary text-xl" />
              <span>aurelanatural05@gamil.com</span>
            </div>
            <div className="flex items-center gap-2">
              <HiOutlineClock className="text-primary text-xl" />
              <span>
                <strong>Business Hours:</strong> Mon - Sat: 9:00 AM – 6:00 PM<br />
                Sunday: Closed
              </span>
            </div>
            <div>
              <span className="inline-block bg-primary/10 text-primary px-2 py-1 rounded">Founder: Sameer Mane</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <h2 className="text-xl font-bold text-primary mb-2 mt-5">Describe Your Requirement</h2>
      {!sent ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            required
            className="w-full border rounded p-2"
            placeholder="Your Name"
          />
          <input
            required
            type="tel"
            className="w-full border rounded p-2"
            placeholder="Your Phone (+91...)"
            pattern="[0-9]{10,}"
          />
          <input
            required
            type="email"
            className="w-full border rounded p-2"
            placeholder="Your Email"
          />
          <textarea
            required
            className="w-full border rounded p-2"
            placeholder="Describe your requirement..."
            rows={4}
          />
          <button
            type="submit"
            className="w-full bg-primary text-white font-semibold px-4 py-2 rounded hover:bg-primary/80"
          >
            Send Message
          </button>
        </form>
      ) : (
        <div className="text-primary text-lg font-semibold mt-8">
          Thanks for contacting us! We’ll reply shortly.
        </div>
      )}
    </div>
  );
};

export default Contact;
