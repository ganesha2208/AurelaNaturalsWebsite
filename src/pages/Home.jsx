import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaLeaf, FaHeart, FaSeedling, FaStar } from "react-icons/fa";
import { HiArrowDown, HiOutlineSparkles } from "react-icons/hi2";

import useReveal from "../hooks/useReveal";
import Marquee from "../components/Marquee";
import IngredientPantry from "../components/IngredientPantry";
import Ritual from "../components/Ritual";
import BeforeAfter from "../components/BeforeAfter";
import Faq from "../components/Faq";
import AnimatedStat from "../components/AnimatedStat";

const ProductList = lazy(() => import("../components/ProductList"));

const WHATSAPP_ORDER =
  "https://wa.me/919067006013?text=Hi%20Aurela%20Naturals%2C%20I%27d%20like%20to%20order%20the%20Kumkumadi%20Elixir.";

const kumkumadi = {
  id: "kumkumadi",
  name: "Kumkumadi Herbal Elixir Cream",
  ingredients: [
    "Kumkumadi Tailam",
    "Saffron Extract",
    "Sandalwood",
    "Manjistha",
    "Licorice",
    "Aloe Vera",
    "Almond Oil",
    "Shea Butter",
  ],
};

const trustPillars = [
  { icon: <FaSeedling />, title: "Ayurvedic", sub: "Rooted in ancient wisdom" },
  { icon: <FaLeaf />, title: "Handcrafted", sub: "Small batch, made with care" },
  { icon: <FaHeart />, title: "Cruelty-Free", sub: "Never tested on animals" },
  { icon: <HiOutlineSparkles />, title: "Made in Maharashtra", sub: "Crafted in Satara" },
];

const testimonials = [
  {
    quote:
      "Within three weeks of using the Kumkumadi cream, my skin finally feels alive again. The glow is unreal.",
    name: "Aditi S.",
    place: "Mumbai",
    rating: 5,
  },
  {
    quote:
      "You can tell it is handmade. The texture, the aroma — it feels like an indulgent ritual every single night.",
    name: "Pooja K.",
    place: "Pune",
    rating: 5,
  },
  {
    quote:
      "I have tried premium brands that cost three times more. Aurela's Kumkumadi elixir out-performs every one of them.",
    name: "Rhea M.",
    place: "Bengaluru",
    rating: 5,
  },
];

const Home = () => {
  useReveal();

  return (
    <div className="font-sans text-charcoal overflow-x-hidden">
      <Hero />
      <Marquee />
      <TrustStrip />
      <KumkumadiSpotlight />
      <BeforeAfter
        beforeSrc="/kumkum3.png"
        afterSrc="/kumkum5.png"
        beforeLabel="Week 1"
        afterLabel="Week 4"
      />
      <IngredientPantry />
      <Ritual />
      <ProductCollection />
      <Story />
      <Testimonials />
      <Faq />
      <FinalCta />
    </div>
  );
};

