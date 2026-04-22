/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Poppins", "system-ui", "sans-serif"],
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
      },
      colors: {
        primary: "#2d4a3e",
        "primary-dark": "#1f3329",
        sage: {
          DEFAULT: "#82b17b",
          dark: "#6d9868",
          light: "#b7d0b1",
        },
        saffron: {
          DEFAULT: "#d4a574",
          dark: "#b8894f",
          light: "#e8c9a0",
        },
        ivory: "#faf7f2",
        cream: "#f4ece0",
        rose: "#c97a6d",
        charcoal: "#1a1a1a",
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(45, 74, 62, 0.18)",
        luxe: "0 20px 60px -20px rgba(45, 74, 62, 0.35)",
        gold: "0 10px 40px -12px rgba(212, 165, 116, 0.45)",
      },
      backgroundImage: {
        "gold-shimmer":
          "linear-gradient(110deg, #b8894f 0%, #d4a574 35%, #f5e4c9 50%, #d4a574 65%, #b8894f 100%)",
        "radial-cream":
          "radial-gradient(ellipse at top, #faf7f2 0%, #f4ece0 70%, #e8dcc6 100%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: 0, transform: "translateY(24px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "slow-zoom": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.8)", opacity: 0.6 },
          "100%": { transform: "scale(2)", opacity: 0 },
        },
      },
      animation: {
        "fade-up": "fade-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fade-in 1.2s ease-out both",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 3.5s linear infinite",
        "slow-zoom": "slow-zoom 18s ease-out both",
        "pulse-ring": "pulse-ring 2.2s cubic-bezier(0.22, 1, 0.36, 1) infinite",
      },
      letterSpacing: {
        luxe: "0.22em",
      },
    },
  },
  plugins: [],
};
