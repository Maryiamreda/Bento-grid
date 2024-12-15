/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        waterline: ['Waterline', 'sans-serif'], // Add Waterline here
      },
      colors: {
        purple: {
          100: 'hsl(254, 88%, 90%)',
          500: 'hsl(256, 67%, 59%)',
        },
        yellow: {
          100: 'hsl(31, 66%, 93%)',
          500: 'hsl(39, 100%, 71%)',
        },
      },
      gridTemplateColumns: {
        // Define a custom 4-column layout with 18vw width each
        '4-cols-18vw': 'repeat(4, 200px)',
      },
    },
  },
  plugins: [],
}