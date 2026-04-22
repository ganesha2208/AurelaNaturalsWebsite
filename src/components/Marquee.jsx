const items = [
  "Ayurvedic",
  "Handcrafted",
  "Saffron-Infused",
  "Small Batch",
  "Cruelty-Free",
  "Paraben-Free",
  "Made in India",
  "Pure Botanicals",
  "Cold-Pressed",
];

const Marquee = () => (
  <section
    aria-label="Brand values"
    className="relative bg-primary text-ivory overflow-hidden border-y border-saffron/20"
  >
    <div className="flex animate-[marquee_38s_linear_infinite] whitespace-nowrap py-5 md:py-6">
      {[0, 1].map((loop) => (
        <div
          key={loop}
          className="flex items-center shrink-0"
          aria-hidden={loop === 1}
        >
          {items.map((it, i) => (
            <span
              key={`${loop}-${i}`}
              className="flex items-center px-8 md:px-12 font-serif italic text-2xl md:text-4xl text-ivory/85"
            >
              {it}
              <span className="ml-8 md:ml-12 text-saffron text-xl md:text-2xl not-italic">
                ✦
              </span>
            </span>
          ))}
        </div>
      ))}
    </div>

    <style>{`
      @keyframes marquee {
        from { transform: translate3d(0, 0, 0); }
        to   { transform: translate3d(-50%, 0, 0); }
      }
    `}</style>
  </section>
);

export default Marquee;
