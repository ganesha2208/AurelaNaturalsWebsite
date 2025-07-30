/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  
  theme: {
  extend: {
    fontFamily: {
      heading: ['Montserrat', 'sans-serif'],
      body: ['Lato', 'sans-serif'],
    },
    colors: {
      primary: "#2d6a4f",
      secondary: "#b7e4c7",
      accent: "#ffd166",
    },
  },
},

  plugins: [],
};
