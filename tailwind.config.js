/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    
    extend: {

      fontFamily: {
        Bowlby: ["Bowlby","sans-serif"],
        Josefin: ["Josefin", "sans-serif"],
      },
     

    },
  },
  plugins: [],
}
