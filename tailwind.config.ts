/** @type {import('tailwindcss').Config} */
module.exports = {
   darkMode: 'class', // This is required for manual dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Make sure this includes all your files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}