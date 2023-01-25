/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      current: "currentColor",
      "grey-dark": "#181818",
      "purple-main": "#7000FF",
      "off-white": "#FBFBFB",
      black: colors.black,
      violet: colors.violet,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      orange: colors.orange,
      neutral: colors.neutral,
    },
    extend: {
      fontFamily: {
        nunito: "Nunito",
        poppins: "Poppins",
      },
    },
  },
  plugins: [],
};
