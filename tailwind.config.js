/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-gama1': '#000000',
        'secondary-gama2':'#FF0000',
        'terciary-gama3':'#A6A6A6'
      }
    },
  },
  plugins: [],
}