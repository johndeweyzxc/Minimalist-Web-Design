/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBgColor: "#111111",
        secondaryBgColor: "#262626",
        primaryTextColor: "#ffffff",
        gradientBlue: "#58B8CB",
        gradientRed: "#CF5C67",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        PublicSans: ["Public Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
