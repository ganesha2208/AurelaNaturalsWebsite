import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const WHATSAPP_URL =
  "https://wa.me/919067006013?text=Hi%20Aurela%20Naturals%2C%20I%27d%20like%20to%20know%20more%20about%20your%20products.";

const navLinks = [
  { label: "Home", to: "/", hash: "" },
  { label: "Kumkumadi", to: "/", hash: "#kumkumadi" },
  { label: "Shop", to: "/", hash: "#products" },
  { label: "Our Story", to: "/", hash: "#story" },
  { label: "Contact", to: "/contact", hash: "" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const shell = scrolled
    ? "bg-ivory/85 backdrop-blur-xl shadow-soft border-b border-saffron/20"
    : "bg-transparent border-b border-transparent";

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-500 ${shell}`}
    >
      <div className="container-luxe flex items-center justify-between py-3 md:py-4">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <img
              src="/logo.png"
              alt="Aurela Naturals"
              className="h-10 md:h-12 w-auto transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-serif text-xl md:text-2xl font-semibold text-primary tracking-tight">
              Aurela
            </span>
            <span className="eyebrow text-[9px] md:text-[10px] text-saffron-dark mt-0.5">
              Naturals
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={`${link.to}${link.hash}`}
              className="relative text-[13px] uppercase tracking-[0.18em] font-medium text-charcoal/80 hover:text-primary transition-colors duration-300 after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-saffron after:transition-all after:duration-500 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-ivory text-xs uppercase tracking-[0.18em] font-semibold hover:bg-primary-dark transition-all duration-300 shadow-soft hover:shadow-luxe"
          >
            <FaWhatsapp className="text-sage-light" />
            <span>Order Now</span>
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-full text-primary bg-ivory/60 hover:bg-ivory backdrop-blur border border-saffron/30 transition"
          >
            {open ? <HiX size={22} /> : <HiMenu size={22} />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden fixed inset-0 top-0 z-40 transition-all duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-primary/95 backdrop-blur-xl" />
        <div className="relative h-full overflow-y-auto px-6 pt-10 pb-12 flex flex-col">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <Link
                key={link.label}
                to={`${link.to}${link.hash}`}
                style={{ transitionDelay: `${i * 60}ms` }}
                className={`py-4 border-b border-ivory/10 font-serif text-3xl text-ivory transition-all duration-500 ${
                  open ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 btn-gold w-full"
          >
            <FaWhatsapp /> Order on WhatsApp
          </a>

          <div className="mt-10 text-ivory/70 text-sm space-y-1">
            <p className="eyebrow text-saffron">Visit us</p>
            <p>Sangamnagar, Satara, Maharashtra</p>
            <p>+91 9067 00 6013</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
