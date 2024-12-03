/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Josefin Sans", "Lato", "sans-serif"], // Added "Lato" to the font stack
      },
    },
  },
  plugins: [],
};

// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       fontFamily: {
//         sans: ["Josefin Sans", "sans-serif"],
//       },
//       colors: {
//         primary: "#151875",
//         secondary: "#FB2E86",
//       },
//     },
//   },
//   plugins: [],
// };
