/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    daisyui: {
      themes: ["emerald", "forest", "cmyk"],
    },
    extend: {},
  },
  plugins: [require("/daisyui")],
}
