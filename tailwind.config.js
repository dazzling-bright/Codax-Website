/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "rgba(235, 244, 255, 1)",
        secondaryColor: "rgba(3, 57, 119, 1)",
        "custom-black": "rgba(16, 10, 1, 1)",
        "custom-royal-blue": "rgba(15, 10, 51, 1)",
      },
      fontFamily: {
        impact: ["Impact", "sans-serif"],
        impacted: ["Impacted", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        scroll: "scroll 40s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
