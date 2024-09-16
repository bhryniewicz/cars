/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "bebas-neue": ["Bebas Neue", "sans-serif"],
        roboto: ["Roboto Condensed", "sans-serif"],
      },
      colors: {
        blue: "#0147FF",
        dark: "#282828",
      },
    },
  },
  plugins: [],
};
