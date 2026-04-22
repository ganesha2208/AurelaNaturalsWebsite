const steps = [
  {
    n: "01",
    title: "Cleanse",
    time: "60 seconds",
    body: "Begin with a freshly washed, lightly damp face. Pat gently — never rub.",
  },
  {
    n: "02",
    title: "Anoint",
    time: "90 seconds",
    body: "Warm a pea-sized drop between fingertips. Press into the skin with slow, upward strokes.",
  },
  {
    n: "03",
    title: "Rest",
    time: "Overnight",
    body: "Let the saffron-rich elixir work while you sleep. Wake up to softer, luminous skin.",
  },
];

const Ritual = () => (
  <section className="relative py-24 md:py-32 bg-ivory overflow-hidden">
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-saffron/50 to-transparent" />

    <div className="container-luxe">
      <div className="text-center mb-16">
        <p className="eyebrow text-saffron-dark mb-4 reveal">
          <span className="divider-gold mr-3" />
          The Ritual
          <span className="divider-gold ml-3" />
        </p>
        <h2
          className="heading-serif text-4xl md:text-5xl lg:text-6xl text-primary text-balance reveal"
          style={{ transitionDelay: "100ms" }}
        >
          Three minutes.{" "}
          <span className="italic text-saffron-dark">A lifetime of glow.</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8 relative">
        <div className="hidden md:block absolute top-12 left-[16.6%] right-[16.6%] h-px bg-gradient-to-r from-saffron/0 via-saffron to-saffron/0" />

        {steps.map((s, i) => (
          <div
            key={s.n}
            className="reveal relative"
            style={{ transitionDelay: `${i * 140}ms` }}
          >
            <div className="relative flex flex-col items-center text-center">
              <div className="relative w-20 h-20 md:w-24 md:h-24 mb-6 flex items-center justify-center">
                <span className="absolute inset-0 rounded-full bg-gold-shimmer bg-[length:200%_100%] animate-shimmer" />
                <span className="absolute inset-1 rounded-full bg-ivory" />
                <span className="relative font-serif text-3xl md:text-4xl text-primary">
                  {s.n}
                </span>
              </div>
              <p className="eyebrow text-saffron-dark mb-2">{s.time}</p>
              <h3 className="heading-serif text-2xl md:text-3xl text-primary mb-3">
                {s.title}
              </h3>
              <p className="text-charcoal/65 text-sm md:text-base leading-relaxed max-w-xs">
                {s.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Ritual;
