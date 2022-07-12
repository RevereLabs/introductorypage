/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'main': "#1178D7",
      'secondary': "#008A61",
      'accent': "#F8F8F8",
      'helper': "#DBDBDB",
      'textMain': "#1E1E1E",
      'textSecondary': "#777777",
    },
    fontFamily:{
      mada:['Mada', 'sans-serif'],
    },
    screens: {
      'small':{
        'max':'800px'
      }
    },
  },
  plugins: [],
}