/* ---------------- HERO ---------------- */
const Hero = () => {
  const videoRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const v = videoRef.current;
    if (v) v.play().catch(() => {});

    const onScroll = () => setScrollY(window.scrollY);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative w-full min-h-[92vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translate3d(0, ${scrollY * 0.3}px, 0)` }}
      >
        <video
          ref={videoRef}
          src="/kumkum_video1.mp4"
          poster="/kumkum8.png"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 via-primary/60 to-primary-dark/95" />
        <div className="absolute inset-0 bg-noise opacity-60 mix-blend-overlay" />
      </div>

      <div
        className="relative container-luxe text-center text-ivory py-28 md:py-32 animate-fade-in"
        style={{
          transform: `translate3d(0, ${scrollY * -0.15}px, 0)`,
          opacity: Math.max(0, 1 - scrollY / 600),
        }}
      >
        <p
          className="eyebrow text-saffron-light mb-6 animate-fade-up"
          style={{ animationDelay: "150ms" }}
        >
          <span className="divider-gold mr-3" />
          An Ayurvedic Ritual
          <span className="divider-gold ml-3" />
        </p>

        <h1
          className="heading-serif text-5xl sm:text-6xl md:text-7xl lg:text-[88px] text-ivory mb-6 text-balance animate-fade-up"
          style={{ animationDelay: "300ms" }}
        >
          A Golden Glow,
          <br />
          <span className="italic bg-gold-shimmer bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer">
            From Ancient India
          </span>
        </h1>

        <p
          className="max-w-2xl mx-auto text-base md:text-lg text-ivory/85 leading-relaxed mb-10 animate-fade-up"
          style={{ animationDelay: "500ms" }}
        >
          Handcrafted skincare elixirs infused with Kumkumadi, saffron and twenty-one
          botanicals. Rituals your grandmother would approve of, distilled for modern skin.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: "700ms" }}
        >
          <a href="#kumkumadi" className="btn-gold">
            Discover Kumkumadi
          </a>
          <a href="#products" className="btn-outline-ivory">
            Explore Collection
          </a>
        </div>
      </div>

      <a
        href="#trust"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ivory/70 hover:text-saffron transition-colors animate-float"
      >
        <HiArrowDown size={24} />
      </a>
    </section>
  );
};

/* ---------------- TRUST STRIP ---------------- */
const TrustStrip = () => (
  <section id="trust" className="relative bg-ivory border-b border-saffron/15">
    <div className="container-luxe py-12 md:py-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
      {trustPillars.map((p, i) => (
        <div
          key={p.title}
          className="reveal flex flex-col items-center text-center group"
          style={{ transitionDelay: `${i * 90}ms` }}
        >
          <span className="text-saffron-dark text-2xl md:text-3xl mb-3 group-hover:scale-110 transition-transform duration-500">
            {p.icon}
          </span>
          <h4 className="font-serif text-lg md:text-xl text-primary">{p.title}</h4>
          <p className="text-xs md:text-sm text-charcoal/60 mt-1">{p.sub}</p>
        </div>
      ))}
    </div>
  </section>
);

/* ---------------- KUMKUMADI SPOTLIGHT ---------------- */
const KumkumadiSpotlight = () => {
  const [playing, setPlaying] = useState(0);
  const videos = ["/kumkum_video2.mp4", "/kumkum_video3.mp4", "/VID-20260420-WA0008.mp4"];

  return (
    <section
      id="kumkumadi"
      className="relative py-24 md:py-32 bg-gradient-to-br from-primary via-primary-dark to-[#1a3028] text-ivory overflow-hidden"
    >
      <div className="absolute inset-0 bg-noise opacity-40 mix-blend-soft-light pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-saffron/10 blur-3xl animate-float" />
      <div
        className="absolute -bottom-40 -left-40 w-[520px] h-[520px] rounded-full bg-sage/10 blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="container-luxe relative grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <div className="reveal order-2 lg:order-1">
          <p className="eyebrow text-saffron-light mb-5">
            <span className="divider-gold mr-3" />
            The Hero Elixir
          </p>
          <h2 className="heading-serif text-4xl sm:text-5xl md:text-6xl text-ivory mb-6 text-balance">
            Kumkumadi. The{" "}
            <span className="italic text-saffron">saffron secret</span> of Ayurveda.
          </h2>
          <p className="text-ivory/75 text-base md:text-lg leading-relaxed mb-4">
            Our signature cream marries the legendary{" "}
            <span className="text-saffron">Kumkumadi Tailam</span> with cold-pressed
            almond, shea butter and pure Kashmiri saffron — a centuries-old formula
            reimagined for your dressing table.
          </p>
          <p className="text-ivory/65 text-sm md:text-base leading-relaxed mb-8">
            Used nightly, it brightens pigmentation, softens fine lines and leaves skin
            with a luminous, lit-from-within glow.
          </p>

          <div className="flex flex-wrap gap-2 mb-10">
            {kumkumadi.ingredients.map((ing) => (
              <span
                key={ing}
                className="px-3.5 py-1.5 text-[11px] uppercase tracking-[0.14em] rounded-full border border-saffron/40 text-saffron-light/90 bg-white/5 backdrop-blur-sm"
              >
                {ing}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href={WHATSAPP_ORDER}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              <FaWhatsapp /> Order on WhatsApp
            </a>
            <Link to={`/product/${kumkumadi.id}`} className="btn-outline-ivory">
              Read the ritual
            </Link>
          </div>
        </div>

        <div className="reveal order-1 lg:order-2 relative">
          <div className="relative rounded-[32px] overflow-hidden shadow-luxe ring-1 ring-saffron/30">
            <div className="aspect-[3/4] md:aspect-[4/5] bg-black">
              <video
                key={playing}
                src={videos[playing]}
                poster="/kumkum8.png"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-5 left-5 flex gap-1.5">
              {videos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPlaying(i)}
                  aria-label={`Play video ${i + 1}`}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === playing
                      ? "w-8 bg-saffron"
                      : "w-5 bg-ivory/40 hover:bg-ivory/70"
                  }`}
                />
              ))}
            </div>
          </div>

          <img
            src="/kumkum8.png"
            alt="Kumkumadi cream jar"
            loading="lazy"
            className="hidden md:block absolute -bottom-10 -left-10 w-48 lg:w-56 h-auto drop-shadow-2xl animate-float"
          />
          <div className="hidden lg:flex absolute -top-6 -right-6 bg-ivory text-primary rounded-2xl px-5 py-4 shadow-luxe items-center gap-3">
            <span className="text-saffron-dark text-2xl">
              <HiOutlineSparkles />
            </span>
            <div>
              <p className="eyebrow text-[10px]">Crafted with</p>
              <p className="font-serif text-lg">21 Botanicals</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------------- PRODUCT COLLECTION ---------------- */
