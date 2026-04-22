import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaWhatsapp, FaChevronLeft, FaLeaf } from "react-icons/fa";
import { HiOutlineSparkles, HiArrowRight } from "react-icons/hi2";
import products from "../data/products";
import useReveal from "../hooks/useReveal";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

const whatsappFor = (name) =>
  `https://wa.me/919067006013?text=${encodeURIComponent(
    `Hi Aurela Naturals, I'd like to order the ${name}.`
  )}`;

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  useReveal();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
        <p className="eyebrow text-saffron-dark mb-4">Not Found</p>
        <h2 className="heading-serif text-4xl text-primary mb-6">
          This elixir seems to have wandered off.
        </h2>
        <Link to="/" className="btn-dark">
          Return home
        </Link>
      </div>
    );
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 3);
  const isHero = product.id === "kumkumadi";
  const allIngredients =
    product.ingredients ||
    [...(product.ingredientsDay || []), ...(product.ingredientsNight || [])];

  return (
    <div className="bg-ivory">
      <div className="container-luxe pt-6 md:pt-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-charcoal/60 hover:text-saffron-dark transition"
        >
          <FaChevronLeft size={10} /> Back to collection
        </Link>
      </div>

      <section className="relative container-luxe py-10 md:py-16 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div className="reveal relative">
          <div className="relative rounded-[28px] overflow-hidden shadow-luxe ring-1 ring-saffron/20 bg-gradient-to-br from-cream via-white to-ivory">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 4200, disableOnInteraction: false }}
              loop
              className="!pb-10"
            >
              {product.images.map((src, idx) => (
                <SwiperSlide key={idx}>
                  <div className="aspect-[4/5] flex items-center justify-center">
                    <img
                      src={src}
                      alt={`${product.name} view ${idx + 1}`}
                      className="max-h-full max-w-full object-contain p-10"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {isHero && (
              <span className="absolute top-5 left-5 z-10 eyebrow text-[10px] px-3 py-1.5 rounded-full bg-primary text-saffron-light">
                ✦ Hero Elixir
              </span>
            )}
          </div>
        </div>

        <div className="reveal" style={{ transitionDelay: "150ms" }}>
          <p className="eyebrow text-saffron-dark mb-4">
            <span className="divider-gold mr-3" />
            Ayurvedic Skincare
          </p>

          <h1 className="heading-serif text-4xl md:text-5xl lg:text-6xl text-primary mb-5 text-balance">
            {product.name}
          </h1>

          <p className="text-charcoal/75 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
            {product.description}
          </p>

          {product.suitableFor && (
            <div className="flex items-start gap-3 mb-8 p-4 rounded-2xl bg-cream/60 border border-saffron/20">
              <FaLeaf className="text-saffron-dark mt-1 shrink-0" />
              <div>
                <p className="eyebrow text-[10px] text-saffron-dark mb-1">Suitable For</p>
                <p className="text-sm text-primary">{product.suitableFor}</p>
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <a
              href={whatsappFor(product.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold flex-1 sm:flex-none"
            >
              <FaWhatsapp /> Order on WhatsApp
            </a>
            <Link to="/contact" className="btn-dark flex-1 sm:flex-none">
              Enquire
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-3 pb-10 border-b border-saffron/20">
            {[
              { k: "Handcrafted", v: "Small batch" },
              { k: "Cruelty-free", v: "Never tested" },
              { k: "Ayurvedic", v: "Time-honoured" },
            ].map((t) => (
              <div key={t.k} className="text-center">
                <p className="eyebrow text-[10px] text-saffron-dark mb-1">{t.k}</p>
                <p className="text-xs text-charcoal/60">{t.v}</p>
              </div>
            ))}
          </div>

          <Accordion title="Benefits" items={product.benefits} />
          <Accordion title="Ingredients" items={allIngredients} />
          {product.ingredientsDay && (
            <Accordion title="Day Cream Ingredients" items={product.ingredientsDay} />
          )}
          {product.ingredientsNight && (
            <Accordion title="Night Cream Ingredients" items={product.ingredientsNight} />
          )}
          <Accordion title="Directions for Use" items={product.directions} />
        </div>
      </section>

      {related.length > 0 && (
        <section className="relative py-20 md:py-28 bg-gradient-to-b from-ivory to-cream/50">
          <div className="container-luxe">
            <div className="text-center mb-12">
              <p className="eyebrow text-saffron-dark mb-3 reveal">
                <span className="divider-gold mr-3" />
                You May Also Love
                <span className="divider-gold ml-3" />
              </p>
              <h2
                className="heading-serif text-3xl md:text-4xl lg:text-5xl text-primary reveal"
                style={{ transitionDelay: "100ms" }}
              >
                Complete your ritual
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {related.map((p, i) => (
                <Link
                  key={p.id}
                  to={`/product/${p.id}`}
                  className="reveal group relative rounded-[24px] overflow-hidden border border-saffron/15 bg-white/70 shadow-soft hover:shadow-luxe transition-all duration-500 hover:-translate-y-1"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="aspect-[4/5] bg-gradient-to-br from-cream via-white to-ivory overflow-hidden">
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      loading="lazy"
                      className="w-full h-full object-contain p-8 transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 bg-white/80">
                    <h3 className="heading-serif text-xl text-primary mb-1">{p.name}</h3>
                    <p className="text-xs text-charcoal/60 mb-4 line-clamp-2">
                      {p.description.slice(0, 80)}…
                    </p>
                    <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-saffron-dark font-semibold">
                      Discover <HiArrowRight />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="relative py-20 md:py-24 bg-primary text-ivory overflow-hidden">
        <div className="absolute -top-32 right-0 w-[400px] h-[400px] rounded-full bg-saffron/15 blur-3xl pointer-events-none" />
        <div className="relative container-luxe text-center max-w-2xl">
          <HiOutlineSparkles className="mx-auto text-saffron text-3xl mb-4" />
          <h3 className="heading-serif text-3xl md:text-5xl mb-4 text-balance">
            Prefer to chat first?
          </h3>
          <p className="text-ivory/75 mb-8">
            Message our founder directly on WhatsApp — we help you choose the ritual
            that fits your skin.
          </p>
          <a
            href={whatsappFor(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            <FaWhatsapp /> Chat with us
          </a>
        </div>
      </section>
    </div>
  );
};

const Accordion = ({ title, items }) => {
  if (!items || items.length === 0) return null;
  return (
    <details className="group border-b border-saffron/20 py-5 [&_summary::-webkit-details-marker]:hidden">
      <summary className="list-none flex items-center justify-between cursor-pointer">
        <span className="eyebrow text-saffron-dark">{title}</span>
        <span className="w-7 h-7 rounded-full border border-saffron/40 flex items-center justify-center text-saffron-dark text-xs transition-transform duration-500 group-open:rotate-45">
          +
        </span>
      </summary>
      <ul className="mt-4 space-y-2 text-sm text-charcoal/75">
        {items.map((it, i) => (
          <li key={i} className="flex gap-2">
            <span className="text-saffron-dark">•</span>
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </details>
  );
};

export default ProductDetails;
