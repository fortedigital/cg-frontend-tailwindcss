/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    colors: {
      "white": "#FFFFFF",
      "black": "#000000",
      "retro-white": "#FFF8EA",
      "retro-coral": "#9E7676",
      "retro-brown": {
        DEFAULT: "#594545",
        light: "#815B5B",
        dark: "#3e3030",
      },
    },
    extend: {},
  },
  plugins: [],
}
