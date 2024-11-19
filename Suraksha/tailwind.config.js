/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        wh: "#ffffff",
      },
      spacing: {
        "90vw": "90vw",
        "90vh": "90vh",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
