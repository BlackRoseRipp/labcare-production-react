/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-primary": "#0F2F64",
        "blue-secondary": "#357cbd",
        "light-blue": "#F4F9FF",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
