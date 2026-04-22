import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

const AnimatedStat = ({ end, suffix = "", prefix = "", duration = 2, label }) => {
  const ref = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center">
      <p className="heading-serif text-3xl md:text-4xl lg:text-5xl text-saffron-dark">
        {prefix}
        {start ? (
          <CountUp end={end} duration={duration} separator="," />
        ) : (
          0
        )}
        {suffix}
      </p>
      <p className="eyebrow text-[10px] text-charcoal/60 mt-1">{label}</p>
    </div>
  );
};

export default AnimatedStat;
