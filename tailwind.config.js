const { addDynamicIconSelectors } = require("@iconify/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/*.js"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      primary: "#353f49",
      secondary: "#ab594d",
      black: "#000000",
      lightgray: "#e6e6e6",
      dark: "#000",
      light: "#fff",
    },
    extend: {},
  },
  plugins: [addDynamicIconSelectors()],
};

//npx tailwindcss -i ./css/input.css -o ./css/style.css --watch
//npm install --save-dev @iconify/tailwind
