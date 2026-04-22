import { Link } from "react-router-dom";

const NotFound = () => (
  <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream via-ivory to-cream">
    <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-saffron/15 blur-3xl pointer-events-none" />
    <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full bg-sage/20 blur-3xl pointer-events-none" />

    <div className="relative container-luxe text-center max-w-xl animate-fade-up">
      <p className="eyebrow text-saffron-dark mb-5">
        <span className="divider-gold mr-3" />
        Lost in the garden
        <span className="divider-gold ml-3" />
      </p>
      <h1 className="heading-serif text-7xl md:text-[140px] text-primary leading-none mb-4">
        4
        <span className="italic bg-gold-shimmer bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer">
          0
        </span>
        4
      </h1>
      <p className="text-charcoal/70 text-base md:text-lg mb-10 max-w-md mx-auto">
        The page you are looking for has wandered off into our botanical garden. Let us
        guide you back.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link to="/" className="btn-gold">
          Return Home
        </Link>
        <Link to="/contact" className="btn-dark">
          Contact Us
        </Link>
      </div>
    </div>
  </section>
);

export default NotFound;