const ProductCollection = () => (
  <section id="products" className="relative py-24 md:py-32 bg-gradient-to-b from-cream/50 to-ivory">
    <div className="container-luxe text-center mb-16">
      <p className="eyebrow text-saffron-dark mb-4 reveal">
        <span className="divider-gold mr-3" />
        Our Collection
        <span className="divider-gold ml-3" />
      </p>
      <h2
        className="heading-serif text-4xl md:text-5xl lg:text-6xl text-primary mb-5 reveal"
        style={{ transitionDelay: "100ms" }}
      >
        Rituals for <span className="italic text-saffron-dark">every skin</span>
      </h2>
      <p
        className="max-w-2xl mx-auto text-charcoal/65 text-base md:text-lg reveal"
        style={{ transitionDelay: "200ms" }}
      >
        Every jar is poured by hand, in small batches, in our Satara studio. Discover
        the ritual your skin has been waiting for.
      </p>
    </div>

    <div className="container-luxe reveal" style={{ transitionDelay: "250ms" }}>
      <Suspense fallback={<div className="h-96" />}>
        <ProductList />
      </Suspense>
    </div>
  </section>
);

/* ---------------- STORY ---------------- */
const Story = () => (
  <section
    id="story"
    className="relative py-24 md:py-32 bg-gradient-to-br from-cream via-ivory to-cream overflow-hidden"
  >
    <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-saffron/15 blur-3xl pointer-events-none" />
    <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-sage/20 blur-3xl pointer-events-none" />

    <div className="container-luxe relative grid lg:grid-cols-12 gap-14 items-center">
      <div className="lg:col-span-5 reveal">
        <div className="relative">
          <div className="aspect-[4/5] rounded-[28px] overflow-hidden shadow-luxe ring-1 ring-primary/10">
            <img
              src="/AURELA NEW png.png"
              alt="Aurela Naturals brand"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 md:-right-10 bg-primary text-ivory rounded-2xl px-6 py-5 shadow-luxe max-w-[220px]">
            <p className="eyebrow text-saffron mb-1">Since 2022</p>
            <p className="font-serif text-lg leading-snug">
              A family ritual, bottled for your skin.
            </p>
          </div>
        </div>
      </div>

      <div className="lg:col-span-7 reveal" style={{ transitionDelay: "150ms" }}>
        <p className="eyebrow text-saffron-dark mb-5">
          <span className="divider-gold mr-3" />
          Our Story
        </p>
        <h2 className="heading-serif text-4xl md:text-5xl lg:text-6xl text-primary mb-6 text-balance">
          Skincare the way it was{" "}
          <em className="text-saffron-dark">meant</em> to be.
        </h2>
        <div className="space-y-5 text-charcoal/75 text-base md:text-lg leading-relaxed max-w-xl">
          <p>
            Aurela Naturals was born in Satara, Maharashtra — in a kitchen where three
            generations of women exchanged recipes for radiant skin. No shortcuts, no
            synthetic fillers, no chemistry your grandmother wouldn&rsquo;t recognise.
          </p>
          <p>
            Today, we still make every jar the same way: small batches, cold-pressed
            oils, single-origin botanicals, and a slow, unhurried process that puts
            efficacy ahead of everything else.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-4 gap-4 max-w-xl">
          <AnimatedStat end={21} suffix="+" label="Botanicals" />
          <AnimatedStat end={100} suffix="%" label="Cruelty-free" />
          <AnimatedStat end={0} label="Parabens" />
          <AnimatedStat end={5000} suffix="+" label="Happy skins" />
        </div>
      </div>
    </div>
  </section>
);

