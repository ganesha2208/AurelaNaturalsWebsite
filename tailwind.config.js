/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  
  theme: {
  extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
 colors: {
  primary: "#82b17b",
  "primary-dark": "#6d9868", // Slightly darker for hover
}

  },
},

  plugins: [],
};
