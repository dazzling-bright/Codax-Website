/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(235, 244, 255, 1)",
        secondary: "rgba(3, 57, 119, 1)",
        "custom-black": "rgba(16, 10, 1, 1)",
        "custom-royal-blue": "rgba(15, 10, 51, 1)",
      },
    },
  },
  plugins: [],
};
