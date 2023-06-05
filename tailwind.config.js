/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'landscape': { 'raw': '(min-height: 376)', 'raw': '(min-width: 867)' }
      }
    },
  },
  plugins: [],
}

