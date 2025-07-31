import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Add subscription logic here or integrate with a service
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="bg-[#82b17b] text-white font-sans mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div>
          <img
            src="/logo.png"
            alt="Aurela Naturals Logo"
            className="h-12 mb-4"
          />
          <p className="text-sm opacity-90 mb-4">
            Aurela Naturals brings you nature’s best skincare enriched with pure botanical goodness.
            Trusted for quality & care.
          </p>
          <p className="text-sm opacity-75">
            © {new Date().getFullYear()} Aurela Naturals. All rights reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:underline">Home</a>
            </li>
            <li>
              <a href="/blogs" className="hover:underline">Blogs</a>
            </li>
            <li>
              <a href="/career" className="hover:underline">Careers</a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">Contact</a>
            </li>
            <li>
              <a href="/profile" className="hover:underline">Profile</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Contact Us</h3>
          <p className="text-sm mb-2">
            <strong>Address:</strong> No 1 to 6, Satara - Koregaon Rd, Srinagar Colony,
            <br />
            Sangamnagar, Satara, Maharashtra 415003
          </p>
          <p className="text-sm mb-2">
            <strong>Phone:</strong> +91 9067 00 6013
          </p>
          <p className="text-sm mb-2">
            <strong>Email:</strong> aurelanatural05@gamil.com
          </p>
          <p className="text-sm">
            <strong>Business Hours:</strong> Mon-Sat 9:00 AM - 6:00 PM, Sunday Closed
          </p>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Subscribe to our Newsletter</h3>
          {subscribed ? (
            <p className="text-sm text-green-100">
              Thank you for subscribing!
            </p>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col space-y-3">
              <input
                type="email"
                required
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 rounded text-gray-900 placeholder-gray-500"
              />
              <button
                type="submit"
                className="bg-white text-[#82b17b] font-semibold py-2 rounded hover:bg-gray-100 transition"
              >
                Subscribe
              </button>
            </form>
          )}

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-6">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-[#6ba469] text-center py-4 text-xs opacity-90">
        Marketed in India By Amrut Herbal Industries, Vaduj Karad Road, Satara 415512
      </div>
    </footer>
  );
};

export default Footer;
