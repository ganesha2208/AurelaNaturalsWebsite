/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        emerald: {
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
        },
        primary: {
          DEFAULT: "#89AD72",
          50: "#f0f6ec",
          100: "#dbe8d2",
          200: "#c6dab8",
          300: "#b1cc9e",
          400: "#9cbe84",
          500: "#89AD72",
          600: "#6e8c5a",
          700: "#536b42",
          800: "#38492a",
          900: "#1d2812",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
