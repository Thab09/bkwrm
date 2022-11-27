/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
      },
    },
    colors: {
      primary: "#d4a373",
      secondary: "#ecc94b",
    },
  },
  plugins: [],
};
