/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily :{
        myFont:['ubuntu','serif'],
        myFont2:["Bowlby One SC", 'serif']
      }
    },
  },
  plugins: [],
}

