/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '400px',
    },
    extend: {
      fontFamily: {
        'sedgwick': ['Sedgwick Ave Display', 'cursive'],
      },
    },
  },
  plugins: [],
}