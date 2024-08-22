/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'poppins': ['poppins', 'serif']
    },
    container: {
      center: true
    },
    extend: {
      colors: {
        primary: "#141414",
        secondary: "#FF9357",
        third: "#FFFFFF"
      }
    },
  },
  plugins: [],
};
