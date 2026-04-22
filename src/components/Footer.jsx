import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="relative bg-primary-dark text-ivory font-sans overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-[420px] h-[420px] rounded-full bg-saffron/10 blur-3xl pointer-events-none" />

      <div className="relative container-luxe py-16 md:py-20 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <Link to="/" className="flex items-center gap-3 mb-5">
            <img src="/logo.png" alt="Aurela Naturals" className="h-12 w-auto" />
            <div>
              <p className="font-serif text-2xl text-ivory leading-none">Aurela</p>
              <p className="eyebrow text-[10px] text-saffron mt-0.5">Naturals</p>
            </div>
          </Link>
          <p className="text-ivory/70 leading-relaxed text-sm max-w-sm mb-6">
            Handcrafted Ayurvedic skincare from Satara, Maharashtra. Small batches,
            pure botanicals, zero shortcuts — crafted for skin that deserves more.
          </p>
          <div className="flex gap-3">
            {[
              { href: "https://instagram.com/aurelanaturals", Icon: FaInstagram, label: "Instagram" },
              { href: "https://facebook.com/aurelanaturals", Icon: FaFacebookF, label: "Facebook" },
              { href: "https://wa.me/919067006013", Icon: FaWhatsapp, label: "WhatsApp" },
              { href: "https://youtube.com", Icon: FaYoutube, label: "YouTube" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full border border-ivory/20 flex items-center justify-center text-ivory/80 hover:text-primary-dark hover:bg-saffron hover:border-saffron transition-all duration-300"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-2">
          <h4 className="eyebrow text-saffron mb-5">Explore</h4>
          <ul className="space-y-3 text-sm text-ivory/75">
            <li><Link to="/" className="hover:text-saffron transition">Home</Link></li>
            <li><a href="/#kumkumadi" className="hover:text-saffron transition">Kumkumadi</a></li>
            <li><a href="/#products" className="hover:text-saffron transition">Collection</a></li>
            <li><a href="/#story" className="hover:text-saffron transition">Our Story</a></li>
            <li><Link to="/contact" className="hover:text-saffron transition">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="eyebrow text-saffron mb-5">Reach Us</h4>
          <ul className="space-y-4 text-sm text-ivory/75">
            <li className="flex gap-3">
              <HiOutlineLocationMarker className="text-saffron flex-shrink-0 mt-0.5" size={18} />
              <span>
                No 1 to 6, Satara - Koregaon Rd,<br />
                Srinagar Colony, Sangamnagar,<br />
                Satara, Maharashtra 415003
              </span>
            </li>
            <li className="flex gap-3">
              <HiOutlinePhone className="text-saffron flex-shrink-0" size={18} />
              <a href="tel:+919067006013" className="hover:text-saffron transition">
                +91 9067 00 6013
              </a>
            </li>
            <li className="flex gap-3">
              <HiOutlineMail className="text-saffron flex-shrink-0" size={18} />
              <a href="mailto:aurelanatural05@gmail.com" className="hover:text-saffron transition break-all">
                aurelanatural05@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="eyebrow text-saffron mb-5">Visit</h4>
          <p className="text-sm text-ivory/75 mb-4 leading-relaxed">
            Studio open Mon – Sat,<br />
            9:00 AM – 6:00 PM
          </p>
          <a
            href="https://wa.me/919067006013?text=Hi%20Aurela%20Naturals"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-saffron text-primary-dark text-xs uppercase tracking-[0.18em] font-semibold hover:bg-saffron-light transition"
          >
            <FaWhatsapp /> Chat With Us
          </a>
        </div>
      </div>

      <div className="relative border-t border-ivory/10">
        <div className="container-luxe py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-ivory/60">
          <p>© {new Date().getFullYear()} Aurela Naturals. All rights reserved.</p>
          <p className="text-center">
            Marketed in India by Amrut Herbal Industries, Vaduj Karad Road, Satara 415512
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
