import { useRef } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

const whatsappFor = (name) =>
  `https://wa.me/919067006013?text=${encodeURIComponent(
    `Hi Aurela Naturals, I'd like to order the ${name}.`
  )}`;

const ProductCard = ({ product, featured = false }) => {
  const primary = product.images?.[0];
  const hoverImg = product.images?.[1] || primary;
  const cardRef = useRef(null);
  const innerRef = useRef(null);

  const onMove = (e) => {
    const card = cardRef.current;
    const inner = innerRef.current;
    if (!card || !inner) return;
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    inner.style.transform = `perspective(1200px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-6px)`;
  };

  const onLeave = () => {
    const inner = innerRef.current;
    if (!inner) return;
    inner.style.transform = "perspective(1200px) rotateY(0) rotateX(0) translateY(0)";
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`group relative [transform-style:preserve-3d] ${
        featured ? "lg:col-span-1" : ""
      }`}
    >
      <div
        ref={innerRef}
        className={`relative flex flex-col rounded-[28px] overflow-hidden border border-saffron/15 bg-white/70 backdrop-blur-sm shadow-soft transition-[transform,box-shadow] duration-500 will-change-transform hover:shadow-luxe ${
          featured ? "ring-1 ring-saffron/50" : ""
        }`}
        style={{ transition: "transform 400ms cubic-bezier(0.22,1,0.36,1), box-shadow 400ms" }}
      >
        {featured && (
          <span className="absolute top-5 left-5 z-10 eyebrow text-[10px] px-3 py-1.5 rounded-full bg-primary text-saffron-light shadow-soft">
            ✦ Hero Elixir
          </span>
        )}

        <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-cream via-ivory to-white">
          <img
            src={primary}
            alt={product.name}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-contain p-8 transition-all duration-700 group-hover:opacity-0 group-hover:scale-105"
          />
          <img
            src={hoverImg}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-contain p-8 opacity-0 scale-105 transition-all duration-700 group-hover:opacity-100 group-hover:scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent pointer-events-none" />

          <a
            href={whatsappFor(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-5 right-5 inline-flex items-center justify-center w-11 h-11 rounded-full bg-[#25D366] text-white shadow-luxe translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 hover:scale-110"
            aria-label={`Order ${product.name} on WhatsApp`}
          >
            <FaWhatsapp size={18} />
          </a>
        </div>

        <div className="p-6 md:p-7 flex flex-col flex-grow bg-white/80 backdrop-blur-sm">
          <span className="eyebrow mb-2">Ayurvedic Skincare</span>
          <h3 className="heading-serif text-2xl md:text-[26px] text-primary mb-3">
            {product.name}
          </h3>
          <p className="text-sm text-charcoal/70 leading-relaxed flex-grow mb-5">
            {product.description.slice(0, 110)}…
          </p>

          <Link
            to={`/product/${product.id}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary uppercase tracking-[0.16em] group/link mt-auto"
            aria-label={`View details of ${product.name}`}
          >
            Discover the ritual
            <HiArrowRight className="transition-transform duration-300 group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
