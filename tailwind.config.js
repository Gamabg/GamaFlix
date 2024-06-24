/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gama1': '#000000',
        'gama2':'#FF0000',
        'gama3':'#A6A6A6'
      }
    },
  },
  plugins: [],
}