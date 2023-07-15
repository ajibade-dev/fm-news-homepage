/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors:{
        "soft-orange": "#e9ab53",
        "soft-red": "#f15e50",
        "off-white": "#fffdfa",
        "grayish-blue": "#c5c6ce",
        "dark-grayish-blue": "#5d5f79",
        "very-dark-blue": "#00001a"
      },
      fontFamily:{
        inter:["Inter", "sans-serif"]
      },
    },
  },
  plugins: [],
}

