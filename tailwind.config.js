/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xxs: '0.25rem',
        '1xl':'1.3rem'
      },
      colors: {
        'purple': '#7a042f',
        'grey': '#7d7d7d',
      },
      font: {
        font:'Poppin, Arial,sans-serif',
      }
    },
  },
  plugins: [],
}