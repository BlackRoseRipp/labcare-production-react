/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        amber: "#ffba49",
        green: "#20a39e",
        red: "#ef5b5b",
        "dark-green": "#0d4442",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
