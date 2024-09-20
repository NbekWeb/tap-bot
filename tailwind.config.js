/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        84: "440px",
        25: "100px",
        18: "72px",
        50: "200px",
      },
      colors: {
        "grey-400": "#d9d9d9",
        "blue-900": "#9BA7D2",
        "blue-600": "#4E5468",
        "dark-200": "#333640",
        "white-13": "rgba(255,255,255,.13)",
      },
    },
  },
  plugins: [],
};
