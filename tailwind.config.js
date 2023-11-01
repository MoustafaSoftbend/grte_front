/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color_primary':'#bdd5da'
      },
      flex: {
        '2': '2 2 0%'
      }
    },
    grid: {
      '60/40': '2fr 1fr'
    },
  },
  plugins: [],
}
