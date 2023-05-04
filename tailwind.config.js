/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      montez: ["Montez", "cursive", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
};
