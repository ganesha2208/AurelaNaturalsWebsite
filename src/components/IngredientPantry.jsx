import { useState } from "react";

const ingredients = [
  {
    name: "Kumkumadi Tailam",
    sanskrit: "कुङ्कुमादि",
    benefit: "Brightens & evens skin tone",
    detail:
      "A legendary Ayurvedic oil infused with saffron and sixteen herbs, famed for restoring radiance and luminosity.",
  },
  {
    name: "Saffron",
    sanskrit: "केसर",
    benefit: "Luminous clarity",
    detail:
      "Pure Kashmiri crocus — softens blemishes, melts pigmentation and leaves a subtle golden warmth on the skin.",
  },
  {
    name: "Sandalwood",
    sanskrit: "चन्दन",
    benefit: "Soothes & cools",
    detail:
      "Ancient sandalwood oil calms inflammation, tightens pores and carries its heirloom sacred aroma.",
  },
  {
    name: "Manjistha",
    sanskrit: "मञ्जिष्ठा",
    benefit: "Clarifies & decongests",
    detail:
      "Rubia cordifolia root — a master detoxifier that clears dullness and restores a fresh, rested complexion.",
  },
  {
    name: "Aloe Vera",
    sanskrit: "घृतकुमारी",
    benefit: "Deep hydration",
    detail:
      "Cold-extracted aloe delivers moisture to the deepest layers, softens fine lines and heals micro-damage.",
  },
  {
    name: "Licorice Root",
    sanskrit: "यष्टिमधु",
    benefit: "Skin-illumining",
    detail:
      "A natural tyrosinase inhibitor that gently fades dark spots and unifies uneven undertones over time.",
  },
];

const IngredientPantry = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-24 md:py-32 bg-cream overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-saffron/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-sage/15 blur-3xl pointer-events-none" />

      <div className="container-luxe relative">
        <div className="text-center mb-16">
          <p className="eyebrow text-saffron-dark mb-4 reveal">
            <span className="divider-gold mr-3" />
            The Pantry
            <span className="divider-gold ml-3" />
          </p>
          <h2
            className="heading-serif text-4xl md:text-5xl lg:text-6xl text-primary text-balance reveal"
            style={{ transitionDelay: "100ms" }}
          >
            Every ingredient,{" "}
            <span className="italic text-saffron-dark">intentional</span>.
          </h2>
          <p
            className="max-w-2xl mx-auto text-charcoal/65 text-base md:text-lg mt-5 reveal"
            style={{ transitionDelay: "200ms" }}
          >
            We source single-origin botanicals and let them do the work — no fillers,
            no inflators, no compromises.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {ingredients.map((ing, i) => {
              const isActive = i === active;
              return (
                <button
                  key={ing.name}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  aria-pressed={isActive}
                  className={`reveal group relative text-left rounded-2xl p-5 md:p-6 border transition-all duration-500 ${
                    isActive
                      ? "bg-primary text-ivory border-saffron shadow-luxe"
                      : "bg-white/60 border-saffron/20 text-primary hover:border-saffron/60 hover:shadow-soft"
                  }`}
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <span
                    className={`font-serif text-lg md:text-xl block mb-1 ${
                      isActive ? "text-saffron" : "text-saffron-dark"
                    }`}
                  >
                    {ing.sanskrit}
                  </span>
                  <span className="font-semibold text-sm md:text-base block">
                    {ing.name}
                  </span>
                  <span
                    className={`eyebrow text-[9px] mt-2 block transition-colors ${
                      isActive ? "text-saffron-light" : "text-charcoal/50"
                    }`}
                  >
                    {ing.benefit}
                  </span>
                </button>
              );
            })}
          </div>

          <div
            className="lg:col-span-5 lg:sticky lg:top-28 reveal"
            style={{ transitionDelay: "150ms" }}
          >
            <div className="relative rounded-[28px] bg-gradient-to-br from-primary to-primary-dark text-ivory p-8 md:p-10 shadow-luxe overflow-hidden">
              <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-saffron/15 blur-2xl" />
              <div className="relative">
                <p className="eyebrow text-saffron mb-3">Spotlight</p>
                <p className="font-serif text-4xl md:text-5xl text-saffron-light italic mb-1">
                  {ingredients[active].sanskrit}
                </p>
                <h3 className="heading-serif text-2xl md:text-3xl text-ivory mb-4">
                  {ingredients[active].name}
                </h3>
                <p className="text-ivory/80 text-sm md:text-base leading-relaxed mb-6">
                  {ingredients[active].detail}
                </p>
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-saffron/40 text-saffron-light text-xs uppercase tracking-[0.18em]">
                  <span className="w-1.5 h-1.5 rounded-full bg-saffron animate-pulse" />
                  {ingredients[active].benefit}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IngredientPantry;
