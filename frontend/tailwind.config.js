/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        myFont: ['Montserrat', 'sans-serif'],  // Changed to Montserrat
        myFont2: ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}
