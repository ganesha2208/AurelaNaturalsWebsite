import { useEffect, useState } from "react";

const messages = [
  "Free shipping across India on orders ₹1499+",
  "Cash on Delivery available",
  "Handcrafted in Satara, Maharashtra",
  "Small batch. Shipped with care.",
];

const AnnouncementBar = () => {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setI((v) => (v + 1) % messages.length),
      3600
    );
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative z-[55] bg-primary-dark text-ivory overflow-hidden">
      <div className="container-luxe h-9 flex items-center justify-center text-[11px] md:text-xs uppercase tracking-[0.2em]">
        <div className="relative h-full flex-1 flex items-center justify-center">
          {messages.map((m, idx) => (
            <span
              key={m}
              aria-hidden={i !== idx}
              className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
                i === idx
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-3 pointer-events-none"
              }`}
            >
              <span className="text-saffron mr-2">✦</span>
              <span className="text-ivory/90">{m}</span>
              <span className="text-saffron ml-2">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