/* ---------------- TESTIMONIALS ---------------- */
const Testimonials = () => (
  <section className="relative py-24 md:py-32 bg-ivory">
    <div className="container-luxe text-center mb-16">
      <p className="eyebrow text-saffron-dark mb-4 reveal">
        <span className="divider-gold mr-3" />
        Loved By Our Community
        <span className="divider-gold ml-3" />
      </p>
      <h2
        className="heading-serif text-4xl md:text-5xl text-primary reveal"
        style={{ transitionDelay: "100ms" }}
      >
        Stories from <span className="italic text-saffron-dark">radiant skin</span>
      </h2>
    </div>

    <div className="container-luxe grid md:grid-cols-3 gap-6 md:gap-8">
      {testimonials.map((t, i) => (
        <figure
          key={t.name}
          className="reveal relative rounded-[24px] bg-gradient-to-br from-white to-cream/60 p-8 md:p-10 border border-saffron/15 shadow-soft hover:shadow-luxe transition-shadow duration-500"
          style={{ transitionDelay: `${i * 120}ms` }}
        >
          <div className="flex gap-1 text-saffron mb-5">
            {Array.from({ length: t.rating }).map((_, idx) => (
              <FaStar key={idx} size={14} />
            ))}
          </div>
          <blockquote className="font-serif text-xl md:text-2xl text-primary leading-snug mb-6 text-balance">
            &ldquo;{t.quote}&rdquo;
          </blockquote>
          <figcaption className="flex items-center justify-between border-t border-saffron/20 pt-4">
            <div>
              <p className="font-semibold text-primary">{t.name}</p>
              <p className="text-xs text-charcoal/60">{t.place}</p>
            </div>
            <span className="eyebrow text-[10px] text-saffron-dark">Verified</span>
          </figcaption>
        </figure>
      ))}
    </div>
  </section>
);

/* ---------------- FINAL CTA ---------------- */
const FinalCta = () => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    setEmail("");
  };

  return (
    <section className="relative py-24 md:py-28 bg-gradient-to-br from-primary to-primary-dark overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-saffron/10 blur-3xl" />

      <div className="container-luxe relative text-center text-ivory max-w-3xl">
        <p className="eyebrow text-saffron-light mb-5 reveal">
          <span className="divider-gold mr-3" />
          Join The Ritual
          <span className="divider-gold ml-3" />
        </p>
        <h2
          className="heading-serif text-4xl md:text-6xl text-ivory mb-5 reveal text-balance"
          style={{ transitionDelay: "100ms" }}
        >
          Subscribe for <span className="italic text-saffron">ritual secrets</span>,
          early launches & quiet offers.
        </h2>
        <p
          className="text-ivory/70 mb-10 reveal"
          style={{ transitionDelay: "200ms" }}
        >
          No spam. Just one thoughtful letter a month, with ingredient deep-dives and a
          small welcome gift on your first order.
        </p>

        {sent ? (
          <p className="reveal font-serif text-2xl text-saffron italic">
            Welcome to Aurela. Check your inbox soon ✦
          </p>
        ) : (
          <form
            onSubmit={onSubmit}
            className="reveal flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
            style={{ transitionDelay: "300ms" }}
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-grow px-6 py-3.5 rounded-full bg-ivory/10 border border-ivory/20 text-ivory placeholder:text-ivory/50 focus:outline-none focus:ring-2 focus:ring-saffron transition"
            />
            <button type="submit" className="btn-gold">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Home;
