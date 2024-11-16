/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      screens: {
        xs: { max: "639px" }, // This will target all screen sizes from 0px up to 639px
      },
    },
  },
  plugins: [],
};
