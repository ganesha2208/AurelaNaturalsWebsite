import { useState } from "react";
import { HiPlus } from "react-icons/hi";

const faqs = [
  {
    q: "Is Aurela suitable for sensitive skin?",
    a: "Yes. Every formula is built around gentle, single-origin botanicals — no parabens, no sulphates, no synthetic fragrance. Patch test 24 hours before first full use, as with any skincare product.",
  },
  {
    q: "When will I see visible results?",
    a: "Most customers notice softer skin and a subtle glow within 7–10 days. For pigmentation, evenness and fine lines, a consistent 28-day ritual delivers the most striking transformation.",
  },
  {
    q: "Where are your products made?",
    a: "Every jar is poured by hand in our Satara studio in Maharashtra, in small batches, by our own team — never outsourced, never mass-produced.",
  },
  {
    q: "Do you ship pan-India and offer COD?",
    a: "Yes. We ship across India with free delivery on orders above ₹1499. Cash on Delivery is available on most pincodes — message us on WhatsApp to confirm.",
  },
  {
    q: "What is Kumkumadi Tailam exactly?",
    a: "A centuries-old Ayurvedic oil formulated in the Bhaishajya Ratnavali text — a blend of saffron, sandalwood, manjistha and fifteen other herbs known to restore radiance and even skin tone.",
  },
  {
    q: "How do I place an order?",
    a: "Tap ‘Order on WhatsApp’ on any product — our team will confirm your delivery address and share payment or COD details within minutes.",
  },
];

const Faq = () => {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative py-24 md:py-32 bg-ivory">
      <div className="container-luxe grid lg:grid-cols-12 gap-14">
        <div className="lg:col-span-5">
          <p className="eyebrow text-saffron-dark mb-4 reveal">
            <span className="divider-gold mr-3" />
            Gentle Answers
          </p>
          <h2
            className="heading-serif text-4xl md:text-5xl lg:text-6xl text-primary text-balance reveal"
            style={{ transitionDelay: "100ms" }}
          >
            Your questions, <span className="italic text-saffron-dark">answered</span>.
          </h2>
          <p
            className="mt-6 text-charcoal/65 text-base md:text-lg max-w-md reveal"
            style={{ transitionDelay: "200ms" }}
          >
            Still curious? Message us on WhatsApp — we reply personally, usually within
            minutes.
          </p>
        </div>

        <div className="lg:col-span-7">
          <div className="divide-y divide-saffron/20 border-y border-saffron/20">
            {faqs.map((item, i) => {
              const isOpen = i === open;
              return (
                <div
                  key={item.q}
                  className="reveal"
                  style={{ transitionDelay: `${i * 70}ms` }}
                >
                  <button
                    className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`heading-serif text-xl md:text-2xl transition-colors ${
                        isOpen ? "text-saffron-dark" : "text-primary group-hover:text-saffron-dark"
                      }`}
                    >
                      {item.q}
                    </span>
                    <span
                      className={`shrink-0 w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-500 ${
                        isOpen
                          ? "bg-primary text-saffron border-primary rotate-45"
                          : "border-saffron/40 text-saffron-dark group-hover:border-saffron"
                      }`}
                    >
                      <HiPlus size={16} />
                    </span>
                  </button>
                  <div
                    className="grid transition-all duration-500 ease-out"
                    style={{
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-6 text-charcoal/70 leading-relaxed text-[15px] md:text-base max-w-2xl">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
