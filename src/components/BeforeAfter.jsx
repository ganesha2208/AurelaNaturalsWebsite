import { useCallback, useRef, useState, useEffect } from "react";

const BeforeAfter = ({
  beforeSrc = "/kumkum3.png",
  afterSrc = "/kumkum5.png",
  beforeLabel = "Week 1",
  afterLabel = "Week 4",
}) => {
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const frame = useRef(null);

  const setFromClientX = useCallback((clientX) => {
    const el = frame.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - r.left, r.width));
    setPos((x / r.width) * 100);
  }, []);

  useEffect(() => {
    if (!dragging) return;
    const onMove = (e) => {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      setFromClientX(clientX);
    };
    const onUp = () => setDragging(false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onUp);
    };
  }, [dragging, setFromClientX]);

  const onKey = (e) => {
    if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 3));
    if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 3));
  };

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-br from-cream via-ivory to-cream overflow-hidden">
      <div className="container-luxe">
        <div className="text-center mb-14">
          <p className="eyebrow text-saffron-dark mb-4 reveal">
            <span className="divider-gold mr-3" />
            Visible Radiance
            <span className="divider-gold ml-3" />
          </p>
          <h2
            className="heading-serif text-4xl md:text-5xl lg:text-6xl text-primary text-balance reveal"
            style={{ transitionDelay: "100ms" }}
          >
            The glow is in the <span className="italic text-saffron-dark">details</span>.
          </h2>
          <p
            className="max-w-2xl mx-auto text-charcoal/65 text-base md:text-lg mt-5 reveal"
            style={{ transitionDelay: "200ms" }}
          >
            Drag the divider to see how skin transforms with consistent use.
          </p>
        </div>

        <div
          ref={frame}
          className="reveal relative max-w-4xl mx-auto select-none aspect-[4/3] md:aspect-[16/10] rounded-[28px] overflow-hidden shadow-luxe ring-1 ring-saffron/30 bg-white"
          onMouseDown={(e) => {
            setDragging(true);
            setFromClientX(e.clientX);
          }}
          onTouchStart={(e) => {
            setDragging(true);
            setFromClientX(e.touches[0].clientX);
          }}
        >
          <img
            src={afterSrc}
            alt={afterLabel}
            draggable="false"
            className="absolute inset-0 w-full h-full object-contain p-10 bg-gradient-to-br from-cream via-white to-ivory"
          />
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${pos}%` }}
          >
            <img
              src={beforeSrc}
              alt={beforeLabel}
              draggable="false"
              className="absolute inset-0 h-full object-contain p-10 bg-gradient-to-br from-cream via-white to-ivory"
              style={{ width: `${(100 / pos) * 100}%`, maxWidth: "none" }}
            />
          </div>

          <span className="pointer-events-none absolute top-5 left-5 eyebrow text-[10px] px-3 py-1.5 rounded-full bg-primary/90 text-saffron-light">
            {beforeLabel}
          </span>
          <span className="pointer-events-none absolute top-5 right-5 eyebrow text-[10px] px-3 py-1.5 rounded-full bg-saffron text-primary-dark">
            {afterLabel}
          </span>

          <button
            type="button"
            role="slider"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(pos)}
            aria-label="Before / after slider"
            tabIndex={0}
            onKeyDown={onKey}
            onMouseDown={(e) => {
              e.stopPropagation();
              setDragging(true);
            }}
            onTouchStart={(e) => {
              e.stopPropagation();
              setDragging(true);
            }}
            className="absolute top-0 bottom-0 -translate-x-1/2 flex items-center justify-center group cursor-ew-resize focus:outline-none"
            style={{ left: `${pos}%` }}
          >
            <span className="absolute top-0 bottom-0 w-[2px] bg-ivory shadow-[0_0_20px_rgba(255,255,255,0.6)]" />
            <span className="relative w-12 h-12 rounded-full bg-gold-shimmer bg-[length:200%_100%] animate-shimmer shadow-luxe flex items-center justify-center ring-2 ring-ivory group-hover:scale-110 transition-transform">
              <span className="text-primary-dark font-bold text-lg">⇔</span>
            </span>
          </button>
        </div>

        <p
          className="text-center text-xs text-charcoal/45 uppercase tracking-[0.2em] mt-6 reveal"
          style={{ transitionDelay: "300ms" }}
        >
          Real users · With consistent nightly use
        </p>
      </div>
    </section>
  );
};

export default BeforeAfter;
